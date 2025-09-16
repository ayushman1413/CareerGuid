"use client"

import { useState, useEffect } from "react"
import { ChatInterface } from "@/components/advisor/chat-interface"
import { ChatSidebar } from "@/components/advisor/chat-sidebar"
import { QuickActions } from "@/components/advisor/quick-actions"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Sparkles } from "lucide-react"

export default function AdvisorPage() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [chatStarted, setChatStarted] = useState(false)

  const initialMessage = {
    id: "welcome",
    type: "ai",
    content:
      "Hello! I'm your AI Career Advisor. I'm here to help you explore career paths, understand different fields, and make informed decisions about your future. What would you like to know about?",
    timestamp: new Date(),
    suggestions: [
      "What career suits my interests?",
      "Tell me about engineering careers",
      "How do I choose between science and commerce?",
      "What are high-paying career options?",
    ],
  }

  useEffect(() => {
    if (!chatStarted) {
      setMessages([initialMessage])
      setChatStarted(true)
    }
  }, [chatStarted])

  const handleSendMessage = async (content) => {
    const userMessage = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content)
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: aiResponse.content,
        timestamp: new Date(),
        suggestions: aiResponse.suggestions,
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase()

    if (input.includes("engineering") || input.includes("engineer")) {
      return {
        content:
          "Engineering is a fantastic field with diverse opportunities! There are many branches like Computer Science, Mechanical, Electrical, Civil, and more. Each has unique career paths:\n\n• **Computer Science Engineering**: Software development, AI/ML, cybersecurity\n• **Mechanical Engineering**: Automotive, aerospace, manufacturing\n• **Electrical Engineering**: Power systems, electronics, telecommunications\n\nWhat specific aspect of engineering interests you most?",
        suggestions: [
          "Tell me about computer science careers",
          "What's the scope in mechanical engineering?",
          "Which engineering has best placements?",
          "How to prepare for engineering entrance exams?",
        ],
      }
    }

    if (input.includes("science") && input.includes("commerce")) {
      return {
        content:
          "Great question! Both Science and Commerce offer excellent career opportunities:\n\n**Science Stream:**\n• Medical careers (Doctor, Nurse, Pharmacist)\n• Engineering and Technology\n• Research and Development\n• Teaching and Academia\n\n**Commerce Stream:**\n• Business and Management\n• Finance and Banking\n• Accounting and Auditing\n• Entrepreneurship\n\nConsider your interests: Do you enjoy problem-solving and experiments (Science) or business and numbers (Commerce)?",
        suggestions: [
          "What are the job prospects in science?",
          "Tell me about commerce career options",
          "Can I switch streams later?",
          "Which stream has better salary potential?",
        ],
      }
    }

    if (input.includes("salary") || input.includes("pay") || input.includes("money")) {
      return {
        content:
          "Here are some high-paying career options across different fields:\n\n**Technology & Engineering:**\n• Software Engineer: ₹8-25 LPA\n• Data Scientist: ₹10-30 LPA\n• AI/ML Engineer: ₹12-35 LPA\n\n**Medical & Healthcare:**\n• Doctor (Specialist): ₹15-50 LPA\n• Pharmacist: ₹6-15 LPA\n\n**Business & Finance:**\n• Investment Banker: ₹12-40 LPA\n• Management Consultant: ₹15-35 LPA\n\nRemember, salary depends on skills, experience, and location. What field interests you most?",
        suggestions: [
          "How to increase earning potential?",
          "What skills are most valuable?",
          "Tell me about startup opportunities",
          "Which cities offer best salaries?",
        ],
      }
    }

    if (input.includes("interest") || input.includes("suitable") || input.includes("right")) {
      return {
        content:
          "Finding the right career is about understanding yourself! Here's how to discover what suits you:\n\n**Self-Assessment:**\n• Take our career quiz for personalized recommendations\n• Identify your strengths and interests\n• Consider your values and lifestyle preferences\n\n**Exploration:**\n• Research different career paths\n• Talk to professionals in fields you're considering\n• Try internships or volunteer work\n\nHave you taken our career assessment quiz yet? It's a great starting point!",
        suggestions: [
          "Take me to the career quiz",
          "How do I identify my strengths?",
          "What if I have multiple interests?",
          "Tell me about career exploration methods",
        ],
      }
    }

    // Default response
    return {
      content:
        "That's an interesting question! I'd be happy to help you explore that further. Could you provide more specific details about what you'd like to know? I can assist with:\n\n• Career exploration and recommendations\n• Educational pathways and requirements\n• Skill development guidance\n• College and course selection\n• Industry insights and trends\n\nWhat specific aspect would you like to dive deeper into?",
      suggestions: [
        "Tell me about different career fields",
        "How do I choose the right college?",
        "What skills should I develop?",
        "Show me career growth paths",
      ],
    }
  }

  const handleQuickAction = (action) => {
    handleSendMessage(action)
  }

  if (!chatStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ChatSidebar />
          </div>

          {/* Main Chat */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      AI Career Advisor
                      <Sparkles className="w-4 h-4 text-primary" />
                    </CardTitle>
                    <CardDescription>Your personalized career guidance assistant</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <ChatInterface
                messages={messages}
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
                onSuggestionClick={handleQuickAction}
              />
            </Card>

            {/* Quick Actions */}
            <div className="mt-6">
              <QuickActions onActionClick={handleQuickAction} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
