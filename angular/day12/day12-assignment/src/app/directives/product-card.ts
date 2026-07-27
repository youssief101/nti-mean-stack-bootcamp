import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCard {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 10px gray');
  }

  @HostListener('mouseenter') mouseenter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 25px black');
  };

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 10px gray');
  }
}