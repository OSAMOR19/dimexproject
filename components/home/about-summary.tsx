import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"
import AnimatedGradientText from "@/components/animations/animated-gradient-text"
import AnimatedCounter from "@/components/animations/animated-counter"

const benefits = [
  "Data-driven decision making",
  "Improved operational efficiency",
  "Enhanced customer insights",
  "Competitive advantage",
  "Predictive analytics capabilities",
  "Scalable data solutions",
]

const AboutSummary = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll animation="fade-in-left">
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-navy/10 to-orange/10 blur-3xl opacity-30"></div>

              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="About Dimex"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-navy">
                      <AnimatedCounter end={10} suffix="+" className="text-orange" />
                    </h3>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-navy">
                      <AnimatedCounter end={250} suffix="+" className="text-orange" />
                    </h3>
                    <p className="text-sm text-gray-600">Clients Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-in-right" delay={200}>
            <div className="space-y-6">
              <div className="inline-block bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium">
                About Dimex
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                We Help Businesses <AnimatedGradientText text="Unlock the Power" /> of Their Data
              </h2>
              <p className="text-gray-600">
                Dimex is a leading data analytics consulting firm specializing in transforming complex data into
                actionable insights. With over a decade of experience, we've helped hundreds of businesses across
                various industries leverage their data to drive growth and innovation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href="/about">
                  <Button className="bg-orange hover:bg-orange/90 text-white">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

export default AboutSummary
