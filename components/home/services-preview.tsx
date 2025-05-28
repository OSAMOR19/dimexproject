import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart2, Database, LineChart, PieChart, Layers } from "lucide-react"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"
import AnimatedGradientText from "@/components/animations/animated-gradient-text"

const services = [
  {
    title: "Data Strategy",
    description: "Develop a comprehensive data strategy aligned with your business objectives.",
    icon: <Database className="h-10 w-10 text-orange" />,
    delay: 0,
  },
  {
    title: "Data Governance",
    description: "Establish policies and procedures to ensure data quality and compliance.",
    icon: <Layers className="h-10 w-10 text-orange" />,
    delay: 150,
  },
  {
    title: "BI & Analytics",
    description: "Transform raw data into actionable insights with powerful visualization tools.",
    icon: <BarChart2 className="h-10 w-10 text-orange" />,
    delay: 300,
  },
  {
    title: "Platform Modernization",
    description: "Upgrade your data infrastructure to leverage cloud-native technologies.",
    icon: <LineChart className="h-10 w-10 text-orange" />,
    delay: 450,
  },
  {
    title: "AI & Advanced Analytics",
    description: "Implement machine learning and AI solutions to unlock predictive insights.",
    icon: <PieChart className="h-10 w-10 text-orange" />,
    delay: 600,
  },
]

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <div className="inline-block bg-orange/10 dark:bg-orange/20 text-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Comprehensive <AnimatedGradientText text="Data Solutions" /> for Your Business
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a wide range of data analytics services to help you harness the power of your data and drive
              business growth.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll key={index} animation="fade-in-up" delay={service.delay}>
              <Card className="service-card border-none shadow-lg hover:shadow-xl bg-white dark:bg-gray-800 h-full">
                <CardHeader>
                  <div className="service-icon bg-navy/5 p-4 rounded-2xl inline-block mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-navy dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="ghost" className="text-navy dark:text-white hover:text-orange p-0 hover:bg-transparent">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={800}>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-navy dark:border-white text-navy dark:text-white hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden before:absolute before:inset-0 before:bg-navy dark:before:bg-white before:transform before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 before:origin-left">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

export default ServicesPreview
