import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/auth/services/login.service';
import { loadAPIVideos } from 'src/app/redux/actions/youtube.actions';

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

  constructor(private store: Store, private router: Router, public loginService: LoginService) {}

  toggleMenu(): void {
    this.isHeaderSearchOptionsMenuOpen = !this.isHeaderSearchOptionsMenuOpen;
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  goAdmin(): void {
    this.router.navigate(['admin-page']);
  }

  logout(): void {
    this.loginService.fakeLogout();
  }

  search(): void {
    if (this.searchBarString && this.searchBarString.length >= 3) {
      this.store.dispatch(loadAPIVideos({ string: this.searchBarString }));
    }
  }
}
