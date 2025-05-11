import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.png" alt="Dimex Logo" width={150} height={60} className="h-16 w-auto" />
            </Link>
            <p className="text-gray-300 mt-4">Transforming data into actionable insights for businesses worldwide.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-orange transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-orange transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-orange flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 Analytics Way, Data City, DC 10101</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-orange flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-orange transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-orange flex-shrink-0" />
                <a href="mailto:info@dimex.com" className="text-gray-300 hover:text-orange transition-colors">
                  info@dimex.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest insights and trends in data analytics.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-orange hover:bg-orange/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Dimex. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-orange text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-orange text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
