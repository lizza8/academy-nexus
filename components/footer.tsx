"use client"

import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, Youtube, Zap } from "lucide-react"

export function Footer() {
  const socialIcons = [
    { Icon: Facebook, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Youtube, href: "#" },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 border-t border-border/50">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-shift" />
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-10 animate-float-slow" />
      <div
        className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl opacity-10 animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-50 animate-pulse-glow" />
                <span className="relative text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {"NEXUS"}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md text-lg">
              {
                "Empowering the next generation of tech leaders with cutting-edge education, elite mentorship, and unstoppable career support."
              }
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="h-12 w-12 rounded-full glass-panel border-2 border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground mb-6 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              {"Popular Courses"}
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              {["Web Development", "Data Science", "UI/UX Design", "Digital Marketing", "Cloud Computing"].map(
                (course, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {course}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground mb-6">{"Resources"}</h3>
            <ul className="space-y-3 text-muted-foreground">
              {["Blog", "Success Stories", "Free Workshops", "Career Guide", "Community"].map((resource, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-secondary transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground mb-6">{"Company"}</h3>
            <ul className="space-y-3 text-muted-foreground">
              {["About Us", "Instructors", "Partnerships", "Careers", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-12 space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-xl glass-panel border-2 border-border group-hover:border-primary/50 transition-all duration-300">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">{"Headquarters"}</div>
                <div className="text-sm text-muted-foreground">{"123 Tech Street, San Francisco, CA 94105"}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-xl glass-panel border-2 border-border group-hover:border-secondary/50 transition-all duration-300">
                <Mail className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">{"Email"}</div>
                <div className="text-sm text-muted-foreground">{"hello@nexusacademy.com"}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="p-3 rounded-xl glass-panel border-2 border-border group-hover:border-accent/50 transition-all duration-300">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">{"Phone"}</div>
                <div className="text-sm text-muted-foreground">{"+1 (555) 123-4567"}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground pt-8">
            <div className="flex items-center gap-2">
              <span>{"© 2026 NEXUS Academy. All rights reserved."}</span>
              <span className="hidden md:inline">{"•"}</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
                {"Built for Tomorrow's Leaders"}
              </span>
            </div>
            <div className="flex gap-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, i) => (
                <a key={i} href="#" className="hover:text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
