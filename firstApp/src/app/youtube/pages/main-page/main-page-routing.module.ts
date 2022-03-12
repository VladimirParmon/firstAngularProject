import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingGuardGuard } from 'src/app/auth/guard/routing-guard.guard';

import { MainPageComponent } from './main-page.component';

const routes: Routes = [
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
export class mainPageRoutingModule {}
