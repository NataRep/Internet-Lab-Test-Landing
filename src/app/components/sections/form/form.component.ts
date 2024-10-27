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
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, nameValidator()]],
      phone: ['', [Validators.required, phoneValidator()]],
      agreed: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Форма отправлена:', this.userForm.value);
    } else {
      console.log('Форма невалидна');
    }
  }

  checkValidity(controlName: string) {
    const control = this.userForm.get(controlName);
    if (control) {
      control.markAsTouched(); // Устанавливаем статус поля как "touched" для отображения ошибок
      control.updateValueAndValidity(); // Обновляем валидность поля
    }
  }
}
