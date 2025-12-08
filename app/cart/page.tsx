"use client"

import { useCart } from "@/app/context/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DeliveryModeSelector from "@/components/delivery-mode-selector"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart()
  const totalPrice = getTotalPrice()

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-primary font-semibold hover:underline">
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Your Cart</h1>

          {items.length === 0 ? (
            <div className="bg-card rounded-xl border border-border shadow-sm p-12 text-center">
              <ShoppingBag size={48} className="mx-auto text-muted mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-secondary mb-6">Start adding delicious KFC items to your order</p>
              <Link
                href="/menu"
                className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-card rounded-xl border border-border shadow-sm p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                          <p className="text-secondary text-sm mb-2">₱{item.price}</p>

                          {item.customizations.length > 0 && (
                            <div className="text-xs text-secondary mb-3">
                              <span className="font-semibold">Customizations:</span> {item.customizations.join(", ")}
                            </div>
                          )}

                          {/* Quantity and Remove */}
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                aria-label="Decrease quantity"
                                className="p-1 hover:bg-border rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-8 text-center font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                aria-label="Increase quantity"
                                className="p-1 hover:bg-border rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                              >
                                <Plus size={16} />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              aria-label={`Remove ${item.name} from cart`}
                              className="ml-auto p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">₱{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <DeliveryModeSelector />
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl border border-border shadow-sm p-6 sticky top-20 space-y-4">
                  <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between text-secondary">
                      <span>Subtotal</span>
                      <span>₱{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-secondary">
                      <span>Delivery Fee</span>
                      <span>₱50.00</span>
                    </div>
                    <div className="flex justify-between text-secondary">
                      <span>Tax</span>
                      <span>₱{(totalPrice * 0.12).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="border-t border-b border-border py-3 flex justify-between">
                    <span className="font-bold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      ₱{(totalPrice + 50 + totalPrice * 0.12).toFixed(2)}
                    </span>
                  </div>

                  <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    Proceed to Checkout
                  </button>

                  <button
                    onClick={() => clearCart()}
                    className="w-full bg-muted text-foreground font-semibold py-2 rounded-lg hover:bg-border transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Clear Cart
                  </button>

                  <Link href="/menu" className="block text-center text-primary font-semibold py-2 hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
