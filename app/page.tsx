import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PromoSection from "@/components/promo-section"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"
import HowToOrder from "@/components/how-to-order"

export const metadata = {
  title: "KFC Philippines - Order Delicious Fried Chicken | Fast Delivery & Pickup",
  description:
    "Order authentic KFC fried chicken online with fast delivery and pickup options. Browse our menu, check deals, and find your nearest KFC store in the Philippines.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <Header />
      <HeroSection />
      <PromoSection />
      <ProductGrid />
      <HowToOrder />
      <Footer />
    </main>
  )
}
