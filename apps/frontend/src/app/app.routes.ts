import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ListComponent } from './components/employees/employee-list/list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'employees', component: ListComponent },
  { path: '**', redirectTo: 'auth' } 
];
