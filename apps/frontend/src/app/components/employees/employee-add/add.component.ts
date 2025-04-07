import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log('📝 New Employee:', this.employeeForm.value);
      // TODO: Send to backend (GraphQL mutation or REST)
      this.employeeForm.reset();
    }
  }

  onCancel() {
    this.employeeForm.reset();
  }
}
