import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  delay?: number
}

const BlogCard = ({ id, title, excerpt, category, author, date, readTime, image, delay = 0 }: BlogCardProps) => {
  return (
    <RevealOnScroll animation="fade-in-up" delay={delay}>
      <Card className="blog-card overflow-hidden border-none shadow-lg hover:shadow-xl bg-white h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-center mb-2">
            <Badge className="bg-orange text-white">{category}</Badge>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
          <CardTitle className="text-xl text-navy hover:text-orange transition-colors">
            <Link href={`/blog/${id}`}>{title}</Link>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-gray-600 mb-4">{excerpt}</CardDescription>

          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center mr-4">
              <User className="h-4 w-4 mr-1" />
              <span>{author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{date}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Link href={`/blog/${id}`} className="text-navy font-medium hover:text-orange transition-colors">
            Read More →
          </Link>
        </CardFooter>
      </Card>
    </RevealOnScroll>
  )
}

export default BlogCard
