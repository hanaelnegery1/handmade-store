import { Directive, ElementRef } from '@angular/core';

/** بيخلي العنصر يظهر بنعومة لما يدخل الشاشة وقت السكرول */
@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective {
  constructor(el: ElementRef<HTMLElement>) {
    const node = el.nativeElement;
    node.classList.add('rv');
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { node.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(node);
  }
}
