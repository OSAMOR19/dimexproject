import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react"
import TeamMemberCard from "@/components/about/team-member-card"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"
import AnimatedGradientText from "@/components/animations/animated-gradient-text"
import AnimatedCounter from "@/components/animations/animated-counter"
import DataParticles from "@/components/animations/data-particles"
import founded from "@/components/images/founded.jpg"

export const metadata: Metadata = {
  title: "About Us | Dimex Data Analytics",
  description: "Learn about Dimex and our mission to transform data into actionable insights",
}

const values = [
  {
    title: "Innovation",
    description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
    icon: <TrendingUp className="h-6 w-6 text-orange" />,
  },
  {
    title: "Excellence",
    description: "We are committed to delivering the highest quality work and exceeding client expectations.",
    icon: <Award className="h-6 w-6 text-orange" />,
  },
  {
    title: "Integrity",
    description: "We operate with transparency, honesty, and the highest ethical standards.",
    icon: <CheckCircle className="h-6 w-6 text-orange" />,
  },
  {
    title: "Collaboration",
    description: "We work closely with our clients, fostering partnerships built on trust and mutual success.",
    icon: <Users className="h-6 w-6 text-orange" />,
  },
]

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in data analytics, Alex founded Dimex with a vision to help businesses leverage data for growth.",
    image: "/placeholder.svg?height=400&width=300",
    linkedin: "#",
    twitter: "#",
    email: "alex@dimex.com",
    delay: 0,
  },
  {
    name: "Sarah Chen",
    role: "Chief Data Scientist",
    bio: "Sarah leads our data science team, bringing expertise in machine learning and AI to develop innovative solutions for our clients.",
    image: "/placeholder.svg?height=400&width=300",
    linkedin: "#",
    twitter: "#",
    email: "sarah@dimex.com",
    delay: 150,
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Analytics",
    bio: "Michael specializes in transforming complex data into actionable insights that drive business growth and operational efficiency.",
    image: "/placeholder.svg?height=400&width=300",
    linkedin: "#",
    twitter: "#",
    email: "michael@dimex.com",
    delay: 300,
  },
  {
    name: "Emily Patel",
    role: "Director of Client Success",
    bio: "Emily ensures our clients receive exceptional service and that our solutions deliver measurable business value.",
    image: "/placeholder.svg?height=400&width=300",
    linkedin: "#",
    twitter: "#",
    email: "emily@dimex.com",
    delay: 450,
  },
]

export default function AboutPage() {
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
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                We Are <AnimatedGradientText text="Dimex" />
              </h1>
              <p className="text-white/80 text-lg">
                A team of data experts passionate about transforming businesses through the power of analytics.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

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
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in-right" delay={200}>
              <div className="space-y-6">
                <div className="inline-block bg-orange/10 text-orange px-4 py-2 rounded-full text-sm font-medium">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy">
                  Transforming Data into <AnimatedGradientText text="Actionable Insights" />
                </h2>
                <p className="text-gray-600">
                  Founded in 2013, Dimex has grown from a small data consultancy to a leading analytics firm serving
                  clients worldwide. Our journey began with a simple mission: to help businesses harness the power of
                  their data to drive growth and innovation.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to have worked with hundreds of organizations across various industries, from
                  startups to Fortune 500 companies. Our team of data scientists, analysts, and engineers brings
                  together diverse expertise to solve complex business challenges through data-driven approaches.
                </p>
                <p className="text-gray-600">
                  What sets us apart is our commitment to not just delivering technical solutions, but to truly
                  understanding our clients' business objectives and tailoring our approach to achieve measurable
                  results.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <RevealOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-4">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Principles That <AnimatedGradientText text="Guide Us" />
              </h2>
              <p className="text-gray-600">
                Our core values shape everything we do, from how we work with clients to how we develop our solutions.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <RevealOnScroll key={value.title} animation="fade-in-up" delay={index * 150}>
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <div className="bg-navy/5 p-4 rounded-full inline-block mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <RevealOnScroll animation="fade-in-up" delay={0}>
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2">
                  <AnimatedCounter end={10} suffix="+" className="text-orange" />
                </h3>
                <p className="text-white/80">Years of Experience</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in-up" delay={150}>
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2">
                  <AnimatedCounter end={250} suffix="+" className="text-orange" />
                </h3>
                <p className="text-white/80">Clients Worldwide</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in-up" delay={300}>
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2">
                  <AnimatedCounter end={500} suffix="+" className="text-orange" />
                </h3>
                <p className="text-white/80">Projects Completed</p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-in-up" delay={450}>
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2">
                  <AnimatedCounter end={50} suffix="+" className="text-orange" />
                </h3>
                <p className="text-white/80">Data Experts</p>
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
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Meet the <AnimatedGradientText text="Experts" />
              </h2>
              <p className="text-gray-600">
                Our diverse team brings together expertise in data science, analytics, engineering, and business
                strategy.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                linkedin={member.linkedin}
                twitter={member.twitter}
                email={member.email}
                delay={member.delay}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
