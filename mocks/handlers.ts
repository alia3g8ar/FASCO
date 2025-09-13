import { http, HttpResponse } from "msw";
import { products } from "./data/products";

export const handlers = [
  http.get("/api/products", ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("search") || "";
    const items = q
      ? products.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()))
      : products;
    return HttpResponse.json({ items, total: items.length }, { status: 200 });
  }),

  http.get("/api/products/:slug", ({ params }) => {
    const { slug } = params;
    const product = products.find((p) => p.slug === slug);
    if (!product) {
      return HttpResponse.json({ message: "Not found" }, { status: 404 });
    }
    return HttpResponse.json(product, { status: 200 });
  }),
];
