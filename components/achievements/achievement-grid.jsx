"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Target, BookOpen, Users, Zap, Award, Crown } from "lucide-react"

export function AchievementGrid({ user }) {
  const achievements = [
    {
      id: "first_steps",
      title: "First Steps",
      description: "Complete your first career assessment",
      icon: Target,
      category: "Getting Started",
      points: 100,
      earned: !!user.quizResults,
      earnedDate: user.quizResults ? "2 days ago" : null,
      rarity: "common",
    },
    {
      id: "explorer",
      title: "College Explorer",
      description: "Explore 10+ colleges in the finder",
      icon: BookOpen,
      category: "Research",
      points: 200,
      earned: true,
      earnedDate: "1 week ago",
      rarity: "common",
    },
    {
      id: "curious_mind",
      title: "Curious Mind",
      description: "Ask 20+ questions to the AI advisor",
      icon: Zap,
      category: "Learning",
      points: 150,
      earned: true,
      earnedDate: "3 days ago",
      rarity: "common",
    },
    {
      id: "goal_setter",
      title: "Goal Setter",
      description: "Set and update your career goals",
      icon: Star,
      category: "Planning",
      points: 250,
      earned: false,
      progress: 60,
      rarity: "uncommon",
    },
    {
      id: "networker",
      title: "Networker",
      description: "Connect with 5 mentors or professionals",
      icon: Users,
      category: "Networking",
      points: 300,
      earned: false,
      progress: 20,
      rarity: "uncommon",
    },
    {
      id: "skill_builder",
      title: "Skill Builder",
      description: "Complete 3 skill development courses",
      icon: Award,
      category: "Development",
      points: 400,
      earned: false,
      progress: 33,
      rarity: "rare",
    },
    {
      id: "mentor",
      title: "Mentor",
      description: "Help 10 other students with their career questions",
      icon: Crown,
      category: "Community",
      points: 500,
      earned: false,
      progress: 0,
      rarity: "legendary",
    },
    {
      id: "perfectionist",
      title: "Perfectionist",
      description: "Complete all career milestones with 100% accuracy",
      icon: Trophy,
      category: "Excellence",
      points: 1000,
      earned: false,
      progress: 75,
      rarity: "legendary",
    },
  ]

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "common":
        return "bg-gray-100 text-gray-800 border-gray-300"
      case "uncommon":
        return "bg-green-100 text-green-800 border-green-300"
      case "rare":
        return "bg-blue-100 text-blue-800 border-blue-300"
      case "legendary":
        return "bg-purple-100 text-purple-800 border-purple-300"
      default:
        return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Getting Started":
        return Target
      case "Research":
        return BookOpen
      case "Learning":
        return Zap
      case "Planning":
        return Star
      case "Networking":
        return Users
      case "Development":
        return Award
      case "Community":
        return Crown
      case "Excellence":
        return Trophy
      default:
        return Star
    }
  }

  const earnedAchievements = achievements.filter((a) => a.earned)
  const totalPoints = earnedAchievements.reduce((sum, a) => sum + a.points, 0)

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">{earnedAchievements.length}</div>
            <div className="text-sm text-muted-foreground">Achievements Earned</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{totalPoints}</div>
            <div className="text-sm text-muted-foreground">Total Points</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">
              {Math.round((earnedAchievements.length / achievements.length) * 100)}%
            </div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Crown className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">
              {earnedAchievements.filter((a) => a.rarity === "legendary").length}
            </div>
            <div className="text-sm text-muted-foreground">Legendary Badges</div>
          </CardContent>
        </Card>
      </div>

      {/* Achievement Categories */}
      {[
        "Getting Started",
        "Research",
        "Learning",
        "Planning",
        "Networking",
        "Development",
        "Community",
        "Excellence",
      ].map((category) => {
        const categoryAchievements = achievements.filter((a) => a.category === category)
        const CategoryIcon = getCategoryIcon(category)

        return (
          <div key={category}>
            <div className="flex items-center gap-3 mb-4">
              <CategoryIcon className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-semibold">{category}</h2>
              <Badge variant="outline">
                {categoryAchievements.filter((a) => a.earned).length}/{categoryAchievements.length}
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryAchievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`transition-all duration-300 ${
                    achievement.earned
                      ? "bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-md"
                      : "hover:shadow-md"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          achievement.earned ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <achievement.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="outline" className={getRarityColor(achievement.rarity)}>
                          {achievement.rarity}
                        </Badge>
                        <div className="text-sm font-medium text-primary">+{achievement.points} pts</div>
                      </div>
                    </div>
                    <div>
                      <CardTitle className={achievement.earned ? "text-primary" : ""}>{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {achievement.earned ? (
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Trophy className="w-4 h-4" />
                        <span>Earned {achievement.earnedDate}</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.progress || 0}%</span>
                        </div>
                        <Progress value={achievement.progress || 0} className="h-2" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
