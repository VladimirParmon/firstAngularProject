import { Pipe, PipeTransform } from '@angular/core';
import { SortingStatus } from 'src/app/models/sortingLogic';
import { VideoItem } from 'src/app/models/youtubeResponse';
import { status } from './sort-by.pipe';

@Pipe({
  name: 'sortOrder',
})
export class SortOrderPipe implements PipeTransform {
  transform(
    value: VideoItem[] | null,
    sortingCriterion: SortingStatus,
    inDesc_Date: boolean,
    inDesc_Views: boolean
  ): VideoItem[] | null {
    if (value) {
      let result = value;
      let isDesc: boolean = sortingCriterion === status.DATE ? inDesc_Date : inDesc_Views;
      if (value && isDesc) {
        const arr = Array.from(result);
        arr.reverse();
        result = arr;
      }
      return result;
    } else {
      return [];
    }
  }
}
