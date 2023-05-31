import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {
  transform(data: Array<any>, property: string, value: string): any {
    // prevents the application from breaking if the array of objects doesn't exist yet
    if (!value || data.length === 0) {
      return [];
    }
    return data.filter((item) =>
      item[property].toLowerCase().includes(value.toLocaleLowerCase())
    );
  }
}
