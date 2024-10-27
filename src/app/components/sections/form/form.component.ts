import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator, phoneValidator } from './form.validators';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form: FormGroup;
  message = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, nameValidator()]],
      phone: ['', [Validators.required, phoneValidator()]],
      agreed: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Форма отправлена:', this.form.value);
      this.form.reset({
        name: '',
        phone: '',
        agreed: false,
      });
      this.form.markAsUntouched();
      this.showMessage();
    }
  }

  checkValidity(controlName: string) {
    const control = this.form.get(controlName);
    if (control) {
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }

  showMessage() {
    this.message = true;
    setTimeout(() => (this.message = false), 2500);
  }
}
