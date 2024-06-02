import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  AbstractControl
} from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
import { UniversitiesService } from 'src/app/services/universities.service';
import { DynamicFormControlComponent } from 'src/app/shared/components/dynamic-form-control/dynamic-form-control.component';
import { IUniversity } from 'src/app/types/university';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    DynamicFormControlComponent
  ],
  selector: 'app-profile-user-info',
  templateUrl: './profile-user-info.component.html',
  styleUrls: ['./profile-user-info.component.scss']
})
export class ProfileUserInfoComponent {
  public userDataForm!: FormGroup;
  public eduList!: string[];
  public selected!: string;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private univService: UniversitiesService
  ) {
    this.userDataForm = this.initForm();
    this.userDataForm.get('education')?.valueChanges.subscribe(() => {
      this.toggleFacultyControl();
    });
    this.eduList = ['test', 'test2', 'test3'];
  }

  public search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			switchMap((term) =>
				term.length < 2 ? [] : this.univService.getUniversities(term)
			),
      map<IUniversity[], string[]>((data: IUniversity[]) => data.map((uni: IUniversity) => `${uni.name}, ${uni.country}`))
		);

  private initForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['stas', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      country: [''],
      education: [''],
      faculty: ['', Validators.required]
    });
  }

  toggleFacultyControl() {
    const educationControl = this.userDataForm.get('education');
    const facultyControl = this.userDataForm.get('faculty');
  
    if (educationControl && facultyControl) {
      if (educationControl.value) {
        facultyControl.enable();
      } else {
        facultyControl.disable();
      }
    }
  }

  public onSubmit() {
    console.log(this.userDataForm.value, '<<<<');
  }

  get firstName(): AbstractControl {
    return this.userDataForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.userDataForm.get('lastName')!;
  }

  get address(): AbstractControl {
    return this.userDataForm.get('address')!;
  }

  get education(): AbstractControl {
    return this.userDataForm.get('education')!;
  }

  get faculty(): AbstractControl {
    return this.userDataForm.get('faculty')!;
  }
}
