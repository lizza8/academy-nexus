"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Sparkles, Zap } from "lucide-react"

export function EnrollmentSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="enroll" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-3xl opacity-20 animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-reveal" style={{ opacity: 0, animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel neon-glow-magenta animate-pulse-glow">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {"Limited Spots - Join The Elite"}
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              {"Start Your "}
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-gradient-shift">
                {"Epic Journey"}
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {
                "Transform your future in the next 24 hours. Our admissions team will craft a personalized learning path just for you."
              }
            </p>

            <div className="space-y-4">
              {[
                "Personalized learning path consultation",
                "Instant access to course preview materials",
                "Early bird discount - Save $500",
                "Free career assessment & roadmap",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl glass-panel hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent to-primary">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl glass-panel border-2 border-accent/50 neon-glow-magenta relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {"$500"}
                  </div>
                  <div className="text-2xl text-muted-foreground line-through">{"$1,000"}</div>
                </div>
                <div className="text-lg text-foreground font-medium mb-1">{"Early Enrollment Discount"}</div>
                <div className="text-muted-foreground">{"Limited time offer - Only 12 spots left!"}</div>
              </div>
            </div>
          </div>

          <Card
            className="glass-panel border-2 border-border hover:border-primary/50 shadow-2xl animate-reveal relative overflow-hidden"
            style={{ opacity: 0, animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <CardHeader className="relative z-10">
              <CardTitle className="text-3xl md:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {"Enroll Now"}
              </CardTitle>
              <CardDescription className="text-base">
                {"Join the next cohort and start learning with industry legends"}
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-6 animate-in fade-in zoom-in">
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-50 animate-pulse-glow" />
                    <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {"Application Received!"}
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-md mx-auto">
                    {"We'll reach out within 24 hours to discuss your personalized learning journey. Check your email!"}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">
                        {"First Name"}
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className={`glass-panel border-2 transition-all duration-300 ${focusedField === "firstName" ? "border-primary neon-glow-blue" : "border-border"}`}
                        onFocus={() => setFocusedField("firstName")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        {"Last Name"}
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className={`glass-panel border-2 transition-all duration-300 ${focusedField === "lastName" ? "border-primary neon-glow-blue" : "border-border"}`}
                        onFocus={() => setFocusedField("lastName")}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      {"Email Address"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className={`glass-panel border-2 transition-all duration-300 ${focusedField === "email" ? "border-primary neon-glow-blue" : "border-border"}`}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      {"Phone Number"}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className={`glass-panel border-2 transition-all duration-300 ${focusedField === "phone" ? "border-primary neon-glow-blue" : "border-border"}`}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course" className="text-foreground">
                      {"Interested Course"}
                    </Label>
                    <Select>
                      <SelectTrigger id="course" className="glass-panel border-2 border-border">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fullstack">{"Full-Stack Web Development"}</SelectItem>
                        <SelectItem value="datascience">{"Data Science & Machine Learning"}</SelectItem>
                        <SelectItem value="uiux">{"UI/UX Design Masterclass"}</SelectItem>
                        <SelectItem value="marketing">{"Digital Marketing & SEO"}</SelectItem>
                        <SelectItem value="cloud">{"Cloud Computing & DevOps"}</SelectItem>
                        <SelectItem value="mobile">{"Mobile App Development"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-foreground">
                      {"Current Experience Level"}
                    </Label>
                    <Select>
                      <SelectTrigger id="experience" className="glass-panel border-2 border-border">
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">{"Complete Beginner"}</SelectItem>
                        <SelectItem value="some">{"Some Experience"}</SelectItem>
                        <SelectItem value="intermediate">{"Intermediate"}</SelectItem>
                        <SelectItem value="advanced">{"Advanced"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      {"What are your learning goals?"}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your career aspirations and what you hope to achieve..."
                      rows={4}
                      className={`glass-panel border-2 transition-all duration-300 ${focusedField === "message" ? "border-primary neon-glow-blue" : "border-border"}`}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-accent via-primary to-secondary hover:from-primary hover:to-accent text-lg py-7 neon-glow-magenta transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Sparkles className="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                      {"Submit Application"}
                    </span>
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    {"By submitting, you agree to receive communications about our courses. We respect your privacy."}
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
