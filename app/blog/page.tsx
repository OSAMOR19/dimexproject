import type { Metadata } from "next"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import BlogCard from "@/components/blog/blog-card"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"
import AnimatedGradientText from "@/components/animations/animated-gradient-text"
import DataParticles from "@/components/animations/data-particles"

export const metadata: Metadata = {
  title: "Blog | Dimex Data Analytics",
  description: "Insights and articles on data analytics, AI, and business intelligence",
}

const blogPosts = [
  {
    id: "data-strategy-2023",
    title: "Building a Data Strategy for 2023 and Beyond",
    excerpt:
      "Learn how to develop a comprehensive data strategy that aligns with your business objectives and drives growth.",
    category: "Data Strategy",
    author: "Olarenwaju Oladeinde",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    delay: 0,
  },
  {
    id: "ai-business-applications",
    title: "Practical AI Applications for Business Growth",
    excerpt:
      "Discover how businesses are leveraging artificial intelligence to drive innovation and gain competitive advantage.",
    category: "AI & ML",
    author: "Sarah Chen",
    date: "June 3, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    delay: 150,
  },
  {
    id: "data-governance-best-practices",
    title: "Data Governance Best Practices for Enterprise",
    excerpt:
      "Explore the key principles and practices for establishing effective data governance in your organization.",
    category: "Data Governance",
    author: "Michael Rodriguez",
    date: "June 22, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    delay: 300,
  },
  {
    id: "cloud-data-warehousing",
    title: "The Future of Cloud Data Warehousing",
    excerpt: "An in-depth look at the evolution of cloud data warehousing and what it means for modern businesses.",
    category: "Cloud",
    author: "Emily Patel",
    date: "July 10, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    delay: 450,
  },
  {
    id: "real-time-analytics",
    title: "Implementing Real-Time Analytics Pipelines",
    excerpt: "Learn how to build and deploy real-time analytics pipelines to gain immediate insights from your data.",
    category: "Analytics",
    author: "Olarenwaju Oladeinde",
    date: "August 5, 2023",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600",
    delay: 600,
  },
  {
    id: "data-visualization-techniques",
    title: "Advanced Data Visualization Techniques",
    excerpt:
      "Master the art of data visualization with these advanced techniques to make your insights more impactful.",
    category: "Visualization",
    author: "Sarah Chen",
    date: "September 12, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    delay: 750,
  },
]

const categories = [
  "Data Strategy",
  "AI & ML",
  "Data Governance",
  "Cloud",
  "Analytics",
  "Visualization",
  "Big Data",
  "Business Intelligence",
]

export default function BlogPage() {
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
                Our Blog
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Insights & <AnimatedGradientText text="Perspectives" />
              </h1>
              <p className="text-white/80 text-lg">
                Stay updated with the latest trends, best practices, and insights in data analytics and business
                intelligence.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <RevealOnScroll animation="fade-in-left">
                  <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 mb-8">
                    <h3 className="text-lg font-bold text-navy dark:text-gray-100 mb-4">Search</h3>
                    <div className="flex">
                      <Input type="text" placeholder="Search articles..." className="rounded-r-none dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                      <Button className="bg-orange hover:bg-orange/90 text-white rounded-l-none">
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll animation="fade-in-left" delay={200}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-bold text-navy dark:text-gray-100 mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="bg-transparent dark:text-gray-200 dark:border-gray-500 hover:bg-navy hover:text-white dark:hover:bg-navy/70 cursor-pointer transition-colors"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll animation="fade-in-left" delay={400}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 mt-8">
                    <h3 className="text-lg font-bold text-navy dark:text-gray-100 mb-4">Subscribe</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Get the latest articles and insights delivered to your inbox.
                    </p>
                    <Input type="email" placeholder="Your email address" className="mb-3 dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                    <Button className="w-full bg-orange hover:bg-orange/90 text-white">Subscribe</Button>
                  </div>
                </RevealOnScroll>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    author={post.author}
                    date={post.date}
                    readTime={post.readTime}
                    image={post.image}
                    delay={post.delay}
                  />
                ))}
              </div>

              <RevealOnScroll delay={900}>
                <div className="mt-12 flex justify-center">
                  <Button variant="outline" className="border-navy text-navy dark:border-gray-300 dark:text-gray-200 hover:bg-navy/5 dark:hover:bg-navy/20">
                    Load More Articles
                  </Button>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
