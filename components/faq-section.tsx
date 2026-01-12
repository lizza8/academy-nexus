"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle } from "lucide-react"

export function FAQSection() {
  const [activeItem, setActiveItem] = useState<string | undefined>(undefined)

  const faqs = [
    {
      question: "Do I need any prior experience to enroll?",
      answer:
        "Most of our courses are designed for beginners and require no prior experience. We start with fundamentals and gradually progress to advanced topics. For specialized courses, we clearly indicate any prerequisites in the course description.",
    },
    {
      question: "How long do I have access to course materials?",
      answer:
        "You get lifetime access to all course materials, including videos, code samples, and resources. You can learn at your own pace and revisit content anytime. We also provide free updates when course content is refreshed.",
    },
    {
      question: "What if I can't keep up with the schedule?",
      answer:
        "Our courses are self-paced with suggested timelines. You can take longer if needed without any penalties. We also offer catch-up sessions and have a supportive community to help you stay motivated and on track.",
    },
    {
      question: "Do you offer job placement assistance?",
      answer:
        "Yes! We provide comprehensive career support including resume reviews, portfolio development, interview preparation, and connections to our hiring partner network. 92% of our graduates report career advancement within 6 months.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason within the first 30 days, we'll provide a full refund, no questions asked. Your success and satisfaction are our top priorities.",
    },
    {
      question: "Are certificates provided upon completion?",
      answer:
        "Yes, you'll receive a verified certificate of completion that you can add to your LinkedIn profile and resume. Our certificates are recognized by employers and demonstrate your commitment to professional development.",
    },
    {
      question: "Can I switch courses after enrolling?",
      answer:
        "If you find another course better suits your goals, you can switch within the first two weeks. Contact our support team and we'll help you transition smoothly to a different learning path.",
    },
    {
      question: "What technical equipment do I need?",
      answer:
        "You'll need a computer (Windows, Mac, or Linux) with internet access. Specific software requirements are listed for each course, but most tools we use are free and open-source. We provide detailed setup guides to get you started.",
    },
  ]

  return (
    <section id="faq" className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-10 animate-float-slow" />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl opacity-10 animate-float-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-5xl md:text-7xl font-bold">
            {"Questions? "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift">
              {"We've Got Answers"}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {"Everything you need to know about courses, enrollment, and your learning journey."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Accordion type="single" collapsible value={activeItem} onValueChange={setActiveItem}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-panel border-2 border-border rounded-2xl px-6 mb-4 animate-reveal hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] data-[state=open]:border-primary data-[state=open]:neon-glow-blue"
                style={{ animationDelay: `${index * 0.05}s`, opacity: 0 }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text transition-all py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 p-10 rounded-3xl glass-panel border-2 border-primary/30 neon-glow-blue relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {"Still have questions?"}
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {
                  "Our admissions team is standing by to help you make the best decision for your career. Get personalized answers in under 24 hours."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent text-lg px-8 py-6 neon-glow-blue transition-all duration-300 hover:scale-110 group/btn"
                >
                  <Mail className="mr-2 h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                  {"Email Our Team"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-panel border-2 border-primary/50 hover:border-primary text-lg px-8 py-6 hover:bg-primary/10 transition-all duration-300 hover:scale-110 group/btn bg-transparent"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                  {"Live Chat"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
