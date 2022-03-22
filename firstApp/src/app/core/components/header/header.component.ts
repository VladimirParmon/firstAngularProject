import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';
import { DataService } from 'src/app/youtube/services/data.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('headerOpenClose', [
      state(
        'open',
        style({
          height: '130px',
        })
      ),
      state(
        'closed',
        style({
          height: '80px',
        })
      ),
      transition('open <=> closed', [animate('0.4s')]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  searchBarString: string;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {}

  constructor(private service: DataService, private router: Router, public loginService: LoginService) {
    this.searchBarString = '';
  }

  goHome() {
    this.router.navigate(['']);
  }

  logout() {
    this.loginService.fakeLogout();
  }

  search() {
    if (this.searchBarString && this.searchBarString.length >= 3) {
      this.service.getVideos(this.searchBarString);
    }
  }
}
