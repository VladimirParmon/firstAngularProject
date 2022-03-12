import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { loginPageRoutingModule } from './pages/login-page/login-page-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, loginPageRoutingModule, CoreModule, FormsModule],
})
export class AuthModule {}
