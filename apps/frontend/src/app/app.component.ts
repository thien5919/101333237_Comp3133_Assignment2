import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SessionService } from './services/session/session.service';
import { CommonModule } from '@angular/common';



@Component({
  imports: [ RouterModule, CommonModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private session: SessionService) {}
  logout(): void {
    this.session.logout();
    localStorage.removeItem('token');
    window.location.reload(); // force re-render
  }
  
  
}
