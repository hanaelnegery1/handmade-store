import { Component } from '@angular/core';
import { ShopComponent } from './shop/shop.component';
import { CATEGORIES, STORE } from './data/store.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly store = STORE;
  readonly whatsappUrl = `https://wa.me/${STORE.whatsapp}`;
  // الشريط المتحرك: أسماء الأقسام متكررة عشان يلف من غير فراغ
  readonly marquee = Array(6)
    .fill([...CATEGORIES, 'هاند ميد'])
    .flat() as string[];
}
