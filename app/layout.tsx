import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/app/context/cart-context"
import { OrderProvider } from "@/app/context/order-context"
import { ThemeProvider } from "@/components/theme-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KFC Philippines - Order Delicious Fried Chicken",
  description: "Order authentic KFC fried chicken online with fast delivery and pickup options across the Philippines.",
  openGraph: {
    title: "KFC Philippines - Order Delicious Fried Chicken",
    description: "Order authentic KFC fried chicken with fast delivery and pickup options across the Philippines.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CartProvider>
            <OrderProvider>
              {children}
              <Analytics />
            </OrderProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
