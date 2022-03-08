import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesAndViewsCounterComponent } from './components/likes-and-views-counter/likes-and-views-counter.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SortOrderPipe } from '../shared/pipes/sort-order.pipe';

@NgModule({
  declarations: [
    LikesAndViewsCounterComponent,
    VideoCardComponent,
    MainPageComponent,
    HeaderComponent,
    SortByPipe,
    SortOrderPipe,
  ],
  imports: [CommonModule],
})
export class YoutubeModule {}
