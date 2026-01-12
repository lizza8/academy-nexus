"use client"

import { useEffect, useState } from "react"
import { CinematicIntro } from "@/components/cinematic-intro"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoursesSection } from "@/components/courses-section"
import { InstructorsSection } from "@/components/instructors-section"
import { LearningJourneySection } from "@/components/learning-journey-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AnalyticsSection } from "@/components/analytics-section"
import { EnrollmentSection } from "@/components/enrollment-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { Scene3D } from "@/components/3d-scene"

export default function Page() {
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
      setIntroComplete(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  if (showIntro) {
    return <CinematicIntro onSkip={() => setShowIntro(false)} />
  }

  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <Header />
      <main className={introComplete ? "animate-reveal" : ""}>
        <HeroSection />
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-5xl md:text-7xl font-bold">
                {"Experience "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
                  {"Interactive Learning"}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {
                  "Immerse yourself in cutting-edge 3D visualizations and interactive content that makes learning engaging and memorable."
                }
              </p>
            </div>
            <Scene3D />
          </div>
        </section>
        <CoursesSection />
        <InstructorsSection />
        <LearningJourneySection />
        <TestimonialsSection />
        <AnalyticsSection />
        <EnrollmentSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
