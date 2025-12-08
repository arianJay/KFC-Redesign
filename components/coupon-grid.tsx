"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

const coupons = [
  {
    id: 1,
    title: "Tuesday Special",
    description: "30% off Original Recipe Chicken",
    code: "TUESDAY30",
    discount: "30%",
    expiry: "Every Tuesday",
  },
  {
    id: 2,
    title: "Boneless Lover",
    description: "Buy 1 Get 1 50% off boneless chicken",
    code: "BONELESS50",
    discount: "50%",
    expiry: "Until Dec 31",
  },
  {
    id: 3,
    title: "Family Bundle",
    description: "Whole chicken bucket + 2 sides + 4 drinks",
    code: "FAMILY99",
    discount: "₱99",
    expiry: "Limited Time",
  },
  {
    id: 4,
    title: "Student Deal",
    description: "20% off with valid student ID",
    code: "STUDENT20",
    discount: "20%",
    expiry: "All Year",
  },
  {
    id: 5,
    title: "Senior Citizen",
    description: "15% discount for PWD/Senior Citizens",
    code: "SENIOR15",
    discount: "15%",
    expiry: "All Year",
  },
  {
    id: 6,
    title: "Loyalty Reward",
    description: "Earn points on every order",
    code: "LOYALTY",
    discount: "Points",
    expiry: "Always",
  },
]

export default function CouponGrid() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {coupons.map((coupon) => (
        <article
          key={coupon.id}
          className="bg-card rounded-lg border-2 border-primary p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-foreground">{coupon.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{coupon.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{coupon.discount}</div>
              <div className="text-xs text-muted-foreground">{coupon.expiry}</div>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-3 mb-4">
            <p className="text-xs text-muted-foreground mb-2">Coupon Code</p>
            <p className="font-mono font-bold text-foreground">{coupon.code}</p>
          </div>

          <button
            onClick={() => copyCoupon(coupon.code)}
            className={`w-full px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              copiedCode === coupon.code ? "bg-accent text-white" : "bg-primary text-white hover:bg-[#a81037]"
            }`}
          >
            {copiedCode === coupon.code ? (
              <>
                <Check size={18} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy Code
              </>
            )}
          </button>
        </article>
      ))}
    </div>
  )
}
