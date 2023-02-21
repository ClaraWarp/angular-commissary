import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './recipe';

@Pipe({
  name: 'sortByFrequency'
})
export class SortByFrequencyPipe implements PipeTransform {

  transform(value: Array<Recipe>): Recipe[] {
    const arr = Object.assign([], value)
    return arr.sort((a: Recipe, b: Recipe) => {
      const bLog = Array.isArray(b.log) ? b.log : [];
      return a.log.filter((logEntry: any) => {
        if (new Date(logEntry.date).valueOf() > (new Date().valueOf() - (8 * 365 * 24 * 60 * 60 * 1000))) {
          return logEntry
        }
      }).length > bLog.filter((logEntry: any) => {
        if (new Date(logEntry.date).valueOf() > (new Date().valueOf() - (8 * 365 * 24 * 60 * 60 * 1000))) {
          return logEntry
        }
      }).length ? -1 : 1
    });
  }

}
