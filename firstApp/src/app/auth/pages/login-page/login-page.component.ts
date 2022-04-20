import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [
    trigger('windowTransition', [
      transition(':enter', [
        sequence([
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('500ms', style({ transform: 'translateX(0%)', opacity: 1 })),
        ]),
      ]),
      transition(':leave', [
        sequence([
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate('500ms', style({ transform: 'translateX(-100%)', opacity: 0 })),
        ]),
      ]),
    ]),
  ],
})
export class LoginPageComponent {
  isLoginWindowShown: boolean = true;

  loginForm: FormGroup = this.fb.group({
    loginEmail: ['', Validators.compose([Validators.email, Validators.required])],
    loginPassword: ['', [Validators.required, this.passwordValidator()]],
  });

  constructor(private service: LoginService, private fb: FormBuilder) {}

  menuFlipper(): void {
    this.isLoginWindowShown = !this.isLoginWindowShown;
  }

  onSubmitLogin(): void {
    this.service.fakeLogin(this.loginForm.value.loginEmail);
  }

  onSubmitReg() {
    //TODO: user registration
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const string = control.value;

      let stringLength: boolean = false;
      let upperCase: boolean = false;
      let lowerCase: boolean = false;
      let letter: boolean = false;
      let number: boolean = false;
      let symbol: boolean = false;

      let isValid: boolean = false;

      const validate = (): boolean => {
        const arr = string.split('');
        const symbols: string[] = ['!', '@', '#', '?', ']', '[', ')', '(', '%', '{', '}'];
        let result: boolean = false;

        if (string.length >= 8) stringLength = true;

        arr.forEach((element: string) => {
          if (isNaN(Number(element))) {
            letter = true;
            if (symbols.includes(element)) {
              symbol = true;
            } else {
              if (element.toUpperCase() === element) upperCase = true;
              if (element.toLowerCase() === element) lowerCase = true;
            }
          } else {
            number = true;
          }
        });

        if (upperCase && lowerCase && letter && number && symbol && stringLength) result = true;
        return result;
      };

      isValid = validate();

      if (isValid) {
        return null;
      } else {
        const caseFail = upperCase && lowerCase;
        const charFail = letter && number;
        return {
          passwordValidation: true,
          caseFail: !caseFail,
          charFail: !charFail,
          stringLengthFail: !stringLength,
          symbolFail: !symbol,
        };
      }
    };
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
