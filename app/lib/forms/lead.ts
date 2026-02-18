export type LeadPayload = {
  name: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function submitLead(_payload: LeadPayload) {
  return { ok: true };
}
