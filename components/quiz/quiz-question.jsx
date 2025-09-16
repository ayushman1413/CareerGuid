"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft } from "lucide-react"

export function QuizQuestion({ question, currentQuestion, totalQuestions, onAnswer, onPrevious, canGoPrevious }) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-balance">{question.question}</CardTitle>
            {question.description && <CardDescription className="text-base">{question.description}</CardDescription>}
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 text-left justify-start hover:bg-primary/5 hover:border-primary transition-colors bg-transparent"
                  onClick={() => onAnswer(question.id, index)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-muted-foreground flex items-center justify-center text-xs font-medium mt-0.5">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{option.text}</div>
                      {option.description && (
                        <div className="text-sm text-muted-foreground mt-1">{option.description}</div>
                      )}
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={onPrevious} disabled={!canGoPrevious}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <div className="text-sm text-muted-foreground flex items-center">Select an answer to continue</div>
        </div>
      </div>
    </div>
  )
}
