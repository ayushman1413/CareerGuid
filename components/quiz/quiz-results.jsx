"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, RefreshCw, Download, Share, BookOpen, MapPin } from "lucide-react"
import Link from "next/link"

export function QuizResults({ results, onRetake }) {
  const handleSaveResults = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    const updatedUser = {
      ...user,
      quizResults: results,
      lastQuizDate: new Date().toISOString(),
    }
    localStorage.setItem("user", JSON.stringify(updatedUser))
  }

  const getScoreColor = (score) => {
    if (score >= 8) return "bg-green-500"
    if (score >= 5) return "bg-yellow-500"
    return "bg-gray-400"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Career Assessment Results</h1>
          <p className="text-xl text-muted-foreground">
            Based on your responses, here are your personalized career recommendations
          </p>
        </div>

        {/* Top Recommendations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Career Matches</h2>
          <div className="grid gap-6">
            {results.recommendations.map((career, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl flex items-center gap-2">
                        {career.title}
                        <Badge variant="secondary">#{index + 1} Match</Badge>
                      </CardTitle>
                      <CardDescription className="text-base mt-2">{career.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Average Salary</div>
                      <div className="text-lg font-semibold">{career.salary}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Growth Outlook</div>
                      <div className="text-lg font-semibold">{career.growth}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">Education Level</div>
                      <div className="text-lg font-semibold">{career.education}</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Key Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {career.skills?.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href="/colleges">
                        <MapPin className="w-4 h-4 mr-2" />
                        Find Colleges
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/advisor">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interest Scores */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Your Interest Profile</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {Object.entries(results.scores)
                  .sort(([, a], [, b]) => b - a)
                  .map(([category, score]) => (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium capitalize">{category.replace("_", " ")}</span>
                        <span className="text-sm text-muted-foreground">{score}/10</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={(score / 10) * 100} className="flex-1" />
                        <div className={`w-3 h-3 rounded-full ${getScoreColor(score)}`}></div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleSaveResults} size="lg">
            <Download className="w-5 h-5 mr-2" />
            Save Results
          </Button>
          <Button variant="outline" size="lg">
            <Share className="w-5 h-5 mr-2" />
            Share Results
          </Button>
          <Button variant="outline" onClick={onRetake} size="lg">
            <RefreshCw className="w-5 h-5 mr-2" />
            Retake Quiz
          </Button>
        </div>
      </div>
    </div>
  )
}
