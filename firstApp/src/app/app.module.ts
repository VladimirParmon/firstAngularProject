import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SortingComponent } from './header/sorting/sorting.component';
import { ListOfVideosComponent } from './list-of-videos/list-of-videos.component';
import { VideoCardComponent } from './list-of-videos/video-card/video-card.component';
import { LikesAndViewsCounterComponent } from './list-of-videos/likes-and-views-counter/likes-and-views-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortingComponent,
    ListOfVideosComponent,
    VideoCardComponent,
    LikesAndViewsCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
