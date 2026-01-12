import { Card } from "@/components/ui/card"
import { BookOpen, Code, Users, Trophy } from "lucide-react"

export function LearningProcessSection() {
  const steps = [
    {
      icon: BookOpen,
      title: "Learn Fundamentals",
      description:
        "Start with structured lessons covering core concepts. Watch expert-led videos and read comprehensive guides at your own pace.",
      color: "text-primary bg-primary/10",
    },
    {
      icon: Code,
      title: "Build Real Projects",
      description:
        "Apply your knowledge immediately with hands-on projects. Get instant feedback and iterate until you master each skill.",
      color: "text-accent bg-accent/10",
    },
    {
      icon: Users,
      title: "Get Expert Feedback",
      description:
        "Receive personalized code reviews and mentorship from instructors. Join live Q&A sessions and collaborate with peers.",
      color: "text-secondary bg-secondary/10",
    },
    {
      icon: Trophy,
      title: "Launch Your Career",
      description:
        "Build an impressive portfolio, ace technical interviews, and land your dream job with our career support team.",
      color: "text-primary bg-primary/10",
    },
  ]

  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            Your Journey to <span className="text-secondary">Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Our proven learning methodology combines structured curriculum, hands-on practice, and personalized
            mentorship to ensure you achieve your goals.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6 space-y-4">
                  <div className="relative">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} group-hover:scale-110 transition-transform`}
                    >
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-foreground font-medium">Learning Support</div>
            <div className="text-sm text-muted-foreground mt-2">
              Get help whenever you need it with our community and AI assistant
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">Live</div>
            <div className="text-foreground font-medium">Weekly Sessions</div>
            <div className="text-sm text-muted-foreground mt-2">
              Join interactive workshops and Q&A with expert instructors
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <div className="text-4xl font-bold text-secondary mb-2">∞</div>
            <div className="text-foreground font-medium">Lifetime Access</div>
            <div className="text-sm text-muted-foreground mt-2">All course materials and updates included forever</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
