"use client"

import { useState } from "react"
import { QuizIntro } from "@/components/quiz/quiz-intro"
import { QuizQuestion } from "@/components/quiz/quiz-question"
import { QuizResults } from "@/components/quiz/quiz-results"
import { quizData } from "@/lib/quiz-data"

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState("intro") // intro, quiz, results
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)

  const handleStartQuiz = () => {
    setCurrentStep("quiz")
    setCurrentQuestion(0)
    setAnswers({})
  }

  const handleAnswer = (questionId, answer) => {
    const newAnswers = { ...answers, [questionId]: answer }
    setAnswers(newAnswers)

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calculate results
      const calculatedResults = calculateResults(newAnswers)
      setResults(calculatedResults)
      setCurrentStep("results")
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleRetakeQuiz = () => {
    setCurrentStep("intro")
    setCurrentQuestion(0)
    setAnswers({})
    setResults(null)
  }

  const calculateResults = (userAnswers) => {
    const categories = {
      science: 0,
      technology: 0,
      arts: 0,
      business: 0,
      social: 0,
      healthcare: 0,
    }

    // Calculate scores based on answers
    Object.entries(userAnswers).forEach(([questionId, answer]) => {
      const question = quizData.questions.find((q) => q.id === questionId)
      if (question && question.options[answer]) {
        const option = question.options[answer]
        if (option.categories) {
          option.categories.forEach((category) => {
            categories[category] = (categories[category] || 0) + 1
          })
        }
      }
    })

    // Find top categories
    const sortedCategories = Object.entries(categories)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)

    // Get recommendations based on top categories
    const recommendations = sortedCategories.map(([category]) => {
      return quizData.careerPaths[category] || { title: category, description: "Explore this field further" }
    })

    return {
      topCategories: sortedCategories,
      recommendations,
      scores: categories,
    }
  }

  if (currentStep === "intro") {
    return <QuizIntro onStart={handleStartQuiz} />
  }

  if (currentStep === "quiz") {
    return (
      <QuizQuestion
        question={quizData.questions[currentQuestion]}
        currentQuestion={currentQuestion}
        totalQuestions={quizData.questions.length}
        onAnswer={handleAnswer}
        onPrevious={handlePrevious}
        canGoPrevious={currentQuestion > 0}
      />
    )
  }

  if (currentStep === "results") {
    return <QuizResults results={results} onRetake={handleRetakeQuiz} />
  }

  return null
}
