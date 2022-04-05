import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LikesAndViewsCounterComponent } from './components/likes-and-views-counter/likes-and-views-counter.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SortOrderPipe } from '../shared/pipes/sort-order.pipe';
import { CoreModule } from '../core/core.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';

import { youtubeRoutingModule } from './youtube-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { EffectsModule } from '@ngrx/effects';
import { YoutubeEffects } from '../redux/effects/youtube.effects';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    LikesAndViewsCounterComponent,
    VideoCardComponent,
    MainPageComponent,
    SortByPipe,
    SortOrderPipe,
    DetailedInfoComponent,
    AdminComponent,
    HighlightDirective,
  ],
  imports: [CommonModule, CoreModule, youtubeRoutingModule, ReactiveFormsModule, EffectsModule.forFeature([YoutubeEffects])],
})
export class YoutubeModule {}
