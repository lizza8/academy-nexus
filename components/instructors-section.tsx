"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Users, TrendingUp, Sparkles, Code, Brain, Cpu } from "lucide-react"

export function InstructorsSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const instructors = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Data Science Instructor",
      expertise: ["Machine Learning", "AI", "Python"],
      bio: "Former Google ML Engineer with 12+ years experience. Published researcher in neural networks.",
      students: "15,000+",
      rating: 4.9,
      courses: 12,
      completionRate: 94,
      color: "from-primary to-secondary",
      icon: Brain,
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Development Expert",
      expertise: ["React", "Node.js", "Cloud"],
      bio: "Ex-Meta Senior Engineer. Built systems serving 100M+ users. Passionate about teaching.",
      students: "22,000+",
      rating: 4.8,
      courses: 18,
      completionRate: 96,
      color: "from-secondary to-accent",
      icon: Code,
    },
    {
      name: "Emily Thompson",
      role: "Senior UX Design Mentor",
      expertise: ["UI/UX", "Figma", "Design Systems"],
      bio: "Award-winning designer from Apple. Led design for products used by millions globally.",
      students: "18,000+",
      rating: 5.0,
      courses: 15,
      completionRate: 98,
      color: "from-accent to-primary",
      icon: Sparkles,
    },
    {
      name: "James Park",
      role: "DevOps & Cloud Architect",
      expertise: ["AWS", "Docker", "Kubernetes"],
      bio: "20+ years in cloud infrastructure. Built platforms at Amazon and Microsoft.",
      students: "12,000+",
      rating: 4.9,
      courses: 10,
      completionRate: 92,
      color: "from-primary via-accent to-secondary",
      icon: Cpu,
    },
    {
      name: "Aisha Patel",
      role: "Blockchain & Web3 Pioneer",
      expertise: ["Solidity", "Ethereum", "DeFi"],
      bio: "Early blockchain adopter. Built decentralized apps with millions in transaction volume.",
      students: "9,500+",
      rating: 4.7,
      courses: 8,
      completionRate: 90,
      color: "from-secondary via-primary to-accent",
      icon: Code,
    },
    {
      name: "Chen Wei",
      role: "Mobile Development Lead",
      expertise: ["React Native", "iOS", "Android"],
      bio: "Created top-10 apps in app stores. Expert in cross-platform mobile architecture.",
      students: "16,500+",
      rating: 4.9,
      courses: 14,
      completionRate: 95,
      color: "from-accent via-secondary to-primary",
      icon: Brain,
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      const progress = Math.max(0, Math.min(1, 1 - sectionTop / (windowHeight + sectionHeight)))
      setScrollProgress(progress)

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".mentor-card")
        cards.forEach((card, index) => {
          const element = card as HTMLElement
          const speed = 0.3 + index * 0.08
          const yOffset = (1 - progress) * 150 * speed
          const rotateEffect = (1 - progress) * 15
          element.style.transform = `translateY(${yOffset}px) scale(${0.85 + progress * 0.15}) rotateX(${rotateEffect}deg)`
          element.style.opacity = `${Math.max(0.2, progress * 1.2)}`
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="instructors"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-20 animate-float-slow" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl opacity-20 animate-float-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl opacity-15 animate-float-slow"
          style={{ animationDelay: "4s" }}
        />

        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-2xl animate-float-slow"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `radial-gradient(circle, ${["var(--primary)", "var(--secondary)", "var(--accent)"][i % 3]} 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.15,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 relative">
          <div className="h-2 w-full bg-border/20 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 relative"
              style={{ width: `${scrollProgress * 100}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse" />
            </div>
          </div>
          <div
            className="absolute -top-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent shadow-2xl shadow-primary/50 transition-all duration-300"
            style={{ left: `calc(${scrollProgress * 100}% - 12px)` }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-ping opacity-50" />
          </div>
        </div>

        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-7xl font-bold">
            {"Learn From "}
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient-shift">
              {"Elite Mentors"}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"Our instructors are industry legends from top tech companies, ready to transform you into an expert."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Users, label: "Total Students", value: "93K+", color: "from-primary to-secondary" },
            { icon: BookOpen, label: "Courses Taught", value: "77+", color: "from-secondary to-accent" },
            { icon: Award, label: "Industry Awards", value: "42+", color: "from-accent to-primary" },
            { icon: TrendingUp, label: "Avg Rating", value: "4.9", color: "from-primary to-accent" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-panel p-6 rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-500 group"
              style={{
                opacity: 0,
                animation: `reveal 0.8s ease-out ${index * 0.1}s forwards`,
              }}
            >
              <stat.icon className={`h-8 w-8 mb-3 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
              <div className="text-3xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-primary group-hover:to-accent transition-all">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card
                key={index}
                className="mentor-card group glass-panel border-2 border-border hover:border-primary/50 transition-all duration-700 hover:scale-105 card-3d relative overflow-hidden"
                style={{
                  opacity: 0,
                  transform: "translateY(100px)",
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  const centerX = rect.width / 2
                  const centerY = rect.height / 2
                  const rotateX = (y - centerY) / 10
                  const rotateY = (centerX - x) / 10
                  e.currentTarget.style.setProperty("--rotate-x", `${rotateX}deg`)
                  e.currentTarget.style.setProperty("--rotate-y", `${rotateY}deg`)
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty("--rotate-x", "0deg")
                  e.currentTarget.style.setProperty("--rotate-y", "0deg")
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-br-2xl" />

                <CardContent className="p-6 space-y-4 relative z-10">
                  <div className="relative overflow-hidden rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-500 glass-panel border-2 border-border">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${instructor.color} opacity-20 animate-gradient-shift`}
                    />
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <instructor.icon className="h-16 w-16 text-primary animate-float" />
                      <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        {instructor.name}
                      </h3>
                    </div>
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-float"
                          style={{
                            left: `${15 + i * 12}%`,
                            top: `${20 + i * 8}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: `${2 + i * 0.5}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">{instructor.role}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs glass-panel hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{instructor.bio}</p>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Course Completion</span>
                      <span className="text-foreground font-medium">{instructor.completionRate}%</span>
                    </div>
                    <div className="h-2 w-full bg-border/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 group-hover:animate-pulse-glow"
                        style={{
                          width: `${instructor.completionRate}%`,
                          transitionDelay: `${index * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        {instructor.students}
                      </div>
                      <div className="text-sm text-accent flex items-center gap-2">
                        <span>{"⭐"}</span>
                        {instructor.rating}
                        <span className="text-muted-foreground">
                          {"• "}
                          {instructor.courses}
                          {" courses"}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="glass-panel p-12 rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-500 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {"Ready to Learn from the Best?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {"Join thousands of students who have transformed their careers with guidance from industry experts."}
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300">
              {"Browse All Instructors"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
