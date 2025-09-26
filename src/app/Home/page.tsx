"use client";

import Brands from "@/components/Home/Brands";
import HeroCarousel from "@/components/Home/HeroCarousel";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Hero from "@/components/Home/promote";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <Hero />
          <Brands />
        </div>
        <HeroCarousel />
      </main>
      <Footer />
    </div>
  );
}
