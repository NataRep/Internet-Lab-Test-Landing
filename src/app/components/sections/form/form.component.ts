import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator, phoneValidator } from './form.validators';
import { ApiResponse, FormService } from '../../../services/form.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  providers: [FormService],
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnDestroy {
  form: FormGroup;
  submissionStatus = false;
  submissionMessage = '';
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, nameValidator()]],
      phone: ['', [Validators.required, phoneValidator()]],
      agreed: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formService
        .submit(this.form.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response: ApiResponse) => {
            console.log(response.message);
            this.submissionStatus = true;
            this.submissionMessage = 'Сообщение отправлено';
            this.resetForm();
          },
          error: error => {
            console.error('Ошибка при отправке:', error);
            this.submissionStatus = false;
            this.submissionMessage = 'Ошибка при отправке';
          },
        });
    }

    setTimeout(() => {
      this.submissionStatus = false;
      this.submissionMessage = '';
    }, 4000);

    this.resetForm();
  }

  resetForm() {
    this.form.reset();
    this.form.markAsUntouched();
  }

  checkValidity(controlName: string) {
    const control = this.form.get(controlName);
    if (control) {
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
