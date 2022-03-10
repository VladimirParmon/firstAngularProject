import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';
import { Page404Component } from './youtube/pages/page404/page404.component';
import { LoginPageComponent } from './youtube/pages/login-page/login-page.component';
import { DetailedInfoComponent } from './youtube/pages/detailed-info/detailed-info.component';

// const routes: Routes = [
//   { path: '', component: MainPageComponent },
//   { path: 'login', component: LoginPageComponent },
//   { path: '404', component: Page404Component },
//   { path: 'detailed-info', component: DetailedInfoComponent },
// ];

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: '**',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: 'detailed-info',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
