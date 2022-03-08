import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortOrder',
})
export class SortOrderPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const [isDesc] = args;
    let result = value;
    if (value && isDesc) {
      const arr = Array.from(result);
      arr.reverse();
      result = arr;
    }
    return result;
  }
}
