import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

type ChatDialogMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
  date: string;
};

type ChatDialog = {
  sessionId: string;
  startedAt: string;
  updatedAt: string;
  messages: ChatDialogMessage[];
};

const DATA_FILE = path.join(process.cwd(), "data", "chat-dialogs.json");
const MAX_DIALOGS = 200;
const MAX_MESSAGES_PER_DIALOG = 200;

async function readDialogs(): Promise<ChatDialog[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const dialogs = JSON.parse(raw);
    return Array.isArray(dialogs) ? dialogs : [];
  } catch (error: any) {
    if (error.code === "ENOENT") {
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      return [];
    }

    console.error("Chat dialogs read error:", error);
    return [];
  }
}

async function writeDialogs(dialogs: ChatDialog[]) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(dialogs, null, 2), "utf-8");
}

function isAuthorized(request: NextRequest) {
  const expectedUser = process.env.PRICES_TEST_USER?.trim();
  const expectedPass = process.env.PRICES_TEST_PASS?.trim();

  if (!expectedUser || !expectedPass) {
    return false;
  }

  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) {
    return false;
  }

  try {
    const decoded = Buffer.from(auth.slice(6), "base64").toString("utf-8");
    const colon = decoded.indexOf(":");
    const user = colon === -1 ? decoded : decoded.slice(0, colon);
    const pass = colon === -1 ? "" : decoded.slice(colon + 1);
    return user === expectedUser && pass === expectedPass;
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const dialogs = await readDialogs();

  return NextResponse.json({
    dialogs: [...dialogs].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const sessionId = typeof body.sessionId === "string" ? body.sessionId.trim() : "";
    const role = body.role === "assistant" || body.role === "user" ? body.role : undefined;
    const text = typeof body.text === "string" ? body.text.trim() : "";

    if (!sessionId || !role || !text) {
      return NextResponse.json({ error: "sessionId, role and text are required" }, { status: 400 });
    }

    const now = new Date().toISOString();
    let dialogs = await readDialogs();
    let dialog = dialogs.find((item) => item.sessionId === sessionId);

    if (!dialog) {
      dialog = {
        sessionId,
        startedAt: now,
        updatedAt: now,
        messages: [],
      };
      dialogs.push(dialog);
    }

    dialog.updatedAt = now;
    dialog.messages.push({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      role,
      text,
      date: now,
    });
    dialog.messages = dialog.messages.slice(-MAX_MESSAGES_PER_DIALOG);
    dialogs = dialogs
      .sort((a, b) => a.updatedAt.localeCompare(b.updatedAt))
      .slice(-MAX_DIALOGS);

    await writeDialogs(dialogs);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Chat dialogs write error:", error);
    return NextResponse.json({ error: "Failed to save dialog" }, { status: 500 });
  }
}
