import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SortingComponent } from './components/header/sorting/sorting.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SortingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
