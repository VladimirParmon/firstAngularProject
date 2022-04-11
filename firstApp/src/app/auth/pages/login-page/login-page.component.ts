import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
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
  isLoginWindow: boolean = true;
  loginName: string = '';
  loginPassword: string = '';
  regFirstName: string = '';
  regLastName: string = '';
  regMail: string = '';
  regPassword: string = '';

  constructor(private service: LoginService) {}

  menuFlipper(): void {
    this.isLoginWindow = !this.isLoginWindow;
  }

  onSubmitLogin(): void {
    this.service.fakeLogin(this.loginName);
  }

  onSubmitReg() {
    //TODO: user registration
  }
}
