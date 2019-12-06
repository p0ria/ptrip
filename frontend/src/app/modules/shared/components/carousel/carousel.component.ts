import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit{

  @Input() images: string[];
  @Input() selectedIndex: number = 0;

  @ViewChild('imagesCtrl', {static: false}) imagesCtrl: ElementRef;

  constructor() {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.updateCarousel();
  }

  scrollRight() {
    if(!this.images || this.selectedIndex >= this.images.length - 1) return;
    this.selectedIndex++;
    this.updateCarousel();
  }

  scrollLeft() {
    if(!this.images || this.selectedIndex <= 0) return;
    this.selectedIndex--;
    this.updateCarousel();
  }

  updateCarousel() {
    let imagesElement = (<HTMLElement>this.imagesCtrl.nativeElement);
    let amount = imagesElement.clientWidth * this.selectedIndex;
    imagesElement.style.transform = `translateX(-${amount}px)`;
  }

  select(index: number) {
    if (index < 0 || !this.images || index >= this.images.length) return;
    this.selectedIndex = index;
    this.updateCarousel();
  }
}
