import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { DynamicControlService } from 'src/app/services/dynamic-control.service';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { ControlBase } from 'src/app/shared/controls/control-base';

@Component({
  selector: 'app-profile-user-info-dyn',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    DynamicFormComponent
  ],
  templateUrl: './profile-user-info-dyn.component.html',
  styleUrls: ['./profile-user-info-dyn.component.scss']
})
export class ProfileUserInfoDynComponent implements OnInit {
  form!: FormGroup;
  payLoad = '';
  controls$!: Observable<ControlBase<string>[]>;

  constructor(private dcs: DynamicControlService) {}

  ngOnInit() {
    this.controls$= this.dcs.getControls();
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }


}

// add dependency condition for faculty con