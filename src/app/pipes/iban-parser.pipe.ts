import { Pipe, PipeTransform } from '@angular/core';
import * as IBAN from 'iban';

@Pipe({ name: 'ibanParser' })
export class IbanParser implements PipeTransform {
  transform(value: string, separator: string): string {
    return IBAN.printFormat(value, separator);
  }
}
