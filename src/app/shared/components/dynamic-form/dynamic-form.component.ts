import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DynamicFormControlComponent } from '../dynamic-form-control/dynamic-form-control.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlBase } from '../../controls/control-base';
import { DynamicFormGroupService } from 'src/app/services/dynamic-form-group.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    DynamicFormControlComponent,
    ReactiveFormsModule
  ],
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: ControlBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private dfg: DynamicFormGroupService) {}

  ngOnInit() {
    this.form = this.dfg.toFormGroup(this.controls as ControlBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
