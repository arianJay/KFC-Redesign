"use client"

import { useState } from "react"
import { Truck, Store, MapPin } from "lucide-react"

export default function OrderPanel() {
  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery")
  const [location, setLocation] = useState("")

  return (
    <section className="bg-subtle py-8 px-4 md:py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-2xl shadow-md p-6 md:p-8">
          <fieldset className="mb-8">
            <legend className="text-xl font-bold mb-4 text-foreground">How would you like to order?</legend>
            <div role="group" className="flex gap-4">
              <button
                onClick={() => setOrderType("delivery")}
                aria-pressed={orderType === "delivery"}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  orderType === "delivery"
                    ? "bg-primary text-white"
                    : "bg-subtle text-foreground border-2 border-border hover:border-primary"
                }`}
              >
                <Truck size={20} />
                Delivery
              </button>
              <button
                onClick={() => setOrderType("pickup")}
                aria-pressed={orderType === "pickup"}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  orderType === "pickup"
                    ? "bg-primary text-white"
                    : "bg-subtle text-foreground border-2 border-border hover:border-primary"
                }`}
              >
                <Store size={20} />
                Pickup
              </button>
            </div>
          </fieldset>

          <div className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-semibold mb-2 text-foreground">
                Your Address
              </label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={20} />
                  <input
                    id="location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your address"
                    aria-describedby="location-help"
                    className="w-full pl-10 pr-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-1 transition-all"
                  />
                </div>
                <button className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-[#a81037] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary transition-all">
                  Find Stores
                </button>
              </div>
              <p id="location-help" className="text-sm text-secondary mt-2">
                We'll help you find the nearest KFC store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
