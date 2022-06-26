import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value1: number, value2: number, ...args: unknown[]): number 
  {
    let Mult: number = 0;
    Mult = value1 * value2;
    return Mult;
  }

}
