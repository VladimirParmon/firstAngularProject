import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInfoPageComponent } from './pages/detailed-info-page/detailed-info-page.component';

const routes: Routes = [
  {
    path: 'detailed-info',
    component: DetailedInfoPageComponent,
  },
  {
    path: '',
    component: MainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
