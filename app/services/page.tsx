import type { Metadata } from "next"
import { BarChart2, Database, LineChart, PieChart, Layers } from "lucide-react"
import ServiceCard from "@/components/services/service-card"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"
import AnimatedGradientText from "@/components/animations/animated-gradient-text"
import DataParticles from "@/components/animations/data-particles"
import DataJourneyRoadmap from "@/components/services/data-journey-roadmap"
import CoreServices from "@/components/services/core-services"
import TechStack from "@/components/services/tech-stack"
import FaqSection from "@/components/services/faq-section"

export const metadata: Metadata = {
  title: "Services | Dimex Data Analytics",
  description: "Explore our comprehensive data analytics services",
}

const services = [
  {
    id: "data-strategy",
    title: "Data Strategy",
    description: "Develop a comprehensive data strategy aligned with your business objectives.",
    icon: <Database className="h-10 w-10 text-orange" />,
    features: [
      "Data maturity assessment",
      "Strategic roadmap development",
      "Data architecture planning",
      "ROI analysis and measurement",
      "Technology stack recommendations",
    ],
    delay: 0,
  },
  {
    id: "data-governance",
    title: "Data Governance",
    description: "Establish policies and procedures to ensure data quality and compliance.",
    icon: <Layers className="h-10 w-10 text-orange" />,
    features: [
      "Data quality management",
      "Metadata management",
      "Security and privacy compliance",
      "Data stewardship programs",
      "Governance framework implementation",
    ],
    delay: 150,
  },
  {
    id: "bi-analytics",
    title: "BI & Analytics",
    description: "Transform raw data into actionable insights with powerful visualization tools.",
    icon: <BarChart2 className="h-10 w-10 text-orange" />,
    features: [
      "Interactive dashboard development",
      "Self-service analytics solutions",
      "KPI definition and tracking",
      "Custom report creation",
      "Real-time analytics implementation",
    ],
    delay: 300,
  },
  {
    id: "platform-modernization",
    title: "Platform Modernization",
    description: "Upgrade your data infrastructure to leverage cloud-native technologies.",
    icon: <LineChart className="h-10 w-10 text-orange" />,
    features: [
      "Cloud migration strategy",
      "Data warehouse modernization",
      "ETL/ELT pipeline development",
      "Legacy system integration",
      "Performance optimization",
    ],
    delay: 450,
  },
  {
    id: "ai-advanced-analytics",
    title: "AI & Advanced Analytics",
    description: "Implement machine learning and AI solutions to unlock predictive insights.",
    icon: <PieChart className="h-10 w-10 text-orange" />,
    features: [
      "Predictive modeling",
      "Machine learning implementation",
      "Natural language processing",
      "Computer vision solutions",
      "Anomaly detection systems",
    ],
    delay: 600,
  },
]

export default function ServicesPage() {
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
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <AnimatedGradientText text="Data Solutions" /> for Your Business
              </h1>
              <p className="text-white/80 text-lg">
                We offer a wide range of data analytics services to help you harness the power of your data and drive
                business growth.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} id={service.id}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                  delay={service.delay}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Journey Roadmap Section */}
      <DataJourneyRoadmap />

      {/* Core Services Section */}
      <CoreServices />

      {/* Technology Stack Section */}
      <TechStack />

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                How We <AnimatedGradientText text="Deliver Results" />
              </h2>
              <p className="text-gray-600">
                Our proven methodology ensures we deliver high-quality solutions that meet your specific business needs.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <RevealOnScroll animation="fade-in-up" delay={0}>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="bg-navy/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Discovery</h3>
                <p className="text-gray-600">
                  We begin by understanding your business objectives, challenges, and current data landscape.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in-up" delay={150}>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="bg-navy/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Strategy</h3>
                <p className="text-gray-600">
                  We develop a tailored strategy and roadmap to address your specific data needs and goals.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in-up" delay={300}>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="bg-navy/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Implementation</h3>
                <p className="text-gray-600">
                  Our expert team executes the strategy, implementing solutions with minimal disruption.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in-up" delay={450}>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="bg-navy/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-navy font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Optimization</h3>
                <p className="text-gray-600">
                  We continuously monitor, measure, and refine solutions to ensure optimal performance.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </>
  )
}
