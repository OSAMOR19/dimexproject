import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  features: string[]
  delay?: number
}

const ServiceCard = ({ title, description, icon, features, delay = 0 }: ServiceCardProps) => {
  return (
    <RevealOnScroll animation="fade-in-up" delay={delay}>
      <Card className="service-card border-none shadow-lg hover:shadow-xl bg-white dark:bg-gray-800 h-full">
        <CardHeader>
          <div className="service-icon bg-navy/5 dark:bg-navy/20 p-4 rounded-2xl inline-block mb-4">{icon}</div>
          <CardTitle className="text-xl text-navy dark:text-gray-100">{title}</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Link href="/contact">
            <Button className="bg-orange hover:bg-orange/90 text-white">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </RevealOnScroll>
  )
}

export default ServiceCard
