"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Calendar, Flame, Target } from "lucide-react"

export function ProgressStats({ user }) {
  const weeklyStats = [
    { day: "Mon", activities: 3, points: 150 },
    { day: "Tue", activities: 5, points: 250 },
    { day: "Wed", activities: 2, points: 100 },
    { day: "Thu", activities: 4, points: 200 },
    { day: "Fri", activities: 6, points: 300 },
    { day: "Sat", activities: 1, points: 50 },
    { day: "Sun", activities: 3, points: 150 },
  ]

  const streakData = {
    current: 7,
    longest: 12,
    thisWeek: 5,
  }

  const levelProgress = {
    currentLevel: 3,
    currentXP: 1250,
    nextLevelXP: 1500,
    totalXP: 2750,
  }

  const monthlyGoals = [
    {
      title: "Complete 5 Career Assessments",
      current: 3,
      target: 5,
      category: "Assessment",
    },
    {
      title: "Explore 20 Colleges",
      current: 12,
      target: 20,
      category: "Research",
    },
    {
      title: "Chat with AI 30 Times",
      current: 25,
      target: 30,
      category: "Learning",
    },
    {
      title: "Earn 1000 Points",
      current: 750,
      target: 1000,
      category: "Points",
    },
  ]

  const progressToNextLevel = ((levelProgress.currentXP / levelProgress.nextLevelXP) * 100).toFixed(1)

  return (
    <div className="space-y-8">
      {/* Level & XP */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Level Progress
          </CardTitle>
          <CardDescription>Your current level and experience points</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-3xl font-bold text-primary">Level {levelProgress.currentLevel}</div>
              <div className="text-sm text-muted-foreground">
                {levelProgress.currentXP} / {levelProgress.nextLevelXP} XP
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold">{levelProgress.totalXP} Total XP</div>
              <div className="text-sm text-muted-foreground">{progressToNextLevel}% to next level</div>
            </div>
          </div>
          <Progress value={Number.parseFloat(progressToNextLevel)} className="h-3" />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Activity Streak */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              Activity Streak
            </CardTitle>
            <CardDescription>Keep your learning momentum going</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">{streakData.current}</div>
                <div className="text-sm text-muted-foreground">Current Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{streakData.longest}</div>
                <div className="text-sm text-muted-foreground">Longest Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{streakData.thisWeek}</div>
                <div className="text-sm text-muted-foreground">This Week</div>
              </div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-sm font-medium text-orange-800">You're on fire! 🔥</p>
              <p className="text-xs text-orange-600">Keep up the great work to maintain your streak</p>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Weekly Activity
            </CardTitle>
            <CardDescription>Your activity pattern this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyStats.map((day, index) => (
                <div key={day.day} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 text-sm font-medium">{day.day}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="text-sm">{day.activities} activities</div>
                        <Badge variant="outline" className="text-xs">
                          +{day.points} pts
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="w-20">
                    <Progress value={(day.activities / 6) * 100} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Monthly Goals
          </CardTitle>
          <CardDescription>Track your progress towards monthly objectives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {monthlyGoals.map((goal, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{goal.title}</h4>
                    <Badge variant="outline" className="text-xs mt-1">
                      {goal.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      {goal.current} / {goal.target}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {Math.round((goal.current / goal.target) * 100)}%
                    </div>
                  </div>
                </div>
                <Progress value={(goal.current / goal.target) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
