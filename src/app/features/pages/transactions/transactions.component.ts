import { Component, inject, signal } from '@angular/core';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from '@/shared/models/transactions.model';
import { TableComponent } from '@/shared/components/table/table.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PrincipalButtonComponent } from '@/shared/components/buttons/principal/principalButton.component';
import { ModalComponent } from '@/shared/components/modal/modal.component';
import { ErrorService } from './services/error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-transactions',
  imports: [
    TableComponent,
    CommonModule,
    PrincipalButtonComponent,
    ModalComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  private transactionServices = inject(TransactionsService);
  private route = inject(ActivatedRoute);
  private errorService = inject(ErrorService);
  idUser: number | null = null;
  transactions = signal<Transaction[]>([]);
  headers = ['ID', 'Amount', 'Date', 'Type', 'Status', 'Approve Transaction'];
  showModal = signal(false);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.idUser = Number(params.get('idUser'));
    });

    this.transactionServices.getTransactions(this.idUser).subscribe({
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
        this.transactions.update((current) =>
          current.map((transaction) =>
            transaction.id === id
              ? { ...transaction, status: { name: 'Success' } }
              : transaction
          )
        );
      },
      error: (error) => {},
    });
  }

  addModalCreateTransaction() {
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }
  createTransaction($event: Event, idUser: number | null) {
    $event.preventDefault();
    const form = $event.target as HTMLFormElement;
    const formData = new FormData(form);
    const amount = Number(formData.get('amount'));
    const type = formData.get('type') as 'Deposit' | 'Withdrawal';
    this.transactionServices.createTransaction(amount, idUser, type).subscribe({
      next: (transaction) => {
        this.transactions.update((prevTransactions) => [
          ...prevTransactions,
          transaction.data,
        ]);
        this.closeModal();
      },
      error: (error) => {
        const message =
          error?.error?.data?.constraints || 'Error creating transaction';
        this.errorService.setError(true);
        this.errorService.setErrorMessage(message);
      },
    });
  }
}
