import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, authRoutingModule, CoreModule, FormsModule, ReactiveFormsModule],
})
export class AuthModule {}
