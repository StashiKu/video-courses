import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const cardExpireDateValidator: ValidatorFn = (
    control: AbstractControl,
  ): ValidationErrors | null => {
    const month = control.get('month');
    const year = control.get('year');

    const currentYear = new Date().getFullYear() % 100;
    const currenMonth = new Date().getMonth() + 1;

    return month?.value && year?.value && (month.value < currenMonth || year.value < currentYear)
      ? { validExpireDate: true }
      : null;
};