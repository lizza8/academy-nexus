"use client"

import { useRef, useEffect, useState } from "react"
import { BookOpen, Code, Rocket, Trophy } from "lucide-react"

export function LearningJourneySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight
      const scrolled = Math.max(0, windowHeight - rect.top)
      const progress = Math.min(100, (scrolled / (sectionHeight + windowHeight)) * 200)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const steps = [
    {
      icon: BookOpen,
      title: "Discover & Enroll",
      description:
        "Browse our courses, watch previews, and choose your learning path. Get instant access to all materials.",
      color: "from-primary to-secondary",
    },
    {
      icon: Code,
      title: "Learn & Build",
      description: "Follow structured lessons, complete hands-on projects, and get feedback from expert mentors.",
      color: "from-secondary to-accent",
    },
    {
      icon: Rocket,
      title: "Apply & Launch",
      description: "Build your portfolio with real-world projects. Showcase your work to potential employers.",
      color: "from-accent to-primary",
    },
    {
      icon: Trophy,
      title: "Succeed & Grow",
      description: "Land your dream job with our placement support. Join our alumni network and keep advancing.",
      color: "from-primary to-accent",
    },
  ]

  return (
    <section ref={sectionRef} id="journey" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden lg:block">
        <div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-accent transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-7xl font-bold">
            {"Your "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
              {"Learning Journey"}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"From beginner to expert in four transformative steps. Your future starts here."}
          </p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 animate-reveal" style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}>
                <div className="glass-panel p-8 rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 group">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              <div className="relative flex items-center justify-center w-24 h-24 flex-shrink-0">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-2xl opacity-50 animate-pulse-glow`}
                />
                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-2xl`}
                >
                  {index + 1}
                </div>
              </div>

              <div className="flex-1 hidden lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
