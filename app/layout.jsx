import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"

export const metadata = {
  title: "CareerGuide - One-Stop Career & Education Advisor",
  description:
    "Personalized career guidance platform for Class 9-12 students and parents. Find your perfect stream, college, and career path.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
