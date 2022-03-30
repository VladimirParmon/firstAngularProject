import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, animate, transition, sequence } from '@angular/animations';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
export class LoginPageComponent implements OnInit {
  isLoginWindow = true;
  @ViewChild('loginName') loginName!: ElementRef;
  @ViewChild('loginPassword') loginPassword!: ElementRef;

  @ViewChild('regFirstName') regFirstName!: ElementRef;
  @ViewChild('regLastName') regLastName!: ElementRef;
  @ViewChild('regMail') regMail!: ElementRef;
  @ViewChild('regPassword') regPassword!: ElementRef;

  constructor(private service: LoginService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    loginEmail: ['', Validators.compose([Validators.email, Validators.required])],
    loginPassword: ['', [Validators.required, this.passwordValidator()]],
  });

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const string = control.value;

      let stringLength = false;
      let upperCase = false;
      let lowerCase = false;
      let letter = false;
      let number = false;
      let symbol = false;

      let isValid = false;

      const validate = () => {
        const arr = string.split('');
        const symbols = ['!', '@', '#', '?', ']', '[', ')', '(', '%', '{', '}'];
        let result = false;

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

  menuFlipper() {
    this.isLoginWindow = !this.isLoginWindow;
  }

  onSubmitLogin() {
    const loginName = this.loginName.nativeElement.value;
    const loginPassword = this.loginPassword.nativeElement.value;
    this.service.fakeLogin(loginName, loginPassword);
    this.service.isAuthorized = true;
    this.router.navigate(['']);
  }

  onSubmitReg() {
    console.log(this.regFirstName.nativeElement.value);
    console.log(this.regLastName.nativeElement.value);
    console.log(this.regMail.nativeElement.value);
    console.log(this.regPassword.nativeElement.value);
  }

  get forms() {
    return this.loginForm.controls;
  }
}
