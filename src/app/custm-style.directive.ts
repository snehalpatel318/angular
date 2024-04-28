import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustmStyle]'
})
export class CustmStyleDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color="red";
   }

}
