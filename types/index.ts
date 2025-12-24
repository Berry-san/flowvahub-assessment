export interface User {
  id: string;
  email: string;
  points: number;
  streak: number;
  last_claim: string | null;
  referral_code: string | null;
  created_at: string;
}
