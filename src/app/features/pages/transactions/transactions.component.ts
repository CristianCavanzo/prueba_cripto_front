import { Component, inject, signal } from '@angular/core';
import { TransactionsService } from './services/transactions.service';
import { Transaction } from '@/shared/models/transactions.model';
import { TableComponent } from '@/shared/components/table/table.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PrincipalButtonComponent } from '@/shared/components/buttons/principal/principalButton.component';
import { ModalComponent } from '@/shared/components/modal/modal.component';

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
  idUser: number | null = null;
  transactions = signal<Transaction[]>([]);
  headers = ['ID', 'Amount', 'Date', 'Status', 'Approve Transaction'];
  showModal = signal(false);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.idUser = Number(params.get('idUser')); // Obtiene el id si existe
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

        // Actualizar el estado de la transacción aprobada
        this.transactions.update((current) =>
          current.map((transaction) =>
            transaction.id === id ? { ...response.data } : transaction
          )
        );
      },
      error: (error) => {
        console.error('Error approving transaction:', error);
      },
    });
  }

  addModalCreateTransaction() {
    this.showModal.set(true);
  }
  closeModal() {
    this.showModal.set(false);
  }
  crateTransaction($event: Event, idUser: number | null) {
    $event.preventDefault();
    const form = $event.target as HTMLFormElement;
    const formData = new FormData(form);
    const amount = Number(formData.get('amount'));
    const type = formData.get('type') as 'Deposit' | 'Withdrawal';
    this.transactionServices.createTransaction(amount, idUser, type).subscribe({
      next: (transaction) => {
        console.log(transaction);
        this.transactions.update((prevTransactions) => [
          ...prevTransactions,
          transaction.data,
        ]);
        this.closeModal();
      },
      error: (error) => {
        console.error('Error creating transaction:', error);
      },
    });
  }
}
