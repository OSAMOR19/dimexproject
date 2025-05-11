import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"
import AnimatedGradientText from "@/components/animations/animated-gradient-text"
import DataParticles from "@/components/animations/data-particles"

const CTASection = () => {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <DataParticles count={20} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Ready to Get Started?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Business with <AnimatedGradientText text="Data-Driven Insights" />
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have revolutionized their operations and decision-making processes with
              our data analytics solutions.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 p-6 rounded-xl text-center">
                  <h3 className="text-orange text-4xl font-bold mb-2">100%</h3>
                  <p className="text-white text-sm">Data Security</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl text-center">
                  <h3 className="text-orange text-4xl font-bold mb-2">24/7</h3>
                  <p className="text-white text-sm">Expert Support</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl text-center">
                  <h3 className="text-orange text-4xl font-bold mb-2">30+</h3>
                  <p className="text-white text-sm">Industries Served</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
                <Button className="bg-orange hover:bg-orange/90 text-white whitespace-nowrap">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <p className="text-white/60 text-xs mt-4">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Contact Sales Team
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="link" className="text-white hover:text-orange">
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

export default CTASection
