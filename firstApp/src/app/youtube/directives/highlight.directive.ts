import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() publishedAt: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, this.checkDate());
  }

  checkDate() {
    let result = 'red';
    const date = new Date();
    const publishDate = new Date(this.publishedAt);
    const oneDayMS = 1000 * 60 * 60 * 24;
    const dateMS = date.getTime();
    const publishDateMS = publishDate.getTime();
    const diff = dateMS - publishDateMS;

    const daysPassed = diff / oneDayMS;
    const monthsPassed = (date.getFullYear() - publishDate.getFullYear()) * 12;

    if (daysPassed < 7) {
      result = 'blue';
    } else if (monthsPassed < 1) {
      result = 'green';
    }

    return result;
  }
}
