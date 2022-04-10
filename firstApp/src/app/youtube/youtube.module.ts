import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInfoPageComponent } from './pages/detailed-info-page/detailed-info-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [MainPageComponent, DetailedInfoPageComponent],
  imports: [CommonModule, YoutubeRoutingModule, CoreModule],
})
export class YoutubeModule {}
