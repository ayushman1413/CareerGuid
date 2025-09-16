"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, TrendingUp, MessageSquare, Plus } from "lucide-react"

export function ChatSidebar() {
  const recentTopics = [
    { title: "Engineering vs Medical", time: "2 hours ago" },
    { title: "Best colleges for CS", time: "1 day ago" },
    { title: "Career after 12th", time: "3 days ago" },
    { title: "Salary expectations", time: "1 week ago" },
  ]

  const popularQuestions = [
    "What career suits my personality?",
    "How to choose between streams?",
    "Best colleges for engineering?",
    "Career prospects in AI/ML?",
    "How to prepare for entrance exams?",
  ]

  const careerInsights = [
    {
      title: "Tech Careers Trending",
      description: "AI and Data Science roles growing by 40%",
      icon: TrendingUp,
    },
    {
      title: "New Course Alert",
      description: "Government launches new skill programs",
      icon: BookOpen,
    },
    {
      title: "Success Stories",
      description: "Read how students found their path",
      icon: Users,
    },
  ]

  return (
    <div className="space-y-6">
      {/* New Chat */}
      <Card>
        <CardContent className="p-4">
          <Button className="w-full bg-transparent" variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            New Conversation
          </Button>
        </CardContent>
      </Card>

      {/* Recent Conversations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Chats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentTopics.map((topic, index) => (
            <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
              <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{topic.title}</div>
                <div className="text-xs text-muted-foreground">{topic.time}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Questions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Questions</CardTitle>
          <CardDescription>Quick starts for your career exploration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {popularQuestions.map((question, index) => (
            <Button key={index} variant="ghost" className="w-full justify-start text-left h-auto p-2 text-sm">
              {question}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Career Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Career Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {careerInsights.map((insight, index) => (
            <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <insight.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{insight.title}</div>
                <div className="text-xs text-muted-foreground">{insight.description}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
