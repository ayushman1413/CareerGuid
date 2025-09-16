"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Medal, Award, Crown, TrendingUp } from "lucide-react"

export function LeaderboardPanel({ user }) {
  const leaderboardData = [
    {
      rank: 1,
      name: "Priya Sharma",
      points: 2850,
      level: 5,
      achievements: 12,
      streak: 15,
      change: "up",
    },
    {
      rank: 2,
      name: "Arjun Patel",
      points: 2720,
      level: 5,
      achievements: 11,
      streak: 12,
      change: "same",
    },
    {
      rank: 3,
      name: "Sneha Reddy",
      points: 2650,
      level: 4,
      achievements: 10,
      streak: 8,
      change: "up",
    },
    {
      rank: 4,
      name: user.name,
      points: 2450,
      level: 3,
      achievements: 8,
      streak: 7,
      change: "up",
      isCurrentUser: true,
    },
    {
      rank: 5,
      name: "Rahul Kumar",
      points: 2380,
      level: 3,
      achievements: 9,
      streak: 5,
      change: "down",
    },
    {
      rank: 6,
      name: "Ananya Singh",
      points: 2250,
      level: 3,
      achievements: 7,
      streak: 10,
      change: "up",
    },
    {
      rank: 7,
      name: "Vikram Joshi",
      points: 2180,
      level: 3,
      achievements: 8,
      streak: 3,
      change: "down",
    },
  ]

  const topPerformers = [
    {
      title: "Most Active This Week",
      name: "Priya Sharma",
      value: "45 activities",
      icon: TrendingUp,
    },
    {
      title: "Longest Streak",
      name: "Arjun Patel",
      value: "23 days",
      icon: Award,
    },
    {
      title: "Most Achievements",
      name: "Sneha Reddy",
      value: "15 badges",
      icon: Medal,
    },
  ]

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />
      default:
        return <div className="w-5 h-5 flex items-center justify-center text-sm font-bold">#{rank}</div>
    }
  }

  const getChangeIcon = (change) => {
    switch (change) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case "down":
        return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />
      default:
        return <div className="w-4 h-4" />
    }
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="space-y-8">
      {/* Top Performers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topPerformers.map((performer, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <performer.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">{performer.title}</h3>
              <p className="text-2xl font-bold text-primary mb-1">{performer.value}</p>
              <p className="text-sm text-muted-foreground">{performer.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Career Journey Leaderboard
          </CardTitle>
          <CardDescription>Top performers in career exploration and skill development</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboardData.map((player) => (
              <div
                key={player.rank}
                className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                  player.isCurrentUser ? "bg-primary/5 border-primary/20 ring-2 ring-primary/10" : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {getRankIcon(player.rank)}
                    {getChangeIcon(player.change)}
                  </div>

                  <Avatar className="w-10 h-10">
                    <AvatarFallback className={player.isCurrentUser ? "bg-primary text-primary-foreground" : ""}>
                      {getInitials(player.name)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`font-semibold ${player.isCurrentUser ? "text-primary" : ""}`}>{player.name}</h4>
                      {player.isCurrentUser && (
                        <Badge variant="secondary" className="text-xs">
                          You
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Level {player.level}</span>
                      <span>{player.achievements} achievements</span>
                      <span>{player.streak} day streak</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{player.points.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">points</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Your Stats */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle>Your Performance</CardTitle>
          <CardDescription>How you're doing compared to others</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">#4</div>
              <div className="text-sm text-muted-foreground">Current Rank</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">↑2</div>
              <div className="text-sm text-muted-foreground">This Week</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2,450</div>
              <div className="text-sm text-muted-foreground">Total Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">7</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
