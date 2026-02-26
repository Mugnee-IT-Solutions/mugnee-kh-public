export type LeadPayload = {
  name: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function submitLead(payload: LeadPayload) {
  void payload;
  return { ok: true };
}
