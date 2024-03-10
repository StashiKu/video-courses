import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { AuthService, User } from '@auth0/auth0-angular';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentService } from 'src/app/services/payment.service';
import { cardExpireDateValidator } from 'src/app/shared/validators/sync-validators/card-expire-date-validator';
import { IPaymentMethod } from 'src/app/types/payment-method';

@Component({
  selector: 'app-add-payment-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-payment-modal.component.html',
  styleUrls: ['./add-payment-modal.component.scss']
})
export class AddPaymentModalComponent implements OnInit {
  private modalService = inject(NgbModal);
  public cardForm!: FormGroup;
  private user: User|null|undefined;

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private authService: AuthService) {
    this.cardForm = this.initForm();
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(
      user => this.user = user
    );
  }

  private initForm(): FormGroup {
    return new FormGroup({
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
      cvv: new FormControl('', [
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

  public addPaymentMethod(): void {
    const data: IPaymentMethod = {
      ...this.cardForm.value,
      email: this.user?.email,
    }
    this.paymentService.addPaymentMethod(data).subscribe(
      () => {
        this.modalService.dismissAll();
      }
    );

  }

  public onSubmit(modal: NgbActiveModal): void {
    if (this.cardForm.valid) {
      this.addPaymentMethod();
      modal.close();
    }
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

  get cvv() {
    return this.cardForm.get('cvv');
  }
}
