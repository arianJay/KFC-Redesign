"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Clock, MapPin, DollarSign, Package } from "lucide-react"

export default function OrderHistoryPage() {
  const orders = [
    {
      id: 1,
      orderNumber: "ORD-20250208-001",
      date: "February 8, 2025",
      status: "Delivered",
      total: 1250,
      items: "3 items",
      deliveryAddress: "123 Main Street, Makati, Metro Manila",
    },
    {
      id: 2,
      orderNumber: "ORD-20250206-002",
      date: "February 6, 2025",
      status: "Delivered",
      total: 890,
      items: "2 items",
      deliveryAddress: "123 Main Street, Makati, Metro Manila",
    },
    {
      id: 3,
      orderNumber: "ORD-20250204-003",
      date: "February 4, 2025",
      status: "Delivered",
      total: 1550,
      items: "4 items",
      deliveryAddress: "456 Business Avenue, BGC, Taguig",
    },
    {
      id: 4,
      orderNumber: "ORD-20250201-004",
      date: "February 1, 2025",
      status: "Cancelled",
      total: 650,
      items: "2 items",
      deliveryAddress: "123 Main Street, Makati, Metro Manila",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "Processing":
        return "bg-blue-100 text-blue-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link href="/account" className="text-primary font-semibold hover:underline">
              ← Back to Account
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Order History</h1>

          {orders.length === 0 ? (
            <div className="bg-card rounded-xl border border-border shadow-sm p-8 md:p-12 text-center">
              <Package size={48} className="mx-auto text-secondary mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">No Orders Yet</h2>
              <p className="text-secondary mb-6">Start ordering from our menu to see your orders here.</p>
              <Link
                href="/menu"
                className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-[#a81037] transition-colors"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4 pb-4 border-b border-border">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{order.orderNumber}</h3>
                      <p className="text-secondary text-sm flex items-center gap-2 mt-1">
                        <Clock size={16} />
                        {order.date}
                      </p>
                    </div>
                    <span
                      className={`font-semibold px-4 py-2 rounded-full text-sm w-fit ${getStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <Package size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="text-secondary text-sm">Items</p>
                        <p className="font-semibold text-foreground">{order.items}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="text-secondary text-sm">Delivered To</p>
                        <p className="font-semibold text-foreground text-sm">{order.deliveryAddress}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <DollarSign size={20} className="text-primary mt-0.5" />
                      <div>
                        <p className="text-secondary text-sm">Total Amount</p>
                        <p className="font-bold text-foreground text-lg">₱{order.total.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 md:flex-none bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                      Reorder
                    </button>
                    <button className="flex-1 md:flex-none bg-gray-200 text-foreground font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
