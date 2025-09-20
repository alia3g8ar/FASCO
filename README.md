# tinko - پلتفرم فروشگاهی مدرن

پروژه tinko یک وب‌سایت فروشگاهی مدرن است که با Next.js 15 و React 19 ساخته شده است.

## ویژگی‌های پروژه

- ✨ **طراحی مدرن و ریسپانسیو** - سازگار با تمام دستگاه‌ها
- 📱 **موبایل فرست** - تجربه کاربری عالی در موبایل

## تکنولوژی‌های استفاده شده

- **Framework:** Next.js 15
- **React:** 19.1.0
- **Styling:** Tailwind CSS 4
- **State Management:** React Query (TanStack Query)
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Language:** TypeScript
- **Mocking:** MSW (Mock Service Worker)


## ساختار پروژه

```
tinko/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── header.tsx      # هدر سایت
│   │   │   │   ├── footer.tsx      # فوتر سایت
│   │   │   │   └── MainLayout.tsx  # لایوت اصلی
│   │   │   ├── ClientOnly.tsx      # React Query Provider
│   │   │   └── useProducts.ts      # Hook محصولات
│   │   ├── globals.css             # استایل‌های سراسری
│   │   ├── layout.tsx              # Root Layout
│   │   └── page.tsx                # صفحه اصلی
│   └── types/
│       └── product.ts              # تایپ‌های محصولات
├── public/
│   ├── images/                     # تصاویر پروژه
│   └── fonts/                      # فونت‌های سفارشی
├── mocks/                          # Mock API
└── package.json
```
