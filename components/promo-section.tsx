"use client"

import { Zap } from "lucide-react"

const promos = [
  {
    id: 1,
    title: "Tuesday Boneless Special",
    description: "Up to 30% off boneless chicken",
    badge: "HOT DEAL",
  },
  {
    id: 2,
    title: "Student Discount",
    description: "20% off with valid ID",
    badge: "ALL DAY",
  },
  {
    id: 3,
    title: "Family Bundle Promo",
    description: "Buy 2 buckets, get 1 side free",
    badge: "LIMITED",
  },
]

export default function PromoSection() {
  return (
    <section className="py-12 px-4 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-2">
          <Zap className="text-accent" size={32} />
          Special Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <article
              key={promo.id}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3">
                {promo.badge}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{promo.title}</h3>
              <p className="text-muted-foreground">{promo.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
