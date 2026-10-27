import { AfterViewInit, Directive, ElementRef } from '@angular/core';

/** بيخلي العنصر يظهر بنعومة لما يدخل الشاشة وقت السكرول */
@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('rv');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      node.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('in');
        io.disconnect();
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    io.observe(node);
  }
}
