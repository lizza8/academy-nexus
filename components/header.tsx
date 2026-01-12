"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 glass-panel">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-50 animate-pulse-glow" />
              <span className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {"NEXUS"}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {["Courses", "Instructors", "Journey", "Stories", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(100,200,255,0.5)]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
              {"Sign In"}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent transition-all duration-300 neon-glow-blue"
            >
              {"Start Learning"}
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top">
            <nav className="flex flex-col gap-4">
              <a
                href="#courses"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(100,200,255,0.5)]"
              >
                Courses
              </a>
              <a
                href="#instructors"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(100,200,255,0.5)]"
              >
                Instructors
              </a>
              <a
                href="#journey"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(100,200,255,0.5)]"
              >
                Journey
              </a>
              <a
                href="#stories"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(100,200,255,0.5)]"
              >
                Success Stories
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(100,200,255,0.5)]"
              >
                FAQ
              </a>
              <Button variant="ghost" size="sm" className="justify-start hover:text-primary transition-colors">
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent transition-all duration-300 neon-glow-blue"
              >
                Start Learning
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
