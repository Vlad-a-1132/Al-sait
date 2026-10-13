type LabEvent = 'lab_add' | 'lab_remove' | 'lab_call' | 'lab_booking' | 'lab_copy_list';
export function labEvent(event: LabEvent) {
  // No test names, codes, search terms, patient data or URLs in analytics events.
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('altamed:analytics', { detail: { event, section: 'laboratory' } }));
}
