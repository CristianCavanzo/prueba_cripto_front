export interface Transaction {
  id: number;
  amount: string;
  description: null;
  createdAt: Date;
  updatedAt: Date;
  type: Status;
  status: Status;
}

interface Status {
  name: string;
}
