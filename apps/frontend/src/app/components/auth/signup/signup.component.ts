import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.invalid) return;

    this.authService.signup(this.signupForm.value).subscribe({
      next: (res) => {
        console.log('✅ Signup success:', res);
        alert('Signup successful! Please log in.');
        this.signupForm.reset();
      },
      error: (err) => {
        console.error('❌ Signup failed:', err);
        alert(err.error?.message || 'Signup failed. Try again.');
      }
    });
  }
}
