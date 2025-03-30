export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  balance: Balance;
}

interface Balance {
  id: number;
  id_user: number;
  amount: string;
  create_at: Date;
}
