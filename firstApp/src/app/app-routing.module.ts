import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingGuardGuard } from './auth/guard/routing-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    loadChildren: () => import('./shared/shared.module').then((m) => m.SharedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
