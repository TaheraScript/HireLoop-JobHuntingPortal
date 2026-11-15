import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"

const jobs = [
  {
    id: "frontend-developer-1",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workplace: "Hybrid",
    salary: "£25–£40/hour",
  },
  {
    id: "frontend-developer-2",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workplace: "Hybrid",
    salary: "£25–£40/hour",
  },
  {
    id: "frontend-developer-3",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workplace: "Hybrid",
    salary: "£25–£40/hour",
  },
  {
    id: "frontend-developer-4",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workplace: "Hybrid",
    salary: "£25–£40/hour",
  },
  {
    id: "frontend-developer-5",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workplace: "Hybrid",
    salary: "£25–£40/hour",
  },
  {
    id: "frontend-developer-6",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workplace: "Hybrid",
    salary: "£25–£40/hour",
  },
]

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-[#26262a] px-3 py-1.5 text-[12px] font-medium text-[#d4d4d8] xl:text-[13px]">
      <span
        aria-hidden="true"
        className="size-1.5 shrink-0 rounded-full bg-[#8b5cf6]"
      />
      {children}
    </span>
  )
}

export function SmartJobDiscovery() {
  return (
    <section className="bg-[#08080a] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2.5">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-[2px] bg-[#6d5efc]"
            />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8a8a93] uppercase sm:text-[11px]">
              Smart Job Discovery
            </span>
            <span
              aria-hidden="true"
              className="size-1.5 rounded-[2px] bg-[#6d5efc]"
            />
          </div>

          <h2 className="mt-5 max-w-[620px] text-[30px] leading-[1.12] font-medium tracking-[-0.02em] text-white sm:text-[38px] lg:text-[48px]">
            The roles you&apos;d never
            <br className="hidden sm:block" /> find by searching
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="flex h-full flex-col rounded-2xl border border-white/[0.04] bg-[#1b1b1e] p-6 xl:p-8"
            >
              <h3 className="text-[24px] leading-tight font-medium tracking-[-0.01em] text-[#f4f4f5] xl:text-[30px]">
                {job.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.6] text-[#8a8a93] xl:mt-4 xl:text-[15px]">
                {job.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 xl:mt-6">
                <Tag>{job.location}</Tag>
                <Tag>{job.workplace}</Tag>
              </div>

              <div className="mt-2 flex flex-wrap gap-2 xl:mt-2.5">
                <Tag>{job.salary}</Tag>
              </div>

              <div className="mt-auto pt-7 xl:pt-9">
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-[#f4f4f5] transition-colors hover:text-[#b9a8ff] xl:text-[14px]"
                >
                  Apply Now
                  <ArrowRight
                    className="size-4 shrink-0"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/jobs"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[13px] font-medium text-[#0a0a0a] transition-colors hover:bg-[#e6e6e8] sm:h-12 sm:px-8 sm:text-sm"
          >
            View all job open
          </Link>
        </div>
      </div>
    </section>
  )
}
