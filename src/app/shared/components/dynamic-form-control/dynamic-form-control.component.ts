import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlBase } from '../../controls/control-base';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent {
  @Input() control!: ControlBase<string>;
  @Input() form!: FormGroup;

  constructor() {
    // this.form.get('')
  }

  get isValid() {
    return this.form.controls[this.control.key].valid;
  }
}
