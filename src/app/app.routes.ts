import { Routes } from '@angular/router';
import { TransactionsComponent } from './features/pages/transactions/transactions.component';
import { UsersComponent } from './features/pages/users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
];
