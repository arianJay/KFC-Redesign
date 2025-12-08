"use client"

import { useState } from "react"
import ProductCard from "./product-card"

const menuCategories = [
  {
    category: "Chicken",
    items: [
      {
        id: 101,
        name: "Original Recipe Bucket",
        price: 449,
        description: "8 pieces of our signature original recipe chicken",
        image: "/kfc-original-recipe-bucket.jpg",
      },
      {
        id: 102,
        name: "Extra Crispy Bucket",
        price: 499,
        description: "8 pieces of extra crispy fried chicken",
        image: "/kfc-extra-crispy-bucket.jpg",
      },
      {
        id: 103,
        name: "Spicy Chicken Bucket",
        price: 529,
        description: "8 pieces of spicy hot chicken",
        image: "/kfc-spicy-bucket.jpg",
      },
    ],
  },
  {
    category: "Sandwiches",
    items: [
      {
        id: 201,
        name: "Classic Chicken Sandwich",
        price: 159,
        description: "Crispy fried chicken on soft bun",
        image: "/kfc-chicken-sandwich.jpg",
      },
      {
        id: 202,
        name: "Zinger Sandwich",
        price: 199,
        description: "Spicy chicken with special sauce",
        image: "/kfc-zinger-sandwich.jpg",
      },
      {
        id: 203,
        name: "Chicken Tenders Wrap",
        price: 189,
        description: "Tender strips wrapped with fresh veggies",
        image: "/kfc-chicken-wrap.jpg",
      },
    ],
  },
  {
    category: "Sides",
    items: [
      {
        id: 301,
        name: "Mashed Potatoes",
        price: 79,
        description: "Creamy mashed potatoes with gravy",
        image: "/kfc-mashed-potatoes.jpg",
      },
      {
        id: 302,
        name: "Coleslaw",
        price: 69,
        description: "Fresh crisp coleslaw",
        image: "/kfc-coleslaw.jpg",
      },
      {
        id: 303,
        name: "Mac & Cheese",
        price: 99,
        description: "Creamy mac and cheese",
        image: "/kfc-mac-cheese.jpg",
      },
    ],
  },
]

export default function MenuGrid() {
  const [cart, setCart] = useState<Record<number, { quantity: number; customizations: string[] }[]>>({})
  const [selectedCategory, setSelectedCategory] = useState("Chicken")

  const addToCart = (id: number, quantity: number, customizations: string[]) => {
    setCart((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), { quantity, customizations }],
    }))
  }

  const totalQuantity = Object.values(cart).reduce(
    (sum, items) => sum + items.reduce((qty, item) => qty + item.quantity, 0),
    0,
  )

  const currentItems = menuCategories.find((c) => c.category === selectedCategory)?.items || []

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3">
        {menuCategories.map((cat) => (
          <button
            key={cat.category}
            onClick={() => setSelectedCategory(cat.category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === cat.category
                ? "bg-primary text-white"
                : "bg-muted text-foreground hover:bg-primary hover:text-white"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((product) => {
          const productQuantity = (cart[product.id] || []).reduce((sum, item) => sum + item.quantity, 0)
          return (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={(quantity, customizations) => addToCart(product.id, quantity, customizations)}
              quantity={productQuantity}
            />
          )
        })}
      </div>

      {/* Cart Summary */}
      {totalQuantity > 0 && (
        <div className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-lg shadow-lg">
          <p className="font-bold text-lg">{totalQuantity} items in cart</p>
          <button className="mt-2 w-full bg-background text-primary font-bold py-2 px-4 rounded hover:bg-muted transition-colors">
            Review Cart
          </button>
        </div>
      )}
    </div>
  )
}
