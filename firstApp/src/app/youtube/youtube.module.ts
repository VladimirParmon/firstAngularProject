import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikesAndViewsCounterComponent } from './components/likes-and-views-counter/likes-and-views-counter.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SortOrderPipe } from '../shared/pipes/sort-order.pipe';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LikesAndViewsCounterComponent, VideoCardComponent, MainPageComponent, SortByPipe, SortOrderPipe],
  imports: [CommonModule, CoreModule],
})
export class YoutubeModule {}
