import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInfoPageComponent } from './pages/detailed-info-page/detailed-info-page.component';
import { CoreModule } from '../core/core.module';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { ViewsAndLikesCounterComponent } from './components/views-and-likes-counter/views-and-likes-counter.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SortOrderPipe } from './pipes/sort-order.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [MainPageComponent, DetailedInfoPageComponent, VideoCardComponent, ViewsAndLikesCounterComponent, SortByPipe, SortOrderPipe, HighlightDirective],
  imports: [CommonModule, YoutubeRoutingModule, CoreModule],
})
export class YoutubeModule {}
