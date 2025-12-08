"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { CreditCard, Plus, Trash2, Check } from "lucide-react"

export default function PaymentMethodsPage() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "credit",
      cardNumber: "****4242",
      cardholderName: "Juan Dela Cruz",
      expiryDate: "12/26",
      default: true,
    },
    {
      id: 2,
      type: "debit",
      cardNumber: "****8888",
      cardholderName: "Juan Dela Cruz",
      expiryDate: "08/25",
      default: false,
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const handleAddPaymentMethod = () => {
    if (formData.cardholderName && formData.cardNumber && formData.expiryDate && formData.cvv) {
      setPaymentMethods([
        ...paymentMethods,
        {
          id: Date.now(),
          type: "credit",
          cardNumber: `****${formData.cardNumber.slice(-4)}`,
          cardholderName: formData.cardholderName,
          expiryDate: formData.expiryDate,
          default: false,
        },
      ])
      setFormData({ cardholderName: "", cardNumber: "", expiryDate: "", cvv: "" })
      setShowForm(false)
    }
  }

  const handleSetDefault = (id: number) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        default: method.id === id,
      })),
    )
  }

  const handleDeletePaymentMethod = (id: number) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id))
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-8">
            <Link href="/account" className="text-primary font-semibold hover:underline">
              ← Back to Account
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Payment Methods</h1>

          <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">My Cards</h2>
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-2"
              >
                <Plus size={20} />
                Add Card
              </button>
            </div>

            {/* Payment Methods List */}
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="border border-border rounded-lg p-4 hover:bg-muted transition-colors flex items-center justify-between"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <CreditCard size={24} className="text-primary mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-foreground capitalize">
                          {method.type === "credit" ? "Credit Card" : "Debit Card"}
                        </h3>
                        {method.default && (
                          <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                            <Check size={12} /> Default
                          </span>
                        )}
                      </div>
                      <p className="text-secondary text-sm font-mono">{method.cardNumber}</p>
                      <p className="text-secondary text-sm mt-1">
                        {method.cardholderName} • Expires {method.expiryDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!method.default && (
                      <button
                        onClick={() => handleSetDefault(method.id)}
                        className="text-primary font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-3 py-2"
                      >
                        Set Default
                      </button>
                    )}
                    <button
                      onClick={() => handleDeletePaymentMethod(method.id)}
                      className="text-red-600 hover:bg-red-50 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                      aria-label="Delete payment method"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Payment Method Form */}
          {showForm && (
            <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Add New Card</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardholder" className="block font-semibold text-foreground mb-2">
                    Cardholder Name
                  </label>
                  <input
                    id="cardholder"
                    type="text"
                    placeholder="Juan Dela Cruz"
                    value={formData.cardholderName}
                    onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="cardnumber" className="block font-semibold text-foreground mb-2">
                    Card Number
                  </label>
                  <input
                    id="cardnumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block font-semibold text-foreground mb-2">
                      Expiry Date
                    </label>
                    <input
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block font-semibold text-foreground mb-2">
                      CVV
                    </label>
                    <input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleAddPaymentMethod}
                    className="flex-1 bg-primary text-white font-bold py-3 rounded-lg hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Add Card
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-200 text-foreground font-bold py-3 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    Cancel
                  </button>
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
