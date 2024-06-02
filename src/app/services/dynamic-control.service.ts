import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TextInput } from '../shared/controls/text-input';
import { ControlBase } from '../shared/controls/control-base';
import { AutoCompleteInput } from '../shared/controls/autocomplete-input';

@Injectable({
  providedIn: 'root'
})
export class DynamicControlService {

  getControls() {

    const controls: ControlBase<string>[] = [

      new TextInput({
        key: 'firstName',
        label: 'First Name',
        value: '',
        order: 1
      }),

      new TextInput({
        key: 'lasttName',
        label: 'Last Name',
        value: '',
        required: true,
        order: 2
      }),

      new TextInput({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 3
      }),

      new TextInput({
        key: 'country',
        label: 'Country',
        order: 4
      }),

      new AutoCompleteInput({
        key: 'education',
        label: 'Education',
        order: 5,
        conditions: 'education?.value'
      }),

      new TextInput({
        key: 'faculty',
        label: 'Faculty',
        type: 'faculty',
        order: 6
      }),
    ];

    return of(controls.sort((a, b) => a.order - b.order));
  }
}
