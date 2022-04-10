import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { SortingMenuComponent } from './components/sorting-menu/sorting-menu.component';

@NgModule({
  declarations: [SortingMenuComponent, HeaderComponent],
  imports: [CommonModule, CoreRoutingModule, FormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
