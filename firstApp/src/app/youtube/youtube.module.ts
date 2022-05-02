import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInfoPageComponent } from './pages/detailed-info-page/detailed-info-page.component';
import { CoreModule } from '../core/core.module';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { ViewsAndLikesCounterComponent } from './components/views-and-likes-counter/views-and-likes-counter.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SortOrderPipe } from './pipes/sort-order.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CustomVideoCardComponent } from './components/custom-video-card/custom-video-card.component';

@NgModule({
  declarations: [
    MainPageComponent,
    DetailedInfoPageComponent,
    VideoCardComponent,
    ViewsAndLikesCounterComponent,
    SortByPipe,
    SortOrderPipe,
    HighlightDirective,
    AdminPageComponent,
    CustomVideoCardComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule, CoreModule, ReactiveFormsModule],
})
export class YoutubeModule {}
