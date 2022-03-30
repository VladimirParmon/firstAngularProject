import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, authRoutingModule, CoreModule, FormsModule],
})
export class AuthModule {}
