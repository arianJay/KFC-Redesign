"use client"

import { useState } from "react"
import { MapPin, Truck } from "lucide-react"
import { useOrder } from "@/app/context/order-context"

export default function DeliveryModeSelector() {
  const { deliveryMode, setDeliveryMode, address, setAddress } = useOrder()
  const [showMapLink, setShowMapLink] = useState(false)

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Order Delivery</h2>

      {/* Delivery Mode Toggle */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setDeliveryMode("delivery")}
          className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            deliveryMode === "delivery" ? "bg-primary text-white shadow-md" : "bg-muted text-foreground hover:bg-border"
          }`}
          aria-pressed={deliveryMode === "delivery"}
        >
          <Truck className="inline mr-2" size={20} />
          Delivery
        </button>
        <button
          onClick={() => setDeliveryMode("pickup")}
          className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            deliveryMode === "pickup" ? "bg-primary text-white shadow-md" : "bg-muted text-foreground hover:bg-border"
          }`}
          aria-pressed={deliveryMode === "pickup"}
        >
          <MapPin className="inline mr-2" size={20} />
          Pickup
        </button>
      </div>

      {/* Delivery Address Input */}
      {deliveryMode === "delivery" && (
        <div className="space-y-4">
          <label htmlFor="address-input" className="block font-semibold text-foreground">
            Enter your address
          </label>
          <div className="flex gap-2">
            <button
              aria-label="Use current location"
              className="bg-primary text-white p-3 rounded-lg hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <MapPin size={20} />
            </button>
            <input
              id="address-input"
              type="text"
              placeholder="Enter your location"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Delivery address"
            />
          </div>
          <button
            onClick={() => setShowMapLink(!showMapLink)}
            className="text-primary font-semibold hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1"
          >
            📍 Find address on the map
          </button>
        </div>
      )}

      {/* Pickup Store Selection */}
      {deliveryMode === "pickup" && (
        <div className="space-y-4">
          <label htmlFor="store-select" className="block font-semibold text-foreground">
            Select a store for pickup
          </label>
          <select
            id="store-select"
            defaultValue=""
            className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Select pickup store"
          >
            <option value="">Choose a KFC store near you</option>
            <option value="makati">KFC Makati - SM Makati</option>
            <option value="bgc">KFC BGC - Bonifacio High Street</option>
            <option value="quezon">KFC Quezon City - Araneta Center</option>
            <option value="cebu">KFC Cebu - Ayala Center Cebu</option>
          </select>
          <p className="text-secondary text-sm">Typical pickup time: 20-30 minutes from order confirmation</p>
        </div>
      )}
    </div>
  )
}
