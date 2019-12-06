import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[bgi]'
})
export class BgiDirective implements OnInit{

  @Input() bgi: string = "";

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    (<HTMLElement>this.el.nativeElement).style.backgroundImage =
      `url("${this.bgi}")`;
  }


}
