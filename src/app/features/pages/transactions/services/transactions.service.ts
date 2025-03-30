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
  getTransactions() {
    return this.http.get<ApiResponse<Transaction[]>>(`${this.apiUrl}`);
  }
}
