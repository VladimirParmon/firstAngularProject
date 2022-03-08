import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SortingComponent } from './components/header/sorting/sorting.component';

@NgModule({
  declarations: [HeaderComponent, SortingComponent],
  imports: [CommonModule],
})
export class CoreModule {}
