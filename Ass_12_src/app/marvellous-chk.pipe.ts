import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, Parameter:string,...args: unknown[]): string 
  {
    if(Parameter == "Prime")
    {
      let iCnt: number = 0;

      for (iCnt=2;iCnt<=(value)/2;iCnt++)
      {
          if(value % iCnt== 0)
          {
            break;
          }
          if(iCnt == (value/2) + 1)
          {
            return 'It is Prime';
          }
          else
          {
            return 'It is not Prime';
          }

      }
    }
    if(Parameter == "Perfect")
    {
      let Sum: number = 1;
      for (let i=2; i*i<=value; i++)
      {
          if (value%i==0)
          {
              if(i*i!=value)
              {
                Sum = Sum + i + value/i;
              }
              else
              {
                Sum = Sum+i;
              }
          }
      }
      if(Sum == value)
      {
        return 'It is Perfect';
      }
      else
      {
        return 'It is Not Perfect';
      }
    }
    if(Parameter == "Even")
    {
      if(value % 2 == 0)
      {
        return 'It is Even';
      }
      else
      {
        return 'It is Not Even';
      }
    }
    if(Parameter == "Odd")
    {
      if(value % 2 != 0)
      {
        return 'It is Odd';
      }
      else
      {
        return 'It is not Odd';
      }
    }
    return '';
  }
}
