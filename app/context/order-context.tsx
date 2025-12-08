"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

export interface OrderContext {
  deliveryMode: "delivery" | "pickup"
  setDeliveryMode: (mode: "delivery" | "pickup") => void
  address: string
  setAddress: (address: string) => void
  selectedStore: string | null
  setSelectedStore: (store: string | null) => void
}

const OrderContext = createContext<OrderContext | undefined>(undefined)

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [deliveryMode, setDeliveryMode] = useState<"delivery" | "pickup">("delivery")
  const [address, setAddress] = useState("")
  const [selectedStore, setSelectedStore] = useState<string | null>(null)

  return (
    <OrderContext.Provider
      value={{
        deliveryMode,
        setDeliveryMode,
        address,
        setAddress,
        selectedStore,
        setSelectedStore,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error("useOrder must be used within OrderProvider")
  }
  return context
}
