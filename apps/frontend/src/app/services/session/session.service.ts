import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SessionService {
  login(): void {
    localStorage.setItem('token', 'true'); 
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
