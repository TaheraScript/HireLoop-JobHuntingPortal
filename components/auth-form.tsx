"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export type AuthMode = "sign-in" | "sign-up"

export type UserRole = "seeker" | "recruiter" | "admin"

export type AuthFormData = {
  name?: string
  email: string
  password: string
  role?: UserRole
}

const roles: { value: UserRole; label: string }[] = [
  { value: "seeker", label: "Job Seeker" },
  { value: "recruiter", label: "Recruiter" },
  { value: "admin", label: "Admin" },
]

const copy = {
  "sign-in": {
    title: "Welcome back",
    subtitle: "Sign in to continue finding your next opportunity.",
    submit: "Sign In",
    switchText: "Don't have an account?",
    switchLabel: "Sign up",
    switchHref: "/sign-up",
  },
  "sign-up": {
    title: "Create your account",
    subtitle: "Join HireLoop and start discovering curated jobs.",
    submit: "Create Account",
    switchText: "Already have an account?",
    switchLabel: "Sign in",
    switchHref: "/sign-in",
  },
} satisfies Record<AuthMode, Record<string, string>>

const inputClassName =
  "h-11 rounded-lg border-[#2b2b30] bg-[#0b0b0d] px-3 text-[15px] text-white placeholder:text-[#6f6f78] focus-visible:border-[#5b4bf5] focus-visible:ring-[#5b4bf5]/20"

export function AuthForm({
  mode,
  onSubmit,
}: {
  mode: AuthMode
  // Return an error message string on failure, or nothing on success.
  onSubmit?: (data: AuthFormData) => Promise<string | void>
}) {
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)
  const content = copy[mode]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "")
    const email = String(formData.get("email") ?? "")
    const password = String(formData.get("password") ?? "")
    const confirmPassword = String(formData.get("confirmPassword") ?? "")
    const role = String(formData.get("role") ?? "seeker") as UserRole

    if (mode === "sign-up" && password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setLoading(true)
    try {
      const message = await onSubmit?.({ name, email, password, role })
      if (message) setError(message)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative isolate flex min-h-[calc(100svh-145px)] items-center justify-center overflow-hidden bg-[#08080a] px-4 py-16 sm:px-6 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_40%,rgba(91,75,245,0.12),transparent_70%)]"
      />

      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-2xl border border-[#26262c] bg-[#101012]/95 p-6 shadow-[0_30px_100px_-40px_rgba(91,75,245,0.45)] sm:p-8">
          <div className="mb-7 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {content.title}
            </h1>
            <p className="mt-2 text-sm text-[#a1a1aa]">{content.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "sign-up" && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[#d4d4d8]">
                  Full name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  required
                  className={inputClassName}
                />
              </div>
            )}

            {mode === "sign-up" && (
              <fieldset className="space-y-2">
                <legend className="mb-2 text-sm leading-none font-medium text-[#d4d4d8]">
                  I am a
                </legend>
                <div className="grid grid-cols-3 gap-2">
                  {roles.map((role) => (
                    <label key={role.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        value={role.value}
                        defaultChecked={role.value === "seeker"}
                        className="peer sr-only"
                      />
                      <span className="flex h-11 items-center justify-center rounded-lg border border-[#2b2b30] bg-[#0b0b0d] text-sm font-medium text-[#a1a1aa] transition-colors peer-checked:border-[#5b4bf5] peer-checked:bg-[#5b4bf5]/10 peer-checked:text-white peer-focus-visible:ring-3 peer-focus-visible:ring-[#5b4bf5]/20 hover:border-[#3a3a42]">
                        {role.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#d4d4d8]">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className={inputClassName}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#d4d4d8]">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete={
                  mode === "sign-in" ? "current-password" : "new-password"
                }
                placeholder="••••••••"
                minLength={8}
                required
                className={inputClassName}
              />
            </div>

            {mode === "sign-up" && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#d4d4d8]">
                  Confirm password
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  minLength={8}
                  required
                  className={inputClassName}
                />
              </div>
            )}

            {error && (
              <p role="alert" className="text-sm text-[#f87171]">
                {error}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-[10px] bg-[#5b4bf5] text-[15px] font-medium text-white hover:bg-[#4f41e0] disabled:opacity-60"
            >
              {loading ? "Please wait..." : content.submit}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[#8a8a93]">
            {content.switchText}{" "}
            <Link
              href={content.switchHref}
              className="font-medium text-[#8b7cff] transition-colors hover:text-[#a89dff]"
            >
              {content.switchLabel}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}