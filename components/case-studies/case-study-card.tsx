import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"

interface CaseStudyCardProps {
  id: string
  title: string
  client: string
  industry: string
  summary: string
  result: string
  image: string
  delay?: number
}

const CaseStudyCard = ({ id, title, client, industry, summary, result, image, delay = 0 }: CaseStudyCardProps) => {
  return (
    <RevealOnScroll animation="fade-in-up" delay={delay}>
      <Card className="case-study-card overflow-hidden border-none shadow-lg hover:shadow-xl bg-white h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-70"></div>
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-orange text-white">{industry}</Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl text-navy">{title}</CardTitle>
          <CardDescription className="text-gray-600">Client: {client}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-700 text-sm">{summary}</p>
          <div className="bg-navy/5 p-4 rounded-lg">
            <h4 className="text-navy font-medium mb-1">Results:</h4>
            <p className="text-gray-700 text-sm">{result}</p>
          </div>
        </CardContent>

        <CardFooter>
          <Link href={`/case-studies/${id}`}>
            <Button className="bg-orange hover:bg-orange/90 text-white">
              Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </RevealOnScroll>
  )
}

export default CaseStudyCard
