import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, Parameter:string,...args: unknown[]): number 
  {
    let Sum:number = 0;
    Sum = value + Number(Parameter);
    
    return Sum;
  }

}
