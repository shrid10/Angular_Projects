import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown 
  {

    
    return ;
  }

}
