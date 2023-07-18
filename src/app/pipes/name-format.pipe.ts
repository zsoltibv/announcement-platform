import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(value: any): string {
    if (typeof value === 'string') {
      return "By Author: " + value;
    }
    return '';
  }
}
