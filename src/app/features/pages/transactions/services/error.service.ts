import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error = signal(false);
  errorMessage = signal('');

  constructor() {}

  setError(error: boolean) {
    this.error.set(error);
  }

  setErrorMessage(message: string) {
    this.errorMessage.set(message);
  }
  clearError() {
    this.error.set(false);
    this.errorMessage.set('');
  }
}
