import { ApiResponse, User } from '@/shared/models';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.API_URL}/users/`;
  constructor() {}

  getUsers() {
    return this.http.get<ApiResponse<User[]>>(`${this.apiUrl}`);
  }

  createUser(email: string, name: string) {
    return this.http.post<ApiResponse<User>>(`${this.apiUrl}`, {
      email,
      name,
    });
  }
}
