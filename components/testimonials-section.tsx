"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Alex Martinez",
      role: "Software Engineer at Google",
      content:
        "NEXUS transformed my career completely. I went from knowing basic HTML to landing my dream job at Google in just 8 months. The instructors are phenomenal and the curriculum is industry-relevant.",
      rating: 5,
      course: "Full-Stack Development",
      initials: "AM",
      color: "from-purple-500 to-blue-500",
    },
    {
      name: "Priya Sharma",
      role: "Data Scientist at Microsoft",
      content:
        "The Data Science course exceeded my expectations. Real-world projects, hands-on mentorship, and career support made all the difference. I tripled my salary!",
      rating: 5,
      course: "Data Science & ML",
      initials: "PS",
      color: "from-cyan-500 to-purple-500",
    },
    {
      name: "David Kim",
      role: "Senior UX Designer at Apple",
      content:
        "As someone transitioning careers, I needed structured learning with expert guidance. NEXUS provided exactly that. The portfolio I built helped me land interviews at top companies.",
      rating: 5,
      course: "UI/UX Design",
      initials: "DK",
      color: "from-pink-500 to-orange-500",
    },
    {
      name: "Sarah Johnson",
      role: "DevOps Engineer at Amazon",
      content:
        "The Cloud Computing course gave me practical skills I use daily. From zero cloud knowledge to managing production infrastructure at Amazon - incredible journey!",
      rating: 5,
      course: "Cloud & DevOps",
      initials: "SJ",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Mohammed Al-Rashid",
      role: "Marketing Director at Startup",
      content:
        "The Digital Marketing course is comprehensive and actionable. I grew our startup from 0 to 50K users in 6 months. The ROI has been astronomical!",
      rating: 5,
      course: "Digital Marketing",
      initials: "MA",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Lisa Chen",
      role: "Mobile App Developer at Meta",
      content:
        "Building mobile apps seemed daunting until I took this course. Now I'm shipping features to millions of users at Meta!",
      rating: 5,
      course: "Mobile Development",
      initials: "LC",
      color: "from-orange-500 to-red-500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="stories" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100"
            stroke="url(#curveGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line"
          />
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="oklch(0.65 0.25 280)" />
              <stop offset="50%" stopColor="oklch(0.6 0.25 200)" />
              <stop offset="100%" stopColor="oklch(0.7 0.28 310)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-7xl font-bold">
            {"Success "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
              {"Stories"}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"Join thousands who transformed their careers. Your success story could be next."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`group glass-panel border-2 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-reveal ${
                activeIndex === index ? "border-primary neon-glow-blue" : "border-border hover:border-secondary/50"
              }`}
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary animate-pulse-glow"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  {'"'}
                  {testimonial.content}
                  {'"'}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity`}
                    />
                    <div
                      className={`relative h-14 w-14 rounded-full bg-gradient-to-br ${testimonial.color} ring-2 ring-primary/20 group-hover:ring-4 group-hover:ring-primary/40 transition-all flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium mt-1">{testimonial.course}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
