import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { SortingStatus } from 'src/app/models/sortingLogic';
import { APIVideoInfo, VideoItem } from 'src/app/models/youtubeResponse';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: VideoItem[] | null, sortingCriterion: SortingStatus, sortingString: string): any {
    let result = value;

    if (result) {
      const arr = Array.from(result);

      if (sortingString !== '') {
        result = arr.filter((el: VideoItem) => {
          return (
            el.snippet.title.toLowerCase().indexOf(sortingString.toLowerCase()) > -1 ||
            el.snippet.description.toLowerCase().indexOf(sortingString.toLowerCase()) > -1
          );
        });
      }

      let sortable = sortingString === '' ? arr : result;

      if (sortingCriterion !== 'default') {
        if (sortingCriterion === 'date') {
          sortable.sort((a: VideoItem, b: VideoItem) => {
            const dateA = new Date(a.snippet.publishedAt).getTime();
            const dateB = new Date(b.snippet.publishedAt).getTime();
            return dateA - dateB;
          });
        } else if (sortingCriterion === 'views') {
          sortable.sort((a: VideoItem, b: VideoItem) => {
            const countA = +a.statistics.viewCount;
            const countB = +b.statistics.viewCount;
            return countB - countA;
          });
        }
        result = sortable;
      }
    } else {
      return [];
    }
    return result;
  }
}
