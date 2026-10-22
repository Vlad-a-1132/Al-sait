#!/usr/bin/env node
'use strict';

// Run from the project directory, with the same IMAGING_* environment as Next.js.
const { ImagingStore } = require('../src/lib/imaging/store.cjs');
const store = new ImagingStore();

async function main() {
  const [command, value, role] = process.argv.slice(2);
  await store.init();
  if (command === 'users') return console.log(JSON.stringify(await store.users(), null, 2));
  if (command === 'add-user') {
    if (!process.env.IMAGING_NEW_PASSWORD) throw new Error('Set IMAGING_NEW_PASSWORD first. Do not pass passwords on the command line.');
    const result = await store.createUser(value, process.env.IMAGING_NEW_PASSWORD, role || 'staff');
    await store.audit('staff_created_cli', { id: 'local-admin' }, { targetId: result.id });
    return console.log(JSON.stringify(result, null, 2));
  }
  if (command === 'reset-password' || command === 'disable-user' || command === 'enable-user') {
    const user = (await store.users()).find(user => user.username === value);
    if (!user) throw new Error('Unknown user.');
    if (command === 'reset-password' && !process.env.IMAGING_NEW_PASSWORD) throw new Error('Set IMAGING_NEW_PASSWORD first.');
    const update = command === 'reset-password' ? { password: process.env.IMAGING_NEW_PASSWORD } : { disabled: command === 'disable-user' };
    const result = await store.updateUser(user.id, update, { id: 'local-admin', role: 'admin' });
    await store.audit('staff_updated_cli', { id: 'local-admin' }, { targetId: user.id });
    return console.log(JSON.stringify(result, null, 2));
  }
  if (command === 'create-token') {
    const result = await store.createToken(value);
    await store.audit('token_created_cli', { id: 'local-admin' }, { targetId: result.id });
    return console.log(JSON.stringify(result, null, 2));
  }
  if (command === 'revoke-token') { await store.revokeToken(value); return console.log('Revoked.'); }
  if (command === 'cleanup') return console.log('Expired uploads removed:', await store.cleanup());
  throw new Error('Usage: node scripts/imaging-admin.cjs users | add-user LOGIN [staff|admin] | reset-password LOGIN | disable-user LOGIN | enable-user LOGIN | create-token LABEL | revoke-token ID | cleanup');
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
