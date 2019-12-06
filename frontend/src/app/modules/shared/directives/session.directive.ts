import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Session} from "../../../models/enums/session.enum";

@Directive({
  selector: '[sessionType]'
})
export class SessionDirective implements OnInit{

  @Input() sessionType = Session.Spring;
  gap = 200;
  offset = 50;
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    let item = (<HTMLElement>this.el.nativeElement);
    switch (this.sessionType) {
      case Session.Spring:
        item.style.right = this.offset + "px";
        item.style.backgroundColor = "green";
        item.style.color = "#fcfcfc";
        return;

      case Session.Summer:
        item.style.right = (this.gap + this.offset) + "px";
        item.style.backgroundColor = "yellow";
        item.style.color = "gray";
        return;

      case Session.Autumn:
        item.style.right = (2 * this.gap + this.offset) + "px";
        item.style.zIndex = "2";
        item.style.backgroundColor = "darkorange";
        item.style.color = "darkgreen";
        return;

      case Session.Winter:
        item.style.right = (3 * this.gap + this.offset) + "px";
        item.style.backgroundColor = "lightblue";
        item.style.color = "gray";
        return;
    }
  }

  @HostListener('click') onClick() {
    let item = (<HTMLElement>this.el.nativeElement);
    let items = item.parentElement.querySelectorAll(".menu-item");
    items.forEach((e: HTMLElement) => e.style.zIndex = "0");
    item.style.zIndex = "2";
  }

  @HostListener('mouseenter') onMouseEnter() {
    let item = (<HTMLElement>this.el.nativeElement);
    if(item.style.zIndex !== "2")
      item.style.transform = "translateY(-15px)";
  }

  @HostListener('mouseleave') onMouseLeave() {
    let item = (<HTMLElement>this.el.nativeElement);
    item.style.transform = "translateY(0)";
  }
}
