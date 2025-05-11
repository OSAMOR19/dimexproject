import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"
import AnimatedGradientText from "@/components/animations/animated-gradient-text"
import DataParticles from "@/components/animations/data-particles"

export const metadata: Metadata = {
  title: "Contact Us | Dimex Data Analytics",
  description: "Get in touch with our data analytics experts",
}

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <DataParticles count={20} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Contact Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get in <AnimatedGradientText text="Touch" />
              </h1>
              <p className="text-white/80 text-lg">
                Have questions about our services? Ready to start your data journey? Our team is here to help.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <RevealOnScroll animation="fade-in-left">
              <div className="lg:col-span-1 space-y-6">
                <Card className="border-none shadow-lg bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy">Contact Information</CardTitle>
                    <CardDescription>Reach out to us through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-navy/5 p-3 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-orange" />
                      </div>
                      <div>
                        <h3 className="text-navy font-medium">Our Office</h3>
                        <p className="text-gray-600 text-sm">
                          123 Analytics Way
                          <br />
                          Data City, DC 10101
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-navy/5 p-3 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-orange" />
                      </div>
                      <div>
                        <h3 className="text-navy font-medium">Phone</h3>
                        <p className="text-gray-600 text-sm">
                          <a href="tel:+11234567890" className="hover:text-orange transition-colors">
                            +1 (123) 456-7890
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-navy/5 p-3 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-orange" />
                      </div>
                      <div>
                        <h3 className="text-navy font-medium">Email</h3>
                        <p className="text-gray-600 text-sm">
                          <a href="mailto:info@dimex.com" className="hover:text-orange transition-colors">
                            info@dimex.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-navy/5 p-3 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-orange" />
                      </div>
                      <div>
                        <h3 className="text-navy font-medium">Business Hours</h3>
                        <p className="text-gray-600 text-sm">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy">Connect With Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-navy/5 p-3 rounded-full hover:bg-orange/10 transition-colors">
                        <svg
                          className="h-5 w-5 text-navy"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-navy/5 p-3 rounded-full hover:bg-orange/10 transition-colors">
                        <svg
                          className="h-5 w-5 text-navy"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="bg-navy/5 p-3 rounded-full hover:bg-orange/10 transition-colors">
                        <svg
                          className="h-5 w-5 text-navy"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a href="#" className="bg-navy/5 p-3 rounded-full hover:bg-orange/10 transition-colors">
                        <svg
                          className="h-5 w-5 text-navy"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in-right" delay={200}>
              <div className="lg:col-span-2">
                <Card className="border-none shadow-lg bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Full Name
                          </label>
                          <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address
                          </label>
                          <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone Number
                          </label>
                          <Input id="phone" placeholder="+1 (123) 456-7890" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-gray-700">
                            Company
                          </label>
                          <Input id="company" placeholder="Your Company" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                          Subject
                        </label>
                        <Input id="subject" placeholder="How can we help you?" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <Textarea id="message" placeholder="Tell us about your project or inquiry..." rows={6} />
                      </div>

                      <Button className="w-full bg-orange hover:bg-orange/90 text-white">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Location
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Visit Our <AnimatedGradientText text="Office" />
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] w-full">
              {/* Replace with actual map embed */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Map Embed Would Go Here</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
