import { Pipe, PipeTransform } from '@angular/core';
import * as numeral from 'numeral';

@Pipe({ name: 'numeral' })
export class Numeral implements PipeTransform {
  transform(value: number, format: string): string {
    return numeral(value).format(format)
  }
}
