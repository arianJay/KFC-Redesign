"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Minus, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { useCart } from "@/app/context/cart-context"

interface ProductDetailModalProps {
  isOpen: boolean
  product: {
    id: number
    name: string
    price: number
    description: string
    image: string
  } | null
  onClose: () => void
  onAddToCart?: (quantity: number, customizations: string[]) => void
}

export default function ProductDetailModal({ isOpen, product, onClose, onAddToCart }: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedCustomizations, setSelectedCustomizations] = useState<string[]>([])
  const { addItem } = useCart()

  const customizationOptions = [
    { id: "no-mayo", label: "No Mayo" },
    { id: "extra-sauce", label: "Extra Sauce" },
    { id: "light-spicy", label: "Light Spicy" },
    { id: "extra-crispy", label: "Extra Crispy" },
  ]

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 99) {
      setQuantity(value)
    }
  }

  const handleCustomizationToggle = (customizationId: string) => {
    setSelectedCustomizations((prev) =>
      prev.includes(customizationId) ? prev.filter((id) => id !== customizationId) : [...prev, customizationId],
    )
  }

  const handleAddToCart = () => {
    if (!product) return

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      customizations: selectedCustomizations,
      image: product.image,
    })

    // Also call the prop callback if provided for backwards compatibility
    onAddToCart?.(quantity, selectedCustomizations)

    setQuantity(1)
    setSelectedCustomizations([])
    onClose()
  }

  if (!product) return null

  const totalPrice = product.price * quantity

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="sticky top-0 bg-background border-b border-border p-4 flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-foreground">{product.name}</DialogTitle>
          <DialogClose className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1">
            <X size={24} className="text-foreground" />
          </DialogClose>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Product Image */}
          <div className="relative w-full aspect-video bg-muted rounded-xl overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          {/* Product Description */}
          <div className="space-y-3">
            <p className="text-secondary text-base leading-relaxed">{product.description}</p>
            <div className="text-3xl font-bold text-primary">₱{product.price.toFixed(2)}</div>
          </div>

          {/* Quantity Selector */}
          <div className="border-t border-b border-border py-4 space-y-3">
            <label htmlFor="quantity" className="block text-sm font-semibold text-foreground">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                aria-label="Decrease quantity"
                className="bg-muted hover:bg-primary hover:text-white text-foreground p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Minus size={20} />
              </button>
              <input
                id="quantity"
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(e) => handleQuantityChange(Number.parseInt(e.target.value) || 1)}
                className="w-16 text-center text-lg font-bold border-2 border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-2"
              />
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                aria-label="Increase quantity"
                className="bg-muted hover:bg-primary hover:text-white text-foreground p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Customization Options */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Customize your order</h3>
            <div className="space-y-2">
              {customizationOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedCustomizations.includes(option.id)}
                    onChange={() => handleCustomizationToggle(option.id)}
                    className="w-5 h-5 accent-primary cursor-pointer focus:outline-none"
                  />
                  <span className="text-foreground font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Summary and CTA */}
          <div className="border-t border-border pt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-secondary">
                Subtotal ({quantity} item{quantity !== 1 ? "s" : ""})
              </span>
              <span className="text-2xl font-bold text-primary">₱{totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary active:bg-[#8a0b2d]"
            >
              Add {quantity} to Cart
            </button>
            <button
              onClick={onClose}
              className="w-full bg-muted text-foreground font-semibold py-3 px-4 rounded-lg hover:bg-border transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
