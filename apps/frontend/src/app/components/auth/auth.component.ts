import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, LoginComponent, SignUpComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  title = 'Employee Management System | Comp 3133';
  selectedTab: 'login' | 'signup' = 'login';

  switchTab(tab: 'login' | 'signup') {
    this.selectedTab = tab;
  }
}
