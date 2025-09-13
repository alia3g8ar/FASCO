export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  price: number;
  currency: string;
  images: string[];
  stock: number;
  categories: string[];
  attributes?: Record<string, string | number>;
  createdAt?: string;
  updatedAt?: string;
}
