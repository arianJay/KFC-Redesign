"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { MapPin, Phone, Mail, LogOut, Save, CreditCard, History } from "lucide-react"

export default function AccountPage() {
  const [profile, setProfile] = useState({
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    phone: "+63 9123456789",
  })

  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      label: "Home",
      address: "123 Main Street, Makati, Metro Manila",
      default: true,
    },
    {
      id: 2,
      label: "Office",
      address: "456 Business Avenue, BGC, Taguig",
      default: false,
    },
  ])

  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState(profile)

  const handleSaveProfile = () => {
    setProfile(editedProfile)
    setIsEditing(false)
  }

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

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12">My Account</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* User Profile */}
              <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Profile Information</h2>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-3 py-2"
                  >
                    {isEditing ? "Cancel" : "Edit"}
                  </button>
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block font-semibold text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={editedProfile.name}
                        onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-semibold text-foreground mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={editedProfile.phone}
                        onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <button
                      onClick={handleSaveProfile}
                      className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
                    >
                      <Save size={20} />
                      Save Changes
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-foreground">
                      <Mail size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-secondary">Email</p>
                        <p className="font-semibold">{profile.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-foreground">
                      <Phone size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-secondary">Phone</p>
                        <p className="font-semibold">{profile.phone}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Saved Addresses */}
              <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Saved Addresses</h2>
                  <Link
                    href="/account/payment-methods"
                    className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-3 py-2"
                  >
                    + Add Address
                  </Link>
                </div>

                <div className="space-y-3">
                  {savedAddresses.map((addr) => (
                    <div key={addr.id} className="border border-border rounded-lg p-4 hover:bg-muted transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin size={18} className="text-primary" />
                            <h3 className="font-bold text-foreground">{addr.label}</h3>
                            {addr.default && (
                              <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">Default</span>
                            )}
                          </div>
                          <p className="text-secondary text-sm">{addr.address}</p>
                        </div>
                        <button className="text-primary font-semibold text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1">
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Payment Methods</h2>
                  <Link
                    href="/account/payment-methods"
                    className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-3 py-2"
                  >
                    Manage
                  </Link>
                </div>

                <div className="bg-gradient-to-r from-primary to-[#a81037] rounded-lg p-6 text-white mb-4">
                  <p className="text-sm opacity-90 mb-2">Default Card</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-2xl font-bold mb-2">•••• •••• •••• 4242</p>
                      <p className="text-sm opacity-90">Juan Dela Cruz • Expires 12/26</p>
                    </div>
                    <CreditCard size={32} />
                  </div>
                </div>

                <Link
                  href="/account/payment-methods"
                  className="inline-block text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded px-3 py-2"
                >
                  View all payment methods →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border shadow-sm p-6 space-y-4">
                <h3 className="font-bold text-foreground">Account Settings</h3>

                <Link
                  href="/account/order-history"
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-2"
                >
                  <History size={18} />
                  Order History
                </Link>

                <Link
                  href="/account/payment-methods"
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary flex items-center gap-2"
                >
                  <CreditCard size={18} />
                  Payment Methods
                </Link>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  Loyalty Points
                </button>

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  Saved Coupons
                </button>

                <hr className="border-border" />

                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center gap-2">
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
