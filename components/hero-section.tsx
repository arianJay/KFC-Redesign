export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-[#a81037] text-white py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Order Delicious KFC Today</h1>
        <p className="text-lg md:text-xl opacity-95 mb-8 leading-relaxed">
          Quick. Fresh. Delivered to your door or ready for pickup.
        </p>
        <a
          href="/menu"
          className="inline-block bg-background text-primary font-bold px-8 py-3 rounded-full hover:bg-muted focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-4 focus:ring-offset-primary transition-all text-lg"
        >
          Start Your Order
        </a>
      </div>
    </section>
  )
}
