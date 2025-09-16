"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, MapPin, Target, TrendingUp, Users, Lightbulb } from "lucide-react"

export function QuickActions({ onActionClick }) {
  const actions = [
    {
      icon: Target,
      title: "Career Assessment",
      description: "Take a quiz to find your ideal career path",
      action: "I want to take a career assessment quiz to find my ideal path",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: BookOpen,
      title: "Stream Selection",
      description: "Help choosing between Science, Commerce, Arts",
      action: "Help me choose the right stream after 10th grade",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MapPin,
      title: "College Guidance",
      description: "Find the best colleges for your interests",
      action: "Show me the best colleges for my career interests",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Salary Insights",
      description: "Learn about earning potential in different fields",
      action: "Tell me about salary prospects in different career fields",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Users,
      title: "Success Stories",
      description: "Read inspiring career journeys",
      action: "Share some inspiring career success stories with me",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description: "Discover skills to build for your future",
      action: "What skills should I develop for my chosen career path?",
      color: "bg-yellow-100 text-yellow-600",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Get instant help with these common career questions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start gap-3 hover:shadow-md transition-shadow bg-transparent"
              onClick={() => onActionClick(action.action)}
            >
              <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                <action.icon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">{action.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
