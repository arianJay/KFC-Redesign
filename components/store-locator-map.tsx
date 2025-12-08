"use client"

import { useState } from "react"
import { MapPin, Phone, Clock } from "lucide-react"

const stores = [
  {
    id: 1,
    name: "KFC Makati",
    address: "123 Makati Ave, Makati City",
    phone: "+63 2 1234 5678",
    hours: "10:00 AM - 10:00 PM",
    distance: "2.3 km",
  },
  {
    id: 2,
    name: "KFC BGC",
    address: "456 Fort Bonifacio, Taguig",
    phone: "+63 2 2345 6789",
    hours: "10:00 AM - 11:00 PM",
    distance: "5.1 km",
  },
  {
    id: 3,
    name: "KFC Quezon City",
    address: "789 EDSA, Quezon City",
    phone: "+63 2 3456 7890",
    hours: "9:00 AM - 10:00 PM",
    distance: "3.8 km",
  },
  {
    id: 4,
    name: "KFC Pasay",
    address: "321 Roxas Blvd, Pasay City",
    phone: "+63 2 4567 8901",
    hours: "10:00 AM - 11:00 PM",
    distance: "4.2 km",
  },
  {
    id: 5,
    name: "KFC Southmall",
    address: "654 Southmall, Las Piñas",
    phone: "+63 2 5678 9012",
    hours: "10:00 AM - 9:00 PM",
    distance: "7.5 km",
  },
  {
    id: 6,
    name: "KFC Trinoma",
    address: "987 Trinoma, Quezon City",
    phone: "+63 2 6789 0123",
    hours: "10:00 AM - 10:00 PM",
    distance: "6.2 km",
  },
]

export default function StoreLocatorMap() {
  const [searchInput, setSearchInput] = useState("")
  const [selectedStore, setSelectedStore] = useState<number | null>(null)

  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      store.address.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Search and List */}
      <div className="lg:col-span-1 space-y-4">
        <input
          type="text"
          placeholder="Search by store name or address..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Search stores"
        />

        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredStores.map((store) => (
            <button
              key={store.id}
              onClick={() => setSelectedStore(store.id)}
              className={`w-full text-left p-4 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                selectedStore === store.id
                  ? "bg-primary text-white border-primary"
                  : "bg-card border-border hover:bg-muted"
              }`}
            >
              <h3 className={`font-bold ${selectedStore === store.id ? "text-white" : "text-foreground"}`}>
                {store.name}
              </h3>
              <p className={`text-sm mt-1 ${selectedStore === store.id ? "text-gray-200" : "text-muted-foreground"}`}>
                {store.distance} away
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="lg:col-span-2">
        {selectedStore ? (
          <article className="bg-card rounded-lg border border-border p-6 shadow-lg">
            {(() => {
              const store = stores.find((s) => s.id === selectedStore)
              return (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">{store?.name}</h2>
                    <div className="bg-muted h-40 rounded-lg flex items-center justify-center text-muted-foreground">
                      Map will be displayed here
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <MapPin className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-foreground">Address</p>
                        <p className="text-muted-foreground">{store?.address}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a href={`tel:${store?.phone}`} className="text-primary hover:underline">
                          {store?.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Clock className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <p className="font-semibold text-foreground">Hours</p>
                        <p className="text-muted-foreground">{store?.hours}</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                    Get Directions
                  </button>
                </div>
              )
            })()}
          </article>
        ) : (
          <div className="bg-muted rounded-lg p-12 text-center">
            <MapPin size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Select a store to view details</p>
          </div>
        )}
      </div>
    </div>
  )
}
