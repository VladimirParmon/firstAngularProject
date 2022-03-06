import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const [sortingCriterion, sortingString] = args;
    let result = value;

    if (value) {
      const arr = Array.from(result);

      if (sortingString !== '') {
        result = arr.filter((el: any) => {
          return (
            el.snippet.title.toLowerCase().indexOf(sortingString.toLowerCase()) > -1 ||
            el.snippet.description.toLowerCase().indexOf(sortingString.toLowerCase()) > -1
          );
        });
      }

      let sortable = sortingString === '' ? arr : result;

      if (sortingCriterion !== 'default') {
        if (sortingCriterion === 'date') {
          sortable.sort((a: any, b: any) => {
            const dateA = new Date(a.snippet.publishedAt).getTime();
            const dateB = new Date(b.snippet.publishedAt).getTime();
            return dateA - dateB;
          });
        } else if (sortingCriterion === 'views') {
          sortable.sort((a: any, b: any) => {
            const countA = a.statistics.viewCount;
            const countB = b.statistics.viewCount;
            return countB - countA;
          });
        }
        result = sortable;
      }
    } else {
      return result;
    }
    return result;
  }
}
