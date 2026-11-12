import Image from "next/image"
import Link from "next/link"
import {
  Briefcase,
  BriefcaseBusiness,
  Building2,
  MapPin,
  Search,
  Star,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "DevOps Engineer",
]

const stats = [
  { icon: Briefcase, value: "50K", label: "Active Jobs" },
  { icon: Building2, value: "12K", label: "Companies" },
  { icon: Users, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

const starField = [
  "radial-gradient(1px 1px at 8% 28%, rgba(165, 180, 252, 0.8), transparent)",
  "radial-gradient(1px 1px at 14% 46%, rgba(129, 140, 248, 0.55), transparent)",
  "radial-gradient(1.5px 1.5px at 19% 32%, rgba(199, 210, 254, 0.75), transparent)",
  "radial-gradient(1px 1px at 24% 55%, rgba(129, 140, 248, 0.5), transparent)",
  "radial-gradient(1px 1px at 29% 38%, rgba(199, 210, 254, 0.65), transparent)",
  "radial-gradient(1.5px 1.5px at 34% 24%, rgba(165, 180, 252, 0.7), transparent)",
  "radial-gradient(1px 1px at 42% 44%, rgba(129, 140, 248, 0.45), transparent)",
  "radial-gradient(1px 1px at 55% 30%, rgba(199, 210, 254, 0.6), transparent)",
  "radial-gradient(1.5px 1.5px at 63% 47%, rgba(165, 180, 252, 0.7), transparent)",
  "radial-gradient(1px 1px at 69% 35%, rgba(129, 140, 248, 0.55), transparent)",
  "radial-gradient(1px 1px at 74% 52%, rgba(199, 210, 254, 0.6), transparent)",
  "radial-gradient(1.5px 1.5px at 79% 29%, rgba(165, 180, 252, 0.75), transparent)",
  "radial-gradient(1px 1px at 84% 44%, rgba(129, 140, 248, 0.5), transparent)",
  "radial-gradient(1px 1px at 89% 31%, rgba(199, 210, 254, 0.7), transparent)",
  "radial-gradient(1.5px 1.5px at 94% 49%, rgba(165, 180, 252, 0.6), transparent)",
].join(",")

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#08080a] pb-10 pt-20 sm:pt-28 lg:pt-[138px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] opacity-70"
        style={{ backgroundImage: starField }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_60%_55%_at_50%_35%,rgba(91,75,245,0.08),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-4 sm:px-6">
        <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#3a3a42] sm:w-20" />
          <div className="flex items-center gap-2 rounded-full border border-[#26262c] bg-[#101013] px-3 py-1.5 sm:px-4">
            <BriefcaseBusiness className="size-3.5 shrink-0 text-[#f97316]" />
            <span className="text-[10px] font-semibold tracking-[0.08em] text-[#f97316] sm:text-[11px]">
              50,000+
            </span>
            <span className="text-[10px] font-medium tracking-[0.08em] text-[#d4d4d8] sm:text-[11px]">
              NEW JOBS THIS MONTH
            </span>
          </div>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#3a3a42] sm:w-20" />
        </div>

        <h1 className="mt-7 max-w-[900px] text-center text-[38px] leading-[1.08] font-bold tracking-[-0.03em] text-white sm:text-[52px] lg:text-[64px]">
          Find Your Dream Job Today
        </h1>

        <p className="mt-5 max-w-[660px] text-center text-[14px] leading-relaxed text-[#a1a1aa] sm:text-base lg:text-[18px]">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        <form
          action="/jobs"
          role="search"
          className="mt-10 flex w-full max-w-[760px] flex-col gap-2 rounded-2xl border border-[#2b2b30] bg-[#141416] p-2 shadow-[0_24px_80px_-40px_rgba(91,75,245,0.55)] transition-colors focus-within:border-[#5b4bf5]/60 sm:mt-12 sm:h-[60px] sm:flex-row sm:items-center sm:gap-0 sm:rounded-[14px] sm:p-1.5"
        >
          <label className="flex min-w-0 flex-1 items-center gap-3 px-3 sm:px-4">
            <Search className="size-5 shrink-0 text-[#8a8a93]" strokeWidth={1.8} />
            <input
              type="text"
              name="q"
              placeholder="Job title, skill or company"
              aria-label="Job title, skill or company"
              className="h-11 w-full min-w-0 bg-transparent text-[15px] text-white outline-none placeholder:text-[#8a8a93]"
            />
          </label>

          <span
            aria-hidden="true"
            className="hidden h-8 w-px shrink-0 bg-[#33333a] sm:block"
          />

          <label className="flex min-w-0 flex-1 items-center gap-3 px-3 sm:px-4">
            <MapPin className="size-5 shrink-0 text-[#8a8a93]" strokeWidth={1.8} />
            <input
              type="text"
              name="location"
              placeholder="Location or Remote"
              aria-label="Location or Remote"
              className="h-11 w-full min-w-0 bg-transparent text-[15px] text-white outline-none placeholder:text-[#8a8a93]"
            />
          </label>

          <Button
            type="submit"
            size="icon"
            aria-label="Search jobs"
            className="h-11 w-full shrink-0 rounded-[10px] bg-[#5b4bf5] text-white hover:bg-[#4f41e0] sm:size-11"
          >
            <Search className="size-5" strokeWidth={2} />
          </Button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-[#8a8a93]">Trending Position</span>
          {trendingPositions.map((position) => (
            <Link
              key={position}
              href={`/jobs?q=${encodeURIComponent(position)}`}
              className="rounded-full border border-[#2f2f36] bg-[#141416] px-3.5 py-1.5 text-xs text-[#d4d4d8] transition-colors hover:border-[#5b4bf5]/70 hover:text-white"
            >
              {position}
            </Link>
          ))}
        </div>
      </div>

      <div className="relative mt-10 w-full sm:mt-12 lg:mt-16">
        <Image
          src="/globe-hero.png"
          alt=""
          aria-hidden="true"
          width={1440}
          height={1032}
          priority
          className="pointer-events-none absolute top-0 left-1/2 w-[135%] max-w-none -translate-x-1/2 select-none [mask-image:linear-gradient(to_bottom,transparent,black_18%)] sm:w-[120%] lg:w-[108%] xl:w-full"
        />

        <div className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-center px-4 pt-[190px] sm:px-6 sm:pt-[280px] lg:pt-[320px]">
          <p className="max-w-[660px] text-center text-[22px] leading-[1.3] font-medium text-[#e7e2ff] sm:text-[30px] lg:text-[40px]">
            Assisting over 15,000 job seekers
            <br className="hidden sm:block" /> find their dream positions.
          </p>

          <div className="mt-8 grid w-full grid-cols-2 gap-4 pb-12 sm:mt-10 sm:pb-16 lg:mt-14 lg:grid-cols-4 lg:gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <article
                key={label}
                className="flex min-h-[190px] flex-col justify-between rounded-xl border border-[#2a2a2f] bg-[#111113]/95 p-5 backdrop-blur-sm sm:min-h-[220px] sm:p-6 lg:min-h-[240px]"
              >
                <Icon
                  className="size-5 text-[#d4d4d8]"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[36px] leading-none font-semibold tracking-tight text-white sm:text-[44px] lg:text-[48px]">
                    {value}
                  </p>
                  <p className="mt-2 text-xs text-[#a1a1aa] sm:text-sm">
                    {label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
