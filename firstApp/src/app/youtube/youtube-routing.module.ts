import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInfoPageComponent } from './pages/detailed-info-page/detailed-info-page.component';
import { GeneralRoutingGuard } from '../core/guards/general-routing.guard';

const routes: Routes = [
  {
    path: 'detailed-info',
    component: DetailedInfoPageComponent,
    canActivate: [GeneralRoutingGuard],
    canLoad: [GeneralRoutingGuard],
  },
  {
    path: '',
    component: MainPageComponent,
    canActivate: [GeneralRoutingGuard],
    canLoad: [GeneralRoutingGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
