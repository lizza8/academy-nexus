"use client"

import { useEffect, useState, useRef } from "react"
import { Users, GraduationCap, Briefcase, TrendingUp, Target, Award, Globe, Zap } from "lucide-react"

export function AnalyticsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const progress = Math.max(0, Math.min(1, 1 - rect.top / viewportHeight))
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainStats = [
    { icon: Users, label: "Active Students", value: 50000, suffix: "+", color: "from-primary to-secondary" },
    {
      icon: GraduationCap,
      label: "Courses Completed",
      value: 125000,
      suffix: "+",
      color: "from-secondary to-accent",
    },
    { icon: Briefcase, label: "Career Placements", value: 42000, suffix: "+", color: "from-accent to-primary" },
    { icon: TrendingUp, label: "Avg Salary Increase", value: 65, suffix: "%", color: "from-primary to-accent" },
  ]

  const additionalStats = [
    { icon: Target, label: "Course Completion Rate", value: 94, suffix: "%" },
    { icon: Award, label: "Industry Certifications", value: 28000, suffix: "+" },
    { icon: Globe, label: "Countries Reached", value: 142, suffix: "" },
    { icon: Zap, label: "Student Satisfaction", value: 98, suffix: "%" },
  ]

  return (
    <section ref={sectionRef} className="py-40 relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 transition-transform duration-1000"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.65 0.25 280) 2px, transparent 2px), linear-gradient(90deg, oklch(0.65 0.25 280) 2px, transparent 2px)",
            backgroundSize: "60px 60px",
            transform: `translateY(${scrollProgress * 50}px)`,
          }}
        />
      </div>

      <div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse-glow"
        style={{ transform: `translateY(${scrollProgress * -100}px)` }}
      />
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl opacity-30 animate-pulse-glow"
        style={{ animationDelay: "1s", transform: `translateY(${scrollProgress * 80}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-6xl md:text-8xl font-bold">
            {"Impact By The "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
              {"Numbers"}
            </span>
          </h2>
          <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {"Real results from real students. Join thousands transforming their careers daily."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainStats.map((stat, index) => (
            <MainStatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-12 border-2 border-border mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {"Excellence Metrics"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalStats.map((stat, index) => (
              <SecondaryStatCard key={index} stat={stat} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full glass-panel neon-glow-blue">
            <Zap className="h-6 w-6 text-accent animate-pulse" />
            <span className="text-lg font-medium">
              {"Join "}
              <span className="text-primary font-bold">{"1,000+ students"}</span>
              {" who enrolled this week"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function MainStatCard({ stat, index, isVisible }: { stat: any; index: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2500
    const steps = 80
    const increment = stat.value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, stat.value])

  return (
    <div
      className="glass-panel p-10 rounded-3xl border-2 border-border hover:border-primary transition-all duration-500 hover:scale-110 hover:-rotate-2 group relative overflow-hidden animate-count-up cursor-pointer"
      style={{ animationDelay: `${index * 0.15}s`, opacity: isVisible ? 1 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-30 transition-all duration-500 blur-2xl scale-150`}
      />

      <div className="relative z-10 space-y-6">
        <div className="relative inline-flex">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
          />
          <div
            className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-transform duration-300`}
          >
            <stat.icon className="h-10 w-10 text-white" />
          </div>
        </div>

        <div
          className={`text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
        >
          {count.toLocaleString()}
          {stat.suffix}
        </div>

        <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>

        <div className="h-1 bg-border rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000`}
            style={{ width: isVisible ? "100%" : "0%" }}
          />
        </div>
      </div>
    </div>
  )
}

function SecondaryStatCard({ stat, index, isVisible }: { stat: any; index: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, stat.value])

  return (
    <div
      className="space-y-4 animate-reveal"
      style={{ animationDelay: `${index * 0.1 + 0.5}s`, opacity: isVisible ? 1 : 0 }}
    >
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
          <stat.icon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="text-3xl font-bold text-foreground">
            {count.toLocaleString()}
            {stat.suffix}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      </div>
      <div className="relative w-full h-2 bg-border rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000"
          style={{ width: isVisible ? `${(count / stat.value) * 100}%` : "0%" }}
        />
      </div>
    </div>
  )
}
