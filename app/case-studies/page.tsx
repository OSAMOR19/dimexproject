import type { Metadata } from "next"
import CaseStudyCard from "@/components/case-studies/case-study-card"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"
import AnimatedGradientText from "@/components/animations/animated-gradient-text"
import DataParticles from "@/components/animations/data-particles"

export const metadata: Metadata = {
  title: "Case Studies | Dimex Data Analytics",
  description: "Explore our successful data analytics case studies",
}

const caseStudies = [
  {
    id: "retail-analytics",
    title: "Retail Analytics Transformation",
    client: "Global Retail Chain",
    industry: "Retail",
    summary:
      "Implemented a comprehensive analytics solution to optimize inventory management and improve customer experience.",
    result: "30% reduction in stockouts, 25% increase in customer satisfaction, and $5M annual cost savings.",
    image: "/placeholder.svg?height=400&width=600",
    delay: 0,
  },
  {
    id: "healthcare-predictive",
    title: "Predictive Healthcare Analytics",
    client: "Regional Hospital Network",
    industry: "Healthcare",
    summary: "Developed predictive models to forecast patient admissions and optimize resource allocation.",
    result: "15% improvement in resource utilization, 20% reduction in wait times, and enhanced patient care quality.",
    image: "/placeholder.svg?height=400&width=600",
    delay: 150,
  },
  {
    id: "financial-fraud",
    title: "Financial Fraud Detection System",
    client: "International Banking Group",
    industry: "Finance",
    summary: "Implemented an AI-powered fraud detection system to identify suspicious transactions in real-time.",
    result: "60% increase in fraud detection rate, 40% reduction in false positives, saving $12M annually.",
    image: "/placeholder.svg?height=400&width=600",
    delay: 300,
  },
  {
    id: "manufacturing-optimization",
    title: "Manufacturing Process Optimization",
    client: "Automotive Components Manufacturer",
    industry: "Manufacturing",
    summary: "Deployed IoT sensors and analytics platform to monitor and optimize production processes.",
    result: "22% increase in production efficiency, 18% reduction in defect rates, and $8M annual savings.",
    image: "/placeholder.svg?height=400&width=600",
    delay: 450,
  },
  {
    id: "ecommerce-personalization",
    title: "E-commerce Personalization Engine",
    client: "Online Marketplace",
    industry: "E-commerce",
    summary: "Built a machine learning-based recommendation engine to personalize customer shopping experiences.",
    result: "35% increase in conversion rates, 28% higher average order value, and improved customer retention.",
    image: "/placeholder.svg?height=400&width=600",
    delay: 600,
  },
  {
    id: "logistics-optimization",
    title: "Supply Chain Analytics Solution",
    client: "Global Logistics Provider",
    industry: "Logistics",
    summary: "Developed a real-time analytics platform to optimize routing and delivery operations.",
    result: "15% reduction in fuel costs, 20% improvement in on-time deliveries, and enhanced customer satisfaction.",
    image: "/placeholder.svg?height=400&width=600",
    delay: 750,
  },
]

export default function CaseStudiesPage() {
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
                Case Studies
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <AnimatedGradientText text="Success Stories" />
              </h1>
              <p className="text-white/80 text-lg">
                Explore how we've helped businesses across various industries transform their data into actionable
                insights and drive growth.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.id}
                id={study.id}
                title={study.title}
                client={study.client}
                industry={study.industry}
                summary={study.summary}
                result={study.result}
                image={study.image}
                delay={study.delay}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-navy/10 dark:bg-navy/20 text-navy dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Industries We Serve
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-gray-100 mb-6">
                Data Solutions for <AnimatedGradientText text="Every Industry" />
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We have experience working with clients across a wide range of industries, delivering tailored data
                solutions to meet their specific needs.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Retail",
              "Healthcare",
              "Finance",
              "Manufacturing",
              "E-commerce",
              "Logistics",
              "Technology",
              "Energy",
              "Telecommunications",
              "Education",
              "Insurance",
              "Real Estate",
            ].map((industry, index) => (
              <RevealOnScroll key={industry} animation="fade-in-up" delay={index * 50}>
                <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 text-center border border-gray-100 dark:border-gray-600 hover:border-orange/30 dark:hover:border-orange/30 hover:shadow-lg transition-all">
                  <h3 className="text-navy dark:text-gray-100 font-medium">{industry}</h3>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
