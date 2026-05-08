import { Shield, Clock, Award, Star } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully certified technicians",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Fast response times",
  },
  {
    icon: Award,
    title: "90-Day Warranty",
    description: "On all repairs",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Trusted by thousands",
  },
]

export function TrustBadges() {
  return (
    <section className="bg-primary text-primary-foreground py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10">
                <badge.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">{badge.title}</p>
                <p className="text-sm text-primary-foreground/70">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
