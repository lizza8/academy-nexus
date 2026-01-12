"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Rocket, Zap, Globe } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
    }> = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: ["#7c3aed", "#06b6d4", "#ec4899", "#8b5cf6"][Math.floor(Math.random() * 4)],
      })
    }

    let animationId: number

    const animate = () => {
      ctx.fillStyle = "rgba(20, 20, 30, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(124, 58, 237, ${(100 - distance) / 200})`
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-20"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, oklch(0.15 0.15 280), oklch(0.08 0.01 280))`,
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50" />

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute w-96 h-96 border-2 border-primary/40 rounded-full"
          style={{
            left: `${30 + mousePosition.x * 0.1}%`,
            top: `${20 + mousePosition.y * 0.1 - scrollY * 0.1}%`,
            transform: `scale(${1 + scrollY * 0.001}) rotate(${scrollY * 0.2}deg)`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-64 h-64 border-2 border-secondary/40 rotate-45"
          style={{
            right: `${20 + mousePosition.x * 0.05}%`,
            top: `${40 + mousePosition.y * 0.08 - scrollY * 0.15}%`,
            transform: `scale(${1 + scrollY * 0.0015}) rotate(${45 + scrollY * 0.3}deg)`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-80 h-80 border-2 border-accent/40"
          style={{
            left: `${50 + mousePosition.x * 0.08}%`,
            bottom: `${15 - scrollY * 0.12}%`,
            transform: `scale(${1 + scrollY * 0.0012}) rotate(${scrollY * 0.25}deg)`,
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl animate-float-slow"
          style={{
            left: `${mousePosition.x * 0.5}%`,
            top: `${mousePosition.y * 0.5}%`,
            transform: `translateY(${-scrollY * 0.3}px)`,
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "2s", transform: `translateY(${-scrollY * 0.4}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl animate-rotate-slow"
          style={{ transform: `translate(-50%, -50%) translateY(${-scrollY * 0.2}px)` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="absolute inset-0 pointer-events-none">
            <Rocket
              className="absolute text-primary animate-float-slow"
              size={48}
              style={{ left: "10%", top: "20%", opacity: 0.3 }}
            />
            <Zap
              className="absolute text-secondary animate-float"
              size={40}
              style={{ right: "15%", top: "30%", opacity: 0.4, animationDelay: "1s" }}
            />
            <Globe
              className="absolute text-accent animate-float-slow"
              size={56}
              style={{ left: "80%", bottom: "25%", opacity: 0.3, animationDelay: "2s" }}
            />
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel neon-glow-blue animate-pulse-glow">
            <Sparkles className="h-5 w-5 text-primary animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-sm font-medium bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {"Join 50,000+ Elite Students Worldwide"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            {["Transform", "Your", "Future"].map((word, i) => (
              <span
                key={i}
                className="inline-block animate-stagger-text mx-2"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0,
                  transform: `perspective(500px) rotateX(${scrollY * 0.05}deg)`,
                }}
              >
                {word}
              </span>
            ))}
            <br />
            <span
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift animate-stagger-text"
              style={{ animationDelay: "0.6s", opacity: 0 }}
            >
              {"Master Tomorrow's Skills"}
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-reveal"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            {
              "Join the next generation of tech leaders. Learn from industry experts, build real projects, and land your dream career with our cutting-edge courses."
            }
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-reveal"
            style={{ animationDelay: "1s", opacity: 0 }}
          >
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent neon-glow-blue transition-all duration-300 hover:scale-110 group relative overflow-hidden"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`)
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`)
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {"Explore Courses"}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-accent to-primary blur-xl" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 glass-panel border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 bg-transparent"
            >
              {"Watch Demo"}
            </Button>
          </div>

          <div className="pt-12 animate-reveal" style={{ animationDelay: "1.2s", opacity: 0 }}>
            <div className="inline-flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-sm">{"Scroll to discover"}</span>
              <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2 relative overflow-hidden">
                <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
                <div className="absolute inset-0 bg-primary/20 blur-md animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rounded-lg animate-float-slow rotate-12"
          style={{ transform: `translateY(${-scrollY * 0.4}px) rotate(${scrollY * 0.1}deg)` }}
        />
        <div
          className="absolute top-40 right-20 w-16 h-16 border-2 border-secondary/30 rounded-full animate-float"
          style={{ animationDelay: "1s", transform: `translateY(${-scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-accent/30 rounded-lg animate-float-slow -rotate-12"
          style={{ animationDelay: "2s", transform: `translateY(${-scrollY * 0.3}px) rotate(${-scrollY * 0.15}deg)` }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full blur-xl animate-float opacity-50"
          style={{ animationDelay: "3s" }}
        />
      </div>
    </section>
  )
}
