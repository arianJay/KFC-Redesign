"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { useState } from "react"
import ProductDetailModal from "./product-detail-modal"

interface ProductCardProps {
  id: number
  name: string
  price: number
  description: string
  image: string
  quantity?: number
  onAddToCart: (quantity: number, customizations: string[]) => void
}

export default function ProductCard({
  id,
  name,
  price,
  description,
  image,
  quantity = 0,
  onAddToCart,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const product = { id, name, price, description, image }

  return (
    <>
      <article className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
        <div className="aspect-square relative overflow-hidden bg-subtle">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${name} - ${description}`}
            fill
            className="object-cover hover:scale-105 transition-transform"
          />
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h3 className="text-lg font-bold text-foreground">{name}</h3>
            <p className="text-sm text-secondary">{description}</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">₱ {price}</span>
            {quantity > 0 && (
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                {quantity} added
              </span>
            )}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            aria-label={`Customize and add ${name} to cart`}
            className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary active:bg-[#8a0b2d]"
          >
            <Plus size={20} />
            Add to Cart
          </button>
        </div>
      </article>

      <ProductDetailModal
        isOpen={isModalOpen}
        product={product}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={onAddToCart}
      />
    </>
  )
}
