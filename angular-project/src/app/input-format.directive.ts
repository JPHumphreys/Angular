import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]' //*if something has this directive it will apply it to it
})
export class InputFormatDirective {

  @Input('appInputFormat') format;//*set the alias as the custom directive name

  constructor(private el: ElementRef) { }


  @HostListener('blur') onBlur(){

    let value: string = this.el.nativeElement.value;//*gives acces to DOM object
    if(this.format == 'lowecase') this.el.nativeElement.value = value.toLowerCase();
    else this.el.nativeElement.value = value.toUpperCase();
  }

}
