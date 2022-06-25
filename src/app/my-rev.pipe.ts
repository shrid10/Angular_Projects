import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string 
  {
    var str:string = "";
    str = value.split("").reverse().join("");
    
    return str;
  }

}
