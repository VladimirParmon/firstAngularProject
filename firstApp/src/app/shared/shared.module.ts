import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { Page404Component } from './pages/page404/page404.component';
import { page404RoutingModule } from './pages/page404/page404-routing.module';

@NgModule({
  declarations: [Page404Component],
  imports: [CommonModule, CoreModule, page404RoutingModule],
})
export class SharedModule {}
