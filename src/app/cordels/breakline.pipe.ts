import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'breakline'})
export class BreakLine implements PipeTransform {
  transform(value: string): string {
    return value.replace( /\n/gi,"<br/>");
  }
}