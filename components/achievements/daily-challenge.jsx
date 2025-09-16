"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, Clock, Gift, CheckCircle, Star } from "lucide-react"

export function DailyChallenge({ user }) {
  const todayChallenge = {
    title: "Career Explorer",
    description: "Explore 3 new colleges in different states",
    progress: 2,
    target: 3,
    points: 150,
    timeLeft: "6 hours",
    difficulty: "Easy",
    completed: false,
  }

  const weeklyChallenge = {
    title: "Skill Seeker",
    description: "Complete career assessments in 3 different fields",
    progress: 1,
    target: 3,
    points: 500,
    timeLeft: "4 days",
    difficulty: "Medium",
    completed: false,
  }

  const upcomingChallenges = [
    {
      title: "Networking Ninja",
      description: "Connect with 5 professionals in your field of interest",
      points: 300,
      difficulty: "Hard",
      startsIn: "Tomorrow",
    },
    {
      title: "Question Master",
      description: "Ask 10 thoughtful questions to the AI advisor",
      points: 200,
      difficulty: "Easy",
      startsIn: "2 days",
    },
    {
      title: "Research Rockstar",
      description: "Create a detailed comparison of 5 colleges",
      points: 400,
      difficulty: "Medium",
      startsIn: "3 days",
    },
  ]

  const completedChallenges = [
    {
      title: "First Steps",
      description: "Complete your first career assessment",
      points: 100,
      completedDate: "Yesterday",
    },
    {
      title: "Curious Mind",
      description: "Ask your first question to the AI advisor",
      points: 50,
      completedDate: "2 days ago",
    },
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      {/* Active Challenges */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Challenge */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Daily Challenge
              </CardTitle>
              <Badge variant="outline" className={getDifficultyColor(todayChallenge.difficulty)}>
                {todayChallenge.difficulty}
              </Badge>
            </div>
            <CardDescription>Complete before midnight to earn bonus points!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{todayChallenge.title}</h3>
                <p className="text-sm text-muted-foreground">{todayChallenge.description}</p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span>Progress</span>
                <span>
                  {todayChallenge.progress} / {todayChallenge.target}
                </span>
              </div>
              <Progress value={(todayChallenge.progress / todayChallenge.target) * 100} className="h-3" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{todayChallenge.timeLeft} left</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-primary" />
                  <span className="font-medium text-primary">+{todayChallenge.points} pts</span>
                </div>
              </div>

              <Button className="w-full">Continue Challenge</Button>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Challenge */}
        <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-primary/5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-secondary" />
                Weekly Challenge
              </CardTitle>
              <Badge variant="outline" className={getDifficultyColor(weeklyChallenge.difficulty)}>
                {weeklyChallenge.difficulty}
              </Badge>
            </div>
            <CardDescription>Complete this week for mega rewards!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{weeklyChallenge.title}</h3>
                <p className="text-sm text-muted-foreground">{weeklyChallenge.description}</p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span>Progress</span>
                <span>
                  {weeklyChallenge.progress} / {weeklyChallenge.target}
                </span>
              </div>
              <Progress value={(weeklyChallenge.progress / weeklyChallenge.target) * 100} className="h-3" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{weeklyChallenge.timeLeft} left</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4 text-secondary" />
                  <span className="font-medium text-secondary">+{weeklyChallenge.points} pts</span>
                </div>
              </div>

              <Button variant="secondary" className="w-full">
                Continue Challenge
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Challenges */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Challenges</CardTitle>
            <CardDescription>Get ready for these exciting challenges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingChallenges.map((challenge, index) => (
                <div key={index} className="flex items-start justify-between p-3 rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{challenge.title}</h4>
                      <Badge variant="outline" className={getDifficultyColor(challenge.difficulty)}>
                        {challenge.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Starts {challenge.startsIn}</span>
                      <span className="text-primary font-medium">+{challenge.points} pts</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Completed Challenges */}
        <Card>
          <CardHeader>
            <CardTitle>Recently Completed</CardTitle>
            <CardDescription>Your recent challenge victories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {completedChallenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium text-green-900">{challenge.title}</h4>
                    <p className="text-sm text-green-700 mb-2">{challenge.description}</p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="text-green-600">Completed {challenge.completedDate}</span>
                      <span className="text-green-600 font-medium">+{challenge.points} pts earned</span>
                    </div>
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
