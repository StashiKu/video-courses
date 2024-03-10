import { CommonModule } from '@angular/common';
import { Component, TemplateRef, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { cardExpireDateValidator } from 'src/app/shared/validators/sync-validators/card-expire-date-validator';

@Component({
  selector: 'app-add-payment-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-payment-modal.component.html',
  styleUrls: ['./add-payment-modal.component.scss']
})
export class AddPaymentModalComponent {
  private modalService = inject(NgbModal);
  public cardForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cardForm = new FormGroup({
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+(?!.)/)
      ]),
      month: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+(?!.)/)
      ]),
      year: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+(?!.)/)
      ]),
      cv: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+(?!.)/)
      ])
    }, { validators: cardExpireDateValidator });
  }

  public open(content: TemplateRef<NgbActiveModal>): void {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			() => {
        this.cardForm.reset();
			},
			() => {
        this.cardForm.reset();
			}
		);
	}

  public onKeyUp(event: KeyboardEvent, content: TemplateRef<NgbActiveModal>): void {
    if (event.key === 'Enter') {
      this.open(content);
    }
  }

  public onSubmit(modal: NgbActiveModal): void {
    if (this.cardForm.valid) {
      modal.close();
    } else {
      this.setFormInvalid();
    }
  }

  setFormInvalid() {
    Object.keys(this.cardForm.controls).filter(controlName => {
      const control = this.cardForm.get(controlName);

      return control?.invalid
    }).forEach(controlName => {
      const control = this.cardForm.get(controlName);
      control?.markAsTouched();
      control?.setErrors({ 'required': true });
    });
  }

  get cardNumber() {
    return this.cardForm.get('cardNumber');
  }

  get month() {
    return this.cardForm.get('month');
  }

  get year() {
    return this.cardForm.get('year');
  }

  get cv() {
    return this.cardForm.get('cv');
  }
}
