"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { UserMenu } from "@/components/auth/user-menu"
import { Menu, X, Home, User, BookOpen, MapPin, MessageCircle, Trophy, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const user = localStorage.getItem("user")
    setIsAuthenticated(!!user)
  }, [])

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/quiz", label: "Career Quiz", icon: BookOpen },
    { href: "/colleges", label: "Find Colleges", icon: MapPin },
    { href: "/advisor", label: "AI Advisor", icon: MessageCircle },
    { href: "/dashboard", label: "Dashboard", icon: User },
    { href: "/achievements", label: "Achievements", icon: Trophy },
  ]

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">CareerGuide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & Auth */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <Button asChild>
                <Link href="/auth">Sign In</Link>
              </Button>
            )}

            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
