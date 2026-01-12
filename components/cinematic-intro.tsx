"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface CinematicIntroProps {
  onSkip: () => void
}

export function CinematicIntro({ onSkip }: CinematicIntroProps) {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2500),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated line */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="url(#neonGradient)"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset={stage >= 1 ? 0 : 1000}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.65 0.25 280)" />
            <stop offset="50%" stopColor="oklch(0.7 0.22 200)" />
            <stop offset="100%" stopColor="oklch(0.7 0.28 310)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Academy name reveal */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
          {stage >= 2 && (
            <>
              {"NEXUS".split("").map((letter, i) => (
                <span
                  key={i}
                  className="inline-block animate-stagger-text"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    opacity: 0,
                    background:
                      "linear-gradient(135deg, oklch(0.65 0.25 280), oklch(0.7 0.22 200), oklch(0.7 0.28 310))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {letter}
                </span>
              ))}
            </>
          )}
        </h1>
        {stage >= 3 && (
          <p className="text-xl md:text-2xl text-muted-foreground animate-reveal">{"Academy of Tomorrow"}</p>
        )}
      </div>

      {/* Skip button */}
      <Button
        variant="ghost"
        className="absolute bottom-8 right-8 text-muted-foreground hover:text-foreground"
        onClick={onSkip}
      >
        {"Skip Intro →"}
      </Button>
    </div>
  )
}
