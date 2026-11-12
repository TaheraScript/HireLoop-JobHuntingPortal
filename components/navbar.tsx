"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="bg-[#131313] px-4 pt-[38px] pb-[19px] sm:px-6 lg:px-[49px]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[88px] w-full items-center justify-between rounded-[14px] bg-[#1c1c1c] pr-[10px] pl-4 sm:pl-[34px]"
      >
        <Link href="/" aria-label="hireloop home">
          <Image
            src="/logo.png"
            alt="hireloop"
            width={154}
            height={44}
            priority
            className="h-9 w-auto sm:h-[42px]"
          />
        </Link>

        <div className="flex items-center">
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] font-medium text-[#d4d4d4] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <span
            aria-hidden="true"
            className="ml-3 mr-9 hidden h-[22px] w-px bg-[#3a3a3a] lg:block"
          />

          <Link
            href="/sign-in"
            className="hidden text-[16px] font-medium text-[#7b6cff] transition-colors hover:text-[#9a8dff] lg:block"
          >
            Sign In
          </Link>

          <Link
            href="/get-started"
            className={cn(
              buttonVariants(),
              "ml-4 hidden h-10 rounded-[10px] bg-[#5b4bf5] px-4 text-sm font-medium text-white hover:bg-[#4f41e0] sm:ml-8 sm:h-[50px] sm:px-6 sm:text-[16px] lg:inline-flex"
            )}
          >
            Get Started
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="size-10 text-[#d4d4d4] hover:bg-white/10 hover:text-white lg:hidden"
                />
              }
            >
              <MenuIcon className="size-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="border-[#2a2a2a] bg-[#1c1c1c] text-white"
            >
              <SheetHeader className="flex-row items-center justify-between border-b border-[#2a2a2a] p-6">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <Image
                  src="/logo.png"
                  alt="hireloop"
                  width={154}
                  height={44}
                  className="h-9 w-auto"
                />
                <SheetClose
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Close navigation menu"
                      className="text-[#d4d4d4] hover:bg-white/10 hover:text-white"
                    />
                  }
                >
                  <XIcon className="size-6" />
                </SheetClose>
              </SheetHeader>

              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-[#d4d4d4] transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <SheetFooter className="mt-auto gap-3 border-t border-[#2a2a2a] p-6">
                <Link
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-11 w-full text-base font-medium text-[#7b6cff] hover:bg-white/5 hover:text-[#9a8dff]"
                  )}
                >
                  Sign In
                </Link>
                <Link
                  href="/get-started"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),
                    "h-11 w-full rounded-[10px] bg-[#5b4bf5] text-base font-medium text-white hover:bg-[#4f41e0]"
                  )}
                >
                  Get Started
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
