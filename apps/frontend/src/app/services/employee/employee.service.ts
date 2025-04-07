import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
}

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees$ = new BehaviorSubject<Employee[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com', position: 'Developer', department: 'IT' },
    { id: 2, name: 'Bob', email: 'bob@example.com', position: 'Manager', department: 'HR' }
  ]);

  getEmployees(): Observable<Employee[]> {
    return this.employees$.asObservable();
  }

  logout() {
    localStorage.removeItem('token');
  }
}
