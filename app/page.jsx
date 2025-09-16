import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, MessageCircle, Star, ArrowRight, Target, Brain, Compass, Award } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "Smart Career Assessment",
      description: "AI-powered quizzes to discover your interests, aptitudes, and ideal career paths",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Compass,
      title: "College Finder",
      description: "Find the perfect government colleges with filters for location, fees, and facilities",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MessageCircle,
      title: "AI Career Advisor",
      description: "24/7 virtual mentor to answer your career questions and provide guidance",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Personalized learning paths and skill recommendations for your chosen field",
      color: "bg-orange-100 text-orange-600",
    },
  ]

  const stats = [
    { number: "50,000+", label: "Students Guided" },
    { number: "2,000+", label: "Government Colleges" },
    { number: "100+", label: "Career Paths" },
    { number: "95%", label: "Success Rate" },
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 50,000+ Students
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Your <span className="text-primary">Career Journey</span> Starts Here
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover your perfect career path with AI-powered assessments, find the best government colleges, and get
              personalized guidance for Class 9-12 students and parents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/quiz">
                  Start Career Quiz
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/colleges">
                  Find Colleges
                  <MapPin className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Career Success</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and guidance to help you make informed decisions about your future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover Your Perfect Career Path?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have found their direction with our AI-powered career guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8">
              <Link href="/quiz">
                Take Free Assessment
                <Target className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/advisor">
                Chat with AI Advisor
                <MessageCircle className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
