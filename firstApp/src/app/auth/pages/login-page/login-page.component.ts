import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { WhatFailedDuringPasswordValidation } from 'src/app/models/other';
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
      const password: string = control.value;

      let validationResult: boolean | WhatFailedDuringPasswordValidation = false;

      const validateUsingRegex = (password: string) => {
        enum checkFor {
          lowerCase = '(?=.*[a-z])',
          upperCase = '(?=.*[A-Z])',
          integer = '(?=.*[0-9])',
          symbol = '(?=.*[!@#$%^&*])',
          length = '(?=.{8,})',
        }
        const overallValidityRegExp: RegExp = new RegExp(
          checkFor.integer + checkFor.length + checkFor.lowerCase + checkFor.symbol + checkFor.upperCase
        );

        const isValidPassword: boolean = overallValidityRegExp.test(password);

        if (isValidPassword) {
          return true;
        } else {
          return {
            lowerCaseFailed: !new RegExp(checkFor.lowerCase).test(password),
            upperCaseFailed: !new RegExp(checkFor.upperCase).test(password),
            integerFailed: !new RegExp(checkFor.integer).test(password),
            symbolFailed: !new RegExp(checkFor.symbol).test(password),
            lengthFailed: !new RegExp(checkFor.length).test(password),
          };
        }
      };

      validationResult = validateUsingRegex(password);

      if (validationResult === true) {
        return null;
      } else {
        const caseMixtureFail = validationResult['upperCaseFailed'] || validationResult['lowerCaseFailed'];
        const integerAndLetterMixtureFail =
          validationResult['integerFailed'] ||
          (validationResult['upperCaseFailed'] && validationResult['lowerCaseFailed']);
        return {
          passwordValidation: true,
          caseFail: caseMixtureFail,
          charFail: integerAndLetterMixtureFail,
          stringLengthFail: validationResult['lengthFailed'],
          symbolFail: validationResult['symbolFailed'],
        };
      }
    };
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
