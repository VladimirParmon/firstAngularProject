import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailedInfoComponent } from './detailed-info.component';

const routes: Routes = [
  {
    path: 'detailed-info',
    component: DetailedInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class detailedInfoPageRoutingModule {}
