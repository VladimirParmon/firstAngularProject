import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, CoreModule],
})
export class AuthModule {}
