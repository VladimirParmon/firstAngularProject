import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SortingComponent } from './header/sorting/sorting.component';
import { VideoCardComponent } from './list of videos/video-card/video-card.component';
import { LikesAndViewsCounterComponent } from './list of videos/likes-and-views-counter/likes-and-views-counter.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { DataService } from './data.service';
import { SortOrderPipe } from './pipes/sort-order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortingComponent,
    VideoCardComponent,
    LikesAndViewsCounterComponent,
    SortByPipe,
    SortOrderPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
