"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-4 md:px-12" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          {/* Left Image */}
          <div className="hidden lg:block">
            <img
              src="/images/image 3.webp"
              alt="مرد با کت نارنجی"
              className="w-96 h-[576px] object-contain"
            />
          </div>

          {/* Center Content */}
          <div className="text-center  flex-1 max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              عضویت در خبرنامه ما
            </h2>
            <p className="text-gray-600 w-[100%] mb-6 text-sm md:text-base">
              برای دریافت آخرین اخبار، تخفیف‌ها و محصولات جدید در خبرنامه ما عضو
              شوید
            </p>

            {/* Email Input */}
            <div className="flex flex-col  gap-3 mb-4">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 px-4 py-3 text-black border border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-right shadow-2xl shadow-black/60"
              />
              <button className="px-6 m-auto py-3 w-[200px] bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium shadow-lg shadow-black/20">
                عضویت
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <img
              src="/images/image 2.png"
              alt="زن با کت خاکستری"
              className="w-96 h-[576px] object-contain"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="order-2 md:order-1">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                TINKO
              </Link>
            </div>

            {/* Links */}
            <nav className="order-1 md:order-2">
              <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <li>
                  <Link href="/support" className="hover:text-black transition">
                    پشتیبانی
                  </Link>
                </li>
                <li>
                  <Link
                    href="/invoicing"
                    className="hover:text-black transition"
                  >
                    صورتحساب
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contract"
                    className="hover:text-black transition"
                  >
                    قرارداد
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-black transition">
                    مشاغل
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-black transition">
                    وبلاگ
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-black transition">
                    سوالات متداول
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              توسعه داده شده توسط علی اصغر آریایی مهر
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
