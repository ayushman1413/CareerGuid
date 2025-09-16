"use client"

import { useState, useEffect } from "react"
import { AuthGuard } from "@/components/auth/auth-guard"
import { AchievementGrid } from "@/components/achievements/achievement-grid"
import { LeaderboardPanel } from "@/components/achievements/leaderboard-panel"
import { DailyChallenge } from "@/components/achievements/daily-challenge"
import { ProgressStats } from "@/components/achievements/progress-stats"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Users, Target, TrendingUp } from "lucide-react"

export default function AchievementsPage() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  if (!user) {
    return (
      <AuthGuard>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </AuthGuard>
    )
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-primary" />
                  Achievements & Progress
                </h1>
                <p className="text-muted-foreground mt-2">
                  Track your career journey milestones and compete with peers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="achievements" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="progress" className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Progress
              </TabsTrigger>
              <TabsTrigger value="challenges" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Challenges
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Leaderboard
              </TabsTrigger>
            </TabsList>

            <TabsContent value="achievements">
              <AchievementGrid user={user} />
            </TabsContent>

            <TabsContent value="progress">
              <ProgressStats user={user} />
            </TabsContent>

            <TabsContent value="challenges">
              <DailyChallenge user={user} />
            </TabsContent>

            <TabsContent value="leaderboard">
              <LeaderboardPanel user={user} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AuthGuard>
  )
}
