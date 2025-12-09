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
      <Header />
      <div id="main-content">
        <HeroSection />
        <PromoSection />
        <ProductGrid />
        <HowToOrder />
      </div>
      <Footer />
    </main>
  )
}
