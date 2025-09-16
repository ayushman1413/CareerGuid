"use client"

import { useState, useEffect } from "react"
import { AuthGuard } from "@/components/auth/auth-guard"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { ProfileSection } from "@/components/dashboard/profile-section"
import { ProgressTracking } from "@/components/dashboard/progress-tracking"
import { RecommendationsPanel } from "@/components/dashboard/recommendations-panel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, BarChart3, Target, BookOpen } from "lucide-react"

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")

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
                <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
                <p className="text-muted-foreground mt-2">Track your career journey and discover new opportunities</p>
              </div>
              <div className="text-sm text-muted-foreground">
                Last login: {new Date(user.loginTime).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="progress" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                Progress
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Recommendations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <DashboardOverview user={user} />
            </TabsContent>

            <TabsContent value="profile">
              <ProfileSection user={user} onUserUpdate={setUser} />
            </TabsContent>

            <TabsContent value="progress">
              <ProgressTracking user={user} />
            </TabsContent>

            <TabsContent value="recommendations">
              <RecommendationsPanel user={user} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AuthGuard>
  )
}
