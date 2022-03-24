import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { authRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, CoreModule, FormsModule, authRoutingModule],
})
export class AuthModule {}
