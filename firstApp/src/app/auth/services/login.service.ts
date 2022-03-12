import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  isAuthorized = false;
  // token = '';
  // firstName = '';
  // secondName = '';
  // mail = '';
  // password = '';

  fakeLogin(loginName: string, loginPassword: string) {
    this.isAuthorized = true;
    localStorage.setItem('token', 'somerandomshit');
  }
}
