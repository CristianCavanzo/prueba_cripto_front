import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '@/shared/models';
import { Transaction } from '@/shared/models/transactions.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.API_URL}/transactions/`;
  constructor() {}
  getTransactions(id?: string | null) {
    let url = `${this.apiUrl}${id ? id : ''}`;
    console.log(url);
    return this.http.get<ApiResponse<Transaction[]>>(url);
  }

  approveTransaction(id: number) {
    return this.http.patch<ApiResponse<Transaction>>(
      `${this.apiUrl}updateStatus/${id}`,
      {
        status: 'Success',
      }
    );
  }
}
