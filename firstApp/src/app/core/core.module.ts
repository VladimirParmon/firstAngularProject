import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { SortingMenuComponent } from './components/sorting-menu/sorting-menu.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [SortingMenuComponent, HeaderComponent, Page404Component],
  imports: [CommonModule, CoreRoutingModule, FormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
