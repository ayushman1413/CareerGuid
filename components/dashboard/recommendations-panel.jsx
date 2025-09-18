"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, BookOpen, MapPin, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export function RecommendationsPanel({ user }) {
  const personalizedRecommendations = [
    {
      title: "Explore Computer Science Engineering",
      description: "Based on your quiz results, you show strong aptitude for technology and problem-solving",
      type: "Career Path",
      priority: "high",
      action: "/advisor",
      actionText: "Learn More",
      icon: Lightbulb,
    },
    {
      title: "Research IIT Delhi & BITS Pilani",
      description: "These colleges align with your interests and academic profile",
      type: "College",
      priority: "high",
      action: "/colleges",
      actionText: "View Details",
      icon: MapPin,
    },
    {
      title: "Develop Programming Skills",
      description: "Start with Python or Java to build a strong foundation",
      type: "Skill Development",
      priority: "medium",
      action: "/advisor",
      actionText: "Get Guidance",
      icon: BookOpen,
    },
    {
      title: "Connect with Tech Professionals",
      description: "Network with software engineers and tech entrepreneurs",
      type: "Networking",
      priority: "medium",
      action: "/community",
      actionText: "Find Mentors",
      icon: Users,
    },
  ]

  const trendingOpportunities = [
    {
      title: "AI & Machine Learning Bootcamp",
      description: "Free online course starting next month",
      category: "Learning",
      deadline: "Registration closes in 5 days",
    },
    {
      title: "Tech Internship Program",
      description: "Summer internships for high school students",
      category: "Experience",
      deadline: "Apply by March 15",
    },
    {
      title: "Engineering College Fair",
      description: "Virtual fair with 50+ top engineering colleges",
      category: "Event",
      deadline: "This weekend",
    },
  ]

  const skillRecommendations = [
    { skill: "Python Programming", relevance: 95, difficulty: "Beginner" },
    { skill: "Data Analysis", relevance: 88, difficulty: "Intermediate" },
    { skill: "Web Development", relevance: 82, difficulty: "Beginner" },
    { skill: "Machine Learning", relevance: 78, difficulty: "Advanced" },
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      {/* Personalized Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Personalized Recommendations
          </CardTitle>
          <CardDescription>Tailored suggestions based on your profile and interests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {personalizedRecommendations.map((rec, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg border hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <rec.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">{rec.title}</h4>
                    <Badge variant="outline" className={getPriorityColor(rec.priority)}>
                      {rec.priority} priority
                    </Badge>
                    <Badge variant="secondary">{rec.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  <Button size="sm" asChild>
                    <Link href={rec.action}>
                      {rec.actionText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trending Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Trending Opportunities
            </CardTitle>
            <CardDescription>Don&apos;t miss these time-sensitive opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendingOpportunities.map((opp, index) => (
                <div key={index} className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{opp.title}</h4>
                    <Badge variant="outline">{opp.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{opp.description}</p>
                  <p className="text-xs text-orange-600 font-medium">{opp.deadline}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Recommended Skills
            </CardTitle>
            <CardDescription>Skills that align with your career interests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skillRecommendations.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{skill.skill}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={getDifficultyColor(skill.difficulty)}>
                        {skill.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{skill.relevance}% match</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.relevance}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
