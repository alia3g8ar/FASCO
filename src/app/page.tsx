"use client";

import Brands from "../../components/Brands";
import Hero from "../../components/Hero";
import MainLayout from "../../components/layout/MainLayout";

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Brands />
      </MainLayout>
    </>
  );
}
