import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService, Employee } from '../../../services/employee/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  employees$: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {
    this.employees$ = this.employeeService.getEmployees();
  }

  logout(): void {
    this.employeeService.logout();
    window.location.reload(); // will rerender <app-auth>
  }
}
