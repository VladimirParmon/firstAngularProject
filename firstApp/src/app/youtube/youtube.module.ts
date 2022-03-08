import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikesAndViewsCounterComponent } from './components/likes-and-views-counter/likes-and-views-counter.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { SortByPipe } from './pipes/sort-by.pipe';
import { SortOrderPipe } from '../shared/pipes/sort-order.pipe';
import { CoreModule } from '../core/core.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { Page404Component } from './pages/page404/page404.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DetailedInfoComponent } from './pages/detailed-info/detailed-info.component';

import { mainPageRoutingModule } from './pages/main-page/main-page-routing.module';
import { detailedInfoPageRoutingModule } from './pages/detailed-info/detailed-info-routing.module';
import { loginPageRoutingModule } from './pages/login-page/login-page-routing.module';
import { page404RoutingModule } from './pages/page404/page404-routing.module';

@NgModule({
  declarations: [
    LikesAndViewsCounterComponent,
    VideoCardComponent,
    MainPageComponent,
    SortByPipe,
    SortOrderPipe,
    Page404Component,
    LoginPageComponent,
    DetailedInfoComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    mainPageRoutingModule,
    detailedInfoPageRoutingModule,
    loginPageRoutingModule,
    page404RoutingModule,
  ],
})
export class YoutubeModule {}
