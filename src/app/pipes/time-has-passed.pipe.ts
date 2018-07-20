import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'timeHasPassed' })
export class TimeHasPassed implements PipeTransform {
  transform(value: number): string {
    return moment(value).fromNow();
  }
}
