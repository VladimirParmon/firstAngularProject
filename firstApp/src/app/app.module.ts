import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SortingComponent } from './header/sorting/sorting.component';
import { VideoCardComponent } from './list of videos/video-card/video-card.component';
import { LikesAndViewsCounterComponent } from './list of videos/likes-and-views-counter/likes-and-views-counter.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SortingComponent, VideoCardComponent, LikesAndViewsCounterComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
