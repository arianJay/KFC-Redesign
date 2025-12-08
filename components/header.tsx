"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { useCart } from "@/app/context/cart-context"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const navItems = [
    { label: "Menu", href: "/menu" },
    { label: "Coupons", href: "/coupons" },
    { label: "Find KFC", href: "/store-locator" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2"
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">KFC</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">KFC Philippines</span>
        </Link>

        {/* Desktop Navigation */}
        <ul role="menubar" className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-semibold text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-3 py-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section - Cart, Account and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <ThemeToggle />

          <Link
            href="/account"
            aria-label="Account settings"
            className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <User size={24} className="text-foreground" />
          </Link>

          <Link
            href="/cart"
            aria-label={`Shopping cart with ${totalItems} items`}
            className="relative p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <ShoppingCart size={24} className="text-foreground" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul
            role="menu"
            className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden flex flex-col"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 font-semibold text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
