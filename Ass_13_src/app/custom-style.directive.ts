import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective 
{

  constructor(private Ele: ElementRef) 
  {
    this.changecolour(Ele);
  }

  changecolour(Ele: ElementRef)
  {
    Ele.nativeElement.style.background= 'yellow';
    //Ele.nativeElement.style= 'bold';
  }



}
