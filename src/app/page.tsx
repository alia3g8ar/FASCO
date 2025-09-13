"use client";

import { useProducts } from "./components/useProducts";

export default function HomePage() {
  const { data, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  return <div></div>;
}
