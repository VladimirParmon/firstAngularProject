import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingGuardGuard } from 'src/app/auth/guard/routing-guard.guard';

import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'detailed-info',
    canActivate: [RoutingGuardGuard],
    component: DetailedInfoComponent,
  },
  {
    path: '',
    canActivate: [RoutingGuardGuard],
    component: MainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class youtubeRoutingModule {}
