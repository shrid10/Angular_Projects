import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective 
{

  constructor(private Ele:ElementRef) 
  { }

  @HostListener('mouseenter') onmouseenter()
  {
    this.Ele.nativeElement.style.color= 'Red';
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.Ele.nativeElement.style.color= 'black';
  }

}
