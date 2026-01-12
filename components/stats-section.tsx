import { TrendingUp, Users, Award, BookOpen } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Students Enrolled",
      color: "text-primary",
    },
    {
      icon: BookOpen,
      value: "150+",
      label: "Expert Courses",
      color: "text-accent",
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      value: "92%",
      label: "Career Growth",
      color: "text-primary",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3 animate-in fade-in zoom-in duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center">
                <div className={`h-16 w-16 rounded-2xl bg-background flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
