import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ThumbnailsDescription, VideoItem } from 'src/app/models/youtubeResponse';
import { loadSingleAPIVideo } from 'src/app/redux/actions/youtube.actions';
import { detailedVideoInfoStateData, selectErrorMessageInfo } from 'src/app/redux/selectors/youtube.selectors';

@Component({
  selector: 'app-detailed-info-page',
  templateUrl: './detailed-info-page.component.html',
  styleUrls: ['./detailed-info-page.component.scss'],
})
export class DetailedInfoPageComponent implements OnInit {
  videoId: string;
  videoInfo: VideoItem | null = null;
  imageUrl: string = '';
  errorSpan$: Observable<string>;
  detailedVideoInfoDataSubscription_Video$!: Subscription;
  detailedVideoInfoDataSubscription_imageUrl$!: Subscription;

  constructor(private location: Location, private route: ActivatedRoute, private store: Store) {
    this.videoId = this.route.snapshot.params['videoId'];
    this.errorSpan$ = this.store.select(selectErrorMessageInfo);
  }

  ngOnInit(): void {
    this.store.dispatch(loadSingleAPIVideo({ string: [this.videoId] }));
    this.detailedVideoInfoDataSubscription_Video$ = this.store.select(detailedVideoInfoStateData).subscribe((data) => {
      this.videoInfo = data;
    });
    this.detailedVideoInfoDataSubscription_imageUrl$ = this.store
      .select(detailedVideoInfoStateData)
      .subscribe((data) => {
        let maxresImgUrl: ThumbnailsDescription = data?.snippet?.thumbnails['maxres'];
        let standardImgUrl: ThumbnailsDescription = data?.snippet?.thumbnails['standard'];
        let highImgUrl: ThumbnailsDescription = data?.snippet?.thumbnails['high'];
        if (maxresImgUrl) {
          this.imageUrl = maxresImgUrl?.url;
        } else if (standardImgUrl) {
          this.imageUrl = standardImgUrl?.url;
        } else {
          this.imageUrl = highImgUrl?.url;
        }
      });
  }

  ngOnDestroy(): void {
    this.detailedVideoInfoDataSubscription_Video$.unsubscribe();
    this.detailedVideoInfoDataSubscription_imageUrl$.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
