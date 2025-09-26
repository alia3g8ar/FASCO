import { Product } from "@/lib/types/product";

export const products: Product[] = [
  {
    id: "prod_1",
    slug: "nike-air-max-90",
    title: "Nike Air Max 90",
    description: "Classic running shoe...",
    shortDescription: "Classic sneaker",
    price: 120,
    currency: "USD",
    images: ["/images/nike-air-max-90-1.jpg"],
    stock: 20,
    categories: ["shoes", "men"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_2",
    slug: "adidas-ultraboost",
    title: "Adidas Ultraboost",
    description: "Comfortable running shoe...",
    shortDescription: "Ultra comfy",
    price: 150,
    currency: "USD",
    images: ["/images/adidas-ultraboost-1.jpg"],
    stock: 15,
    categories: ["shoes", "women"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
