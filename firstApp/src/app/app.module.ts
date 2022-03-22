import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { YoutubeModule } from './youtube/youtube.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { YoutubeInterceptor } from './youtube/interceptors/youtube.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    YoutubeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
