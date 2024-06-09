import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    ValidatorFn,
    Validators,
    FormsModule

} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RateComponent, RateOptions } from './rate/rate.component';

export function checkRegExp(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = regExp.test(control.value);

        return !forbidden ? { forbiddenValue: { value: control.value } } : null;
    };
}

export const conformPassword: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    return control.value.password_one === control.value.password_two ? null : { passwordDoNotMatch: true }
}

export interface TemplateFormInterface {
    login: string;
    email: string;
    password: string;
}
@Component({
    selector: 'app-forms',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        RateComponent
    ],
    templateUrl: './forms.component.html',
    styleUrl: './forms.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormsComponent {
    public myForm = new FormGroup({
        login: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    public validatorsForm = new FormGroup({
        mail: new FormControl('', checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)),
        password_one: new FormControl(''),
        password_two: new FormControl('',),
    },
        conformPassword
    );

    public fbForm = this._fb.group({
        fb_name: ['vasy'],
        skills: this._fb.array([]),
    });

    public templateForm: TemplateFormInterface = {
        login: '',
        email: '',
        password: ''
    }

    public customForm = this._fb.group({
        rate: [2]
    });

    public rates: RateOptions = {
        rates: 5,
        text: 'Rate this field'
    }
    constructor(private _fb: FormBuilder) { }

    public get skills(): FormArray {
        return this.fbForm.get('skills') as FormArray;
    }

    public handelValue() {
        if (this.myForm.valid) {
            console.log(this.myForm.value);

        }
    }

    public newSkill(): FormGroup {
        return this._fb.group({
            skill: '',
            experience: ''
        });
    }

    public addSkill(): void {
        this.skills.push(this.newSkill())
    }

    public removeSkill(i: number) {
        this.skills.removeAt(i);
    }

    public onSubmit() {
        console.log(this.skills.value)
    }
}
