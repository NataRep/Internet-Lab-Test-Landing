import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const name = control.value?.trim();
    const namePattern = /^[A-Za-zА-Яа-яЁё\s-]+$/;
    return name && !namePattern.test(name) ? { invalidName: true } : null;
  };
}

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const phone = control.value?.trim();
    const phonePattern = /^(?:\+?\d|8)?[-\s]?(\(?\d{3}\)?[-\s]?|\d{3})\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    const valid = phonePattern.test(phone);
    return valid ? null : { invalidPhone: true };
  };
}
