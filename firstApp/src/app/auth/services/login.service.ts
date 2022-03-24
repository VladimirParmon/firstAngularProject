import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAuthorized: boolean;
  userName: string;
  constructor(private router: Router) {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('userName');
    this.isAuthorized = token ? true : false;
    this.userName = name ? name : 'Your name';
  }

  fakeLogin(loginName: string, loginPassword: string) {
    this.isAuthorized = true;
    this.userName = loginName;
    localStorage.setItem('userName', loginName);
    localStorage.setItem('token', 'somerandomshit');
    this.router.navigate(['']);
  }

  fakeLogout() {
    this.isAuthorized = false;
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }
}
