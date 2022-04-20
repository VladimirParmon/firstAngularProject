import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadSingleAPIVideo } from 'src/app/redux/actions/youtube.actions';
import { detailedVideoInfoStateData, selectErrorMessageInfo } from 'src/app/redux/selectors/youtube.selectors';
import { VideoItem } from 'src/app/models/youtubeResponse';
import { Observable } from 'rxjs';

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

  constructor(private location: Location, private route: ActivatedRoute, private store: Store) {
    this.videoId = this.route.snapshot.params['videoId'];
    this.errorSpan$ = this.store.select(selectErrorMessageInfo);
  }

  ngOnInit(): void {
    this.store.dispatch(loadSingleAPIVideo({ string: [this.videoId] }));
    this.store.select(detailedVideoInfoStateData).subscribe((data) => {
      this.videoInfo = data;
    });
    this.store.select(detailedVideoInfoStateData).subscribe((data) => {
      this.imageUrl = data?.snippet?.thumbnails['maxres']
        ? data?.snippet?.thumbnails['maxres'].url
        : data?.snippet?.thumbnails['standard'].url;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
