import { Component, inject, signal } from '@angular/core';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from '@/shared/models/transactions.model';
import { TableComponent } from '@/shared/components/table/table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [TableComponent, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  private transactionServices = inject(TransactionsService);
  transactions = signal<Transaction[]>([]);
  headers = ['ID', 'Amount', 'Date', 'Status'];

  // data = signal<>
  ngOnInit() {
    this.transactionServices.getTransactions().subscribe({
      next: (transactions) => {
        this.transactions.set(transactions.data);
      },
      error: (error) => {
        console.error('Error fetching transactions:', error);
      },
    });
  }
}
