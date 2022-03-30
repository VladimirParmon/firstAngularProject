import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { Page404Component } from '../core/pages/page404/page404.component';
import { coreRoutingModule } from '../core/core-routing.module';

@NgModule({
  declarations: [Page404Component],
  imports: [CommonModule, CoreModule, coreRoutingModule],
})
export class SharedModule {}
