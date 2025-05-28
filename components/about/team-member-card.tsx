import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"

interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
  image: any
  linkedin?: string
  twitter?: string
  email?: string
  delay?: number
}

const TeamMemberCard = ({ name, role, bio, image, linkedin, twitter, email, delay = 0 }: TeamMemberCardProps) => {
  return (
    <RevealOnScroll animation="fade-in-up" delay={delay}>
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl bg-white h-full transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-64 overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>

        <CardHeader>
          <CardTitle className="text-xl text-navy">{name}</CardTitle>
          <CardDescription className="text-orange font-medium">{role}</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-gray-600 text-sm">{bio}</p>
        </CardContent>

        <CardFooter>
          <div className="flex space-x-4">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-orange transition-colors"
              >
                <Linkedin size={18} />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-orange transition-colors"
              >
                <Twitter size={18} />
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="text-navy hover:text-orange transition-colors">
                <Mail size={18} />
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
    </RevealOnScroll>
  )
}

export default TeamMemberCard
