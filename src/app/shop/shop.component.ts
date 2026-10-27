import { Component, computed, signal } from '@angular/core';
import { CATEGORIES, PRODUCTS, STORE } from '../data/store.data';

const GRADIENTS = [
  'linear-gradient(160deg,#ecd0c4,#d9a99d)',
  'linear-gradient(160deg,#e8c3b4,#c98b7e)',
  'linear-gradient(160deg,#f3dcc6,#e2b89c)',
  'linear-gradient(160deg,#d8b7b0,#b08683)',
];

@Component({
  selector: 'app-shop',
  standalone: true,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  readonly tabs = ['الكل', ...CATEGORIES];
  readonly cat = signal('الكل');

  // key بيتغير مع القسم عشان حركة الظهور تتكرر كل مرة تغيّري الفلتر
  readonly items = computed(() =>
    PRODUCTS.filter(
      (p) => this.cat() === 'الكل' || p.category === this.cat(),
    ).map((p, i) => ({
      ...p,
      key: this.cat() + p.name,
      delay: i * 70,
      grad: GRADIENTS[i % GRADIENTS.length],
      wa: `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent('أهلاً، عايزة أطلب: ' + p.name)}`,
    })),
  );
}
