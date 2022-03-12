import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, stagger, style, animate, transition, query, sequence } from '@angular/animations';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

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

  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {}

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
}
