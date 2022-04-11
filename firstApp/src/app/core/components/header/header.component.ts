import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { DataService } from 'src/app/youtube/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('searchOptionsOpenClose', [
      state(
        'open',
        style({
          height: '50px',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
        })
      ),
      transition('open <=> closed', [animate('0.4s')]),
    ]),
  ],
})
export class HeaderComponent {
  isHeaderSearchOptionsMenuOpen: boolean = false;
  searchBarString: string = '';

  constructor(private service: DataService, private router: Router, public loginService: LoginService) {}

  toggle(): void {
    this.isHeaderSearchOptionsMenuOpen = !this.isHeaderSearchOptionsMenuOpen;
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  logout(): void {
    this.loginService.fakeLogout();
  }

  search(): void {
    if (this.searchBarString && this.searchBarString.length >= 3) {
      this.service.getVideos(this.searchBarString);
    }
  }
}
