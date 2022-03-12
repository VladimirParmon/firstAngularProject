import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingGuardGuard } from 'src/app/auth/guard/routing-guard.guard';

import { DetailedInfoComponent } from './detailed-info.component';

const routes: Routes = [
  {
    path: 'detailed-info',
    canActivate: [RoutingGuardGuard],
    component: DetailedInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class detailedInfoPageRoutingModule {}
