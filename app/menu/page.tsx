import Header from "@/components/header"
import MenuGrid from "@/components/menu-grid"
import Footer from "@/components/footer"

export const metadata = {
  title: "KFC Philippines Menu - Browse All Dishes",
  description: "Explore KFC's full menu including chicken buckets, sandwiches, sides, and beverages.",
}

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section id="main-content" className="py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Menu</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Browse our delicious selection of chicken, sides, and beverages
          </p>

          <MenuGrid />
        </div>
      </section>

      <Footer />
    </main>
  )
}
