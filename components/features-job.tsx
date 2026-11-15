import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Bookmark,
  FileText,
  LineChart,
  Search,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Search,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: LineChart,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: BarChart3,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: Bookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: Sparkles,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Target,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: TrendingUp,
  },
]

export function FeaturesJob() {
  return (
    <section className="bg-[#08080a] pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-[2px] bg-[#6d5efc]"
            />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8a8a93] uppercase sm:text-[11px]">
              Features Job
            </span>
            <span
              aria-hidden="true"
              className="size-1.5 rounded-[2px] bg-[#6d5efc]"
            />
          </div>

          <h2 className="mt-5 max-w-[620px] text-[30px] leading-[1.12] font-medium tracking-[-0.02em] text-white sm:text-[38px] lg:text-[48px]">
            Everything you need
            <br className="hidden sm:block" /> to succeed
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <li key={title} className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-[#1b1b1e] shadow-[0_16px_26px_-16px_rgba(255,255,255,0.25)] lg:size-[52px]">
                <Icon
                  className="size-5 text-[#e4e4e7]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>

              <div className="min-w-0">
                <h3 className="text-[15px] leading-snug font-medium tracking-[-0.01em] text-[#f4f4f5]">
                  {title}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.5] text-[#8a8a93]">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
