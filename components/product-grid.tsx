"use client"

import ProductCard from "./product-card"
import Link from "next/link"
import { useCart } from "@/app/context/cart-context"

const products = [
  {
    id: 1,
    name: "Crispy Bundle",
    price: 299,
    description: "2 piece fried chicken with regular drink",
    image: "/kfc-crispy-fried-chicken-bundle.jpg",
  },
  {
    id: 2,
    name: "Family Feast",
    price: 899,
    description: "8 piece chicken, 2 sides, 2 drinks",
    image: "/kfc-family-chicken-feast.jpg",
  },
  {
    id: 3,
    name: "Breakfast Special",
    price: 179,
    description: "Fried chicken with rice and gravy",
    image: "/kfc-breakfast-chicken-rice.jpg",
  },
  {
    id: 4,
    name: "Loaded Box",
    price: 549,
    description: "4 piece chicken with all the sides",
    image: "/kfc-loaded-chicken-box.jpg",
  },
  {
    id: 5,
    name: "Spicy Tenders",
    price: 349,
    description: "6 piece spicy fried chicken tenders",
    image: "/kfc-spicy-chicken-tenders.jpg",
  },
  {
    id: 6,
    name: "Bucket of Joy",
    price: 1299,
    description: "16 piece chicken, 4 sides, 4 drinks",
    image: "/kfc-bucket-chicken-deal.jpg",
  },
]

export default function ProductGrid() {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Explore Our Menu</h2>
        <p className="text-secondary mb-8 text-lg">Choose from our delicious selection of meals and bundles.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} quantity={0} onAddToCart={() => {}} />
          ))}
        </div>

        {totalItems > 0 && (
          <div className="mt-8 text-center p-6 bg-primary text-white rounded-lg">
            <p className="text-lg font-semibold">
              {totalItems} {totalItems === 1 ? "item" : "items"} in cart
            </p>
            <Link
              href="/cart"
              className="mt-4 inline-block bg-background text-primary px-8 py-2 rounded-full font-bold hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Review Cart
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
