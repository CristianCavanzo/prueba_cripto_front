import { Component, inject, signal } from '@angular/core';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from '@/shared/models/transactions.model';
import { TableComponent } from '@/shared/components/table/table.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PrincipalButtonComponent } from '@/shared/components/buttons/principal/principalButton.component';

@Component({
  selector: 'app-transactions',
  imports: [TableComponent, CommonModule, PrincipalButtonComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  private transactionServices = inject(TransactionsService);
  private transactionId: string | null = null;
  transactions = signal<Transaction[]>([]);
  headers = ['ID', 'Amount', 'Date', 'Status', 'Approve Transaction'];

  constructor(private route: ActivatedRoute) {}

  // data = signal<>
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.transactionId = params.get('idUser'); // Obtiene el id si existe
    });

    this.transactionServices.getTransactions(this.transactionId).subscribe({
      next: (transactions) => {
        this.transactions.set(transactions.data);
      },
      error: (error) => {
        console.error('Error fetching transactions:', error);
      },
    });
  }

  approveTransaction(id: number) {
    this.transactionServices.approveTransaction(id).subscribe({
      next: (response) => {
        console.log('Transaction approved:', response);
        // Actualizar la lista de transacciones después de aprobar una
        this.transactionServices.approveTransaction(id).subscribe({
          next: (transactions) => {
            this.transactions.update((current) =>
              current.map((transaction) => {
                if (transaction.id === id) {
                  return transactions.data;
                }
                return transaction;
              })
            );
          },
          error: (error) => {
            console.error('Error fetching transactions:', error);
          },
        });
      },
      error: (error) => {
        console.error('Error approving transaction:', error);
      },
    });
  }
}
