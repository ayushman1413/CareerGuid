"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Circle, Clock, Target, TrendingUp, BookOpen } from "lucide-react"

export function ProgressTracking({ user }) {
  const milestones = [
    {
      id: 1,
      title: "Complete Career Assessment",
      description: "Take the comprehensive career quiz to discover your interests",
      completed: !!user.quizResults,
      progress: user.quizResults ? 100 : 0,
      category: "Assessment",
    },
    {
      id: 2,
      title: "Explore Career Options",
      description: "Research at least 5 different career paths",
      completed: false,
      progress: 60,
      category: "Exploration",
    },
    {
      id: 3,
      title: "College Research",
      description: "Shortlist 10 colleges that match your interests",
      completed: false,
      progress: 40,
      category: "Education",
    },
    {
      id: 4,
      title: "Skill Development Plan",
      description: "Create a plan to develop relevant skills",
      completed: false,
      progress: 20,
      category: "Skills",
    },
    {
      id: 5,
      title: "Connect with Mentors",
      description: "Find and connect with professionals in your field",
      completed: false,
      progress: 0,
      category: "Networking",
    },
  ]

  const achievements = [
    {
      title: "First Steps",
      description: "Completed your first career assessment",
      earned: !!user.quizResults,
      date: user.quizResults ? "2 days ago" : null,
      icon: Target,
    },
    {
      title: "Explorer",
      description: "Explored 10+ colleges",
      earned: true,
      date: "1 week ago",
      icon: BookOpen,
    },
    {
      title: "Curious Mind",
      description: "Asked 20+ questions to AI advisor",
      earned: true,
      date: "3 days ago",
      icon: TrendingUp,
    },
    {
      title: "Goal Setter",
      description: "Set your career goals",
      earned: false,
      date: null,
      icon: CheckCircle,
    },
  ]

  const weeklyGoals = [
    {
      title: "Research 3 new colleges",
      completed: true,
      dueDate: "This week",
    },
    {
      title: "Complete skill assessment",
      completed: false,
      dueDate: "This week",
    },
    {
      title: "Update career goals",
      completed: false,
      dueDate: "Next week",
    },
  ]

  const overallProgress = Math.round(
    milestones.reduce((acc, milestone) => acc + milestone.progress, 0) / milestones.length,
  )

  return (
    <div className="space-y-8">
      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Overall Career Journey Progress
          </CardTitle>
          <CardDescription>Your progress towards career readiness</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">{overallProgress}% Complete</span>
              <Badge variant={overallProgress >= 70 ? "default" : overallProgress >= 40 ? "secondary" : "outline"}>
                {overallProgress >= 70 ? "On Track" : overallProgress >= 40 ? "Making Progress" : "Getting Started"}
              </Badge>
            </div>
            <Progress value={overallProgress} className="h-3" />
            <p className="text-sm text-muted-foreground">
              Keep going! You're making great progress on your career journey.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Milestones */}
        <Card>
          <CardHeader>
            <CardTitle>Career Milestones</CardTitle>
            <CardDescription>Key steps in your career development journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="flex items-start space-x-3">
                  <div className="mt-1">
                    {milestone.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{milestone.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {milestone.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    <div className="flex items-center space-x-2">
                      <Progress value={milestone.progress} className="flex-1 h-2" />
                      <span className="text-xs text-muted-foreground">{milestone.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
            <CardDescription>Badges and milestones you've unlocked</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${
                    achievement.earned ? "bg-green-50 border border-green-200" : "bg-muted/50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.earned ? "bg-green-100" : "bg-muted"
                    }`}
                  >
                    <achievement.icon
                      className={`w-5 h-5 ${achievement.earned ? "text-green-600" : "text-muted-foreground"}`}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-medium ${achievement.earned ? "text-green-900" : "text-muted-foreground"}`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${achievement.earned ? "text-green-700" : "text-muted-foreground"}`}>
                      {achievement.description}
                    </p>
                    {achievement.earned && achievement.date && (
                      <p className="text-xs text-green-600 mt-1">Earned {achievement.date}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Weekly Goals
          </CardTitle>
          <CardDescription>Stay on track with your short-term objectives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  {goal.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-muted-foreground" />
                  )}
                  <div>
                    <p className={`font-medium ${goal.completed ? "line-through text-muted-foreground" : ""}`}>
                      {goal.title}
                    </p>
                    <p className="text-sm text-muted-foreground">{goal.dueDate}</p>
                  </div>
                </div>
                {!goal.completed && (
                  <Button size="sm" variant="outline">
                    Mark Complete
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
