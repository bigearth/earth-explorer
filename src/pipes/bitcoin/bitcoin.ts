import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bitcoin',
})
export class BitcoinPipe implements PipeTransform {
  transform(value: number, ...args) {
    return value / 100000000;
  }
}
