import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface AuthResponse {
  token: string;
  user: {
    username: string;
    email: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API_URL = 'http://localhost:3000/api/auth';
  private currentUser = new BehaviorSubject<AuthResponse | null>(null);

  constructor(private http: HttpClient) {
    // Load user from localStorage if exists
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUser.next(JSON.parse(user));
    }
  }

  signup(data: { username: string; email: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/signup`, data).pipe(
      tap(res => {
        this.currentUser.next(res);
        localStorage.setItem('user', JSON.stringify(res));
        localStorage.setItem('token', res.token);
      })
    );
  }

  login(data: { identifier: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/login`, data).pipe(
      tap(res => {
        this.currentUser.next(res);
        localStorage.setItem('user', JSON.stringify(res));
        localStorage.setItem('token', res.token);
      })
    );
  }

  logout(): void {
    this.currentUser.next(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  get user$(): Observable<AuthResponse | null> {
    return this.currentUser.asObservable();
  }

  get token(): string | null {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    return !!this.token;
  }
}
