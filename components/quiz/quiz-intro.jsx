"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, Brain, ArrowRight } from "lucide-react"

export function QuizIntro({ onStart }) {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your responses for accurate career matching",
    },
    {
      icon: Target,
      title: "Personalized Results",
      description: "Get tailored career recommendations based on your unique interests and skills",
    },
    {
      icon: Clock,
      title: "Quick & Easy",
      description: "Complete the assessment in just 10-15 minutes",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Career Assessment
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Discover Your Perfect <span className="text-primary">Career Path</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Take our comprehensive career assessment to uncover your interests, strengths, and ideal career matches. Get
            personalized recommendations tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Ready to Begin?</CardTitle>
            <CardDescription>
              Answer 20 carefully crafted questions to unlock your career potential. There are no right or wrong answers
              - just be honest about your preferences and interests.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>10-15 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>20 questions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4" />
                <span>AI-powered</span>
              </div>
            </div>

            <Button size="lg" onClick={onStart} className="text-lg px-8">
              Start Career Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-xs text-muted-foreground">
              Your responses are private and will only be used to generate your personalized career recommendations.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
