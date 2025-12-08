import { CheckCircle2, Clock, Truck, MapPin } from "lucide-react"

export default function HowToOrder() {
  const steps = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Browse & Select",
      description: "Choose from our delicious menu items and customize your order to your preference.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Add to Cart",
      description: "Select quantities and special instructions, then add items to your cart.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Choose Delivery",
      description: "Select delivery or pickup option and provide your location details.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Track & Enjoy",
      description: "Sit back and relax while we prepare and deliver your delicious KFC meal.",
    },
  ]

  return (
    <section className="py-16 md:py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">How to Order</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Ordering from KFC is easy. Follow these simple steps to get your favorite meal delivered to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-50 dark:bg-red-950/20 rounded-full flex items-center justify-center mb-4">
                  <div className="text-red-600 dark:text-red-400">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-red-200 dark:bg-red-800" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">Ready to Order?</h3>
          <p className="text-secondary mb-6 max-w-2xl mx-auto">
            Start exploring our menu and add your favorite items to your cart. Fast delivery or convenient pickup
            awaits!
          </p>
          <a
            href="/menu"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-[#a81037] transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Browse Menu
          </a>
        </div>
      </div>
    </section>
  )
}
