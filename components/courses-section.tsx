"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, BarChart, CheckCircle2, ArrowRight } from "lucide-react"

export function CoursesSection() {
  const courses = [
    {
      title: "Full-Stack Web Development",
      description: "Master React, Node.js, and modern web technologies from scratch to deployment.",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      benefits: ["Build 10+ real projects", "Career mentorship included", "Job placement support"],
      gradient: "from-primary via-secondary to-primary",
    },
    {
      title: "Data Science & Machine Learning",
      description: "Learn Python, AI/ML algorithms, and data analysis for real-world applications.",
      duration: "20 weeks",
      level: "Intermediate",
      benefits: ["Industry datasets", "Kaggle competition prep", "Certificate upon completion"],
      gradient: "from-secondary via-accent to-secondary",
    },
    {
      title: "UI/UX Design Masterclass",
      description: "Create beautiful, user-centered designs with Figma and modern design principles.",
      duration: "12 weeks",
      level: "Beginner Friendly",
      benefits: ["Portfolio-ready projects", "Design system creation", "Client project simulation"],
      gradient: "from-accent via-primary to-accent",
    },
    {
      title: "Digital Marketing & SEO",
      description: "Master content marketing, SEO strategies, and social media growth tactics.",
      duration: "10 weeks",
      level: "All Levels",
      benefits: ["Real campaign experience", "Analytics mastery", "Growth hacking techniques"],
      gradient: "from-primary via-accent to-primary",
    },
    {
      title: "Cloud Computing & DevOps",
      description: "Deploy and manage applications with AWS, Docker, and Kubernetes.",
      duration: "14 weeks",
      level: "Intermediate",
      benefits: ["AWS certification prep", "Hands-on labs", "Production deployment"],
      gradient: "from-secondary via-primary to-secondary",
    },
    {
      title: "Mobile App Development",
      description: "Build native iOS and Android apps with React Native and modern frameworks.",
      duration: "18 weeks",
      level: "Beginner to Advanced",
      benefits: ["App Store publishing", "Cross-platform mastery", "Real user feedback"],
      gradient: "from-accent via-secondary to-accent",
    },
  ]

  return (
    <section id="courses" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
              {"Choose Your Path"}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {
              "Industry-vetted curriculum designed by experts. Start with fundamentals or advance your skills with specialized courses."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CourseCard({ course, index }: { course: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateY(((x - centerX) / centerX) * 10)
    setRotateX(((centerY - y) / centerY) * 10)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      ref={cardRef}
      className="card-3d group animate-reveal"
      style={{
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.3s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="h-full glass-panel border-2 border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient-shift`}
        />

        <CardHeader className="relative z-10">
          <CardTitle className="text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
            {course.title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">{course.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 relative z-10">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              {course.duration}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BarChart className="h-4 w-4 text-secondary" />
              {course.level}
            </div>
          </div>

          <div className="space-y-3">
            {course.benefits.map((benefit: string, i: number) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent group-hover:scale-105 transition-all duration-300 group/btn">
            {"Learn More"}
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
