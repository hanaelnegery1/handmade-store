// =====================================================
// كل بيانات المتجر هنا — عدّلي في الملف ده بس.
// صور المنتجات: حطيها في public/products/ واكتبي img: 'products/اسم-الصورة.jpg'
// لو مفيش img بتظهر أيقونة التوليب بدالها.
// =====================================================

export interface Product {
  name: string;
  price: number;
  category: string;   // لازم يكون واحد من CATEGORIES
  desc?: string;
  img?: string;
}

export const STORE = {
  name: 'My Own Touch',
  tagline: 'هاند ميد بلمسة تخصك انتي',
  whatsapp: '201000000000', // رقمك بالكود الدولي من غير +
};

export const CATEGORIES: string[] = ['شموع', 'كروشيه', 'إكسسوارات', 'هدايا'];

export const PRODUCTS: Product[] = [
  { name: 'شمعة لافندر',    price: 80,  category: 'شموع',      desc: 'شمع صويا طبيعي' },
  { name: 'شمعة فانيليا',   price: 75,  category: 'شموع',      desc: 'بتولع 25 ساعة' },
  { name: 'دبدوب كروشيه',   price: 220, category: 'كروشيه',    desc: 'خيط قطن ناعم' },
  { name: 'شنطة كروشيه',    price: 350, category: 'كروشيه',    desc: 'بطانة وسوستة' },
  { name: 'سلسلة خرز',      price: 120, category: 'إكسسوارات', desc: 'تتظبط على الطلب' },
  { name: 'أستيك مطرّز',    price: 40,  category: 'إكسسوارات', desc: 'قماش مطرّز بإيد' },
  { name: 'بوكس هدية صغير', price: 300, category: 'هدايا',     desc: 'شمعة + كارت + تغليف' },
  { name: 'كارت إهداء',     price: 25,  category: 'هدايا',     desc: 'مكتوب بخط إيد' },
];
