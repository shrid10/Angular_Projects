import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective 
{

  constructor(private Ele:ElementRef) 
  { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.Ele.nativeElement.style.color= 'green';
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.Ele.nativeElement.style.color= 'black';
  }

}
