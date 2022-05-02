import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralRoutingGuard } from './guards/general-routing.guard';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: Page404Component,
    canActivate: [GeneralRoutingGuard],
    canLoad: [GeneralRoutingGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
