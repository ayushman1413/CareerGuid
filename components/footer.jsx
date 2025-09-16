import Link from "next/link"
import { BookOpen, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">CareerGuide</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering students and parents with personalized career guidance, college recommendations, and skill
              development pathways for a brighter future.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>ayushman1413@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>8887340368</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quiz" className="text-muted-foreground hover:text-foreground transition-colors">
                  Career Assessment
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="text-muted-foreground hover:text-foreground transition-colors">
                  Find Colleges
                </Link>
              </li>
              <li>
                <Link href="/advisor" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Career Advisor
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="text-muted-foreground hover:text-foreground transition-colors">
                  Scholarships
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Career Blog
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-muted-foreground hover:text-foreground transition-colors">
                  Study Guides
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 CareerGuide. All rights reserved. Built to empower the next generation.</p>
           <p>developed by Ayushman.</p>
        </div>
      </div>
    </footer>
  )
}
