"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, BookOpen, Target, Award, Calendar } from "lucide-react"
import Link from "next/link"

export function DashboardOverview({ user }) {
  const stats = [
    {
      title: "Career Assessment",
      value: user.quizResults ? "Completed" : "Pending",
      description: user.quizResults ? "Last taken 2 days ago" : "Take your first assessment",
      icon: Target,
      color: user.quizResults ? "text-green-600" : "text-orange-600",
      action: user.quizResults ? "/quiz" : "/quiz",
      actionText: user.quizResults ? "Retake Quiz" : "Take Quiz",
    },
    {
      title: "Colleges Explored",
      value: "12",
      description: "Shortlisted 3 colleges",
      icon: BookOpen,
      color: "text-blue-600",
      action: "/colleges",
      actionText: "Explore More",
    },
    {
      title: "AI Conversations",
      value: "8",
      description: "Last chat yesterday",
      icon: TrendingUp,
      color: "text-purple-600",
      action: "/advisor",
      actionText: "Continue Chat",
    },
    {
      title: "Achievements",
      value: "5",
      description: "2 badges earned this week",
      icon: Award,
      color: "text-yellow-600",
      action: "/achievements",
      actionText: "View All",
    },
  ]

  const recentActivities = [
    {
      title: "Completed Career Assessment",
      description: "Discovered top 3 career matches",
      time: "2 days ago",
      type: "quiz",
    },
    {
      title: "Explored Engineering Colleges",
      description: "Shortlisted IIT Delhi and BITS Pilani",
      time: "3 days ago",
      type: "college",
    },
    {
      title: "AI Career Consultation",
      description: "Discussed software engineering career path",
      time: "5 days ago",
      type: "chat",
    },
    {
      title: "Profile Updated",
      description: "Added interests and skills",
      time: "1 week ago",
      type: "profile",
    },
  ]

  const upcomingTasks = [
    {
      title: "Research College Applications",
      description: "Deadline for early applications approaching",
      dueDate: "In 5 days",
      priority: "high",
    },
    {
      title: "Prepare for Entrance Exams",
      description: "JEE Main preparation schedule",
      dueDate: "In 2 weeks",
      priority: "medium",
    },
    {
      title: "Update Career Goals",
      description: "Refine your career objectives",
      dueDate: "In 1 month",
      priority: "low",
    },
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

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mb-3">{stat.description}</p>
              <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
                <Link href={stat.action}>{stat.actionText}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest career exploration activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Important deadlines and reminders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium">{task.title}</p>
                      <Badge variant="outline" className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{task.description}</p>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {task.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Career Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Career Journey Progress</CardTitle>
          <CardDescription>Track your progress towards your career goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Career Exploration</span>
                <span className="text-sm text-muted-foreground">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">College Research</span>
                <span className="text-sm text-muted-foreground">60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Skill Development</span>
                <span className="text-sm text-muted-foreground">40%</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
