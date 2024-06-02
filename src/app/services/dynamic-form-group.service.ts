import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from '../shared/controls/control-base';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormGroupService {
  toFormGroup(controls: ControlBase<string>[] ) {
    const group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required 
        ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });

    return new FormGroup(group);
  }
}
