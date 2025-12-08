import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">KFC Philippines</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/store-locator"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                >
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                >
                  Delivery Info
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded px-1"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Follow on Facebook"
                className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                aria-label="Follow on Twitter"
                className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                aria-label="Follow on Instagram"
                className="hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-muted pt-8 text-center">
          <p className="text-black dark:text-white font-medium">&copy; 2025 KFC Philippines. All rights reserved.</p>
          <p className="text-sm mt-2 text-black/80 dark:text-white/80">Designed with accessibility and usability in mind.</p>
        </div>
      </div>
    </footer>
  )
}
