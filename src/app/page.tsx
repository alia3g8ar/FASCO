"use client";

import MainLayout from "./components/layout/MainLayout";
import { useProducts } from "./components/useProducts";

export default function HomePage() {
  const { data, isLoading } = useProducts();

  // if (isLoading) return <div className="text-center p-8">در حال بارگذاری...</div>;

  return (
    <>
      <MainLayout>
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold mb-4">خوش آمدید به فاسکو</h1>
          <p className="text-gray-600">بهترین محصولات را از ما بخرید</p>
        </div>
      </MainLayout>
    </>
  );
}
