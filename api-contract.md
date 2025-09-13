# API Contract (Minimal)

## GET /api/products

- Query params: limit, page, search
- Response: { items: Product[], total: number }

## GET /api/products/:slug

- Response: Product

# Product fields

- id: string
- slug: string
- title: string
- description: string
- shortDescription?: string
- price: number
- currency: string
- images: string[]
- stock: number
- categories: string[]
- attributes?: Record<string, string | number>
- createdAt?: string
- updatedAt?: string
