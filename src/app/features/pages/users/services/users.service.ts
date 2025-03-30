import { ApiResponse, User } from '@/models';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  constructor() {}

  getUsers() {
    return this.http.get<ApiResponse<User[]>>(`http://localhost:3001/users/`);
  }

  createUser(email: string, name: string) {
    return this.http.post<ApiResponse<User>>(`http://localhost:3001/users/`, {
      email,
      name,
    });
  }
}
