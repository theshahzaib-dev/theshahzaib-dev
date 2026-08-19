"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    href: "https://github.com/theshahzaib-dev",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/theshahzaibdev/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-background">
      {/* Background glow */}

      <div className="container relative mx-auto px-5 sm:px-6">
        <div className="border-b border-border/50 py-12">
          {/* ───────────────── Main Footer ───────────────── */}

          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr] lg:gap-12">
            {/* Brand */}

            <div className="max-w-sm">
              <Link
                href="/"
                className="group flex items-center gap-3"
                aria-label="TheShahzaibDev Home"
              >
                {/* Logo Mark */}
                <div
                  className={cn(
                    "relative flex h-10 w-10 items-center justify-center",
                    "overflow-hidden rounded-xl",
                    "bg-gradient-to-r  from-cyan-500 to-blue-600 text-white",
                    "shadow-md shadow-primary/20",
                    "transition-all duration-300",
                    "group-hover:scale-105 group-hover:shadow-lg",
                    "group-hover:shadow-primary/30",
                  )}
                >
                  MS
                  {/* Shine */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </div>

                {/* Brand */}
                <div className="hidden leading-none sm:block">
                  <span className="block text-[17px] font-extrabold tracking-tight text-primary">
                    TheShahzaib
                    <span className="text-accent">Dev</span>
                  </span>

                  <span className="mt-1 block text-[10px] font-medium tracking-wide text-muted-foreground">
                    Building Modern Web Experiences
                  </span>
                </div>
              </Link>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Full-Stack MERN Developer focused on building scalable, modern,
                and user-focused web applications.
              </p>

              {/* Availability */}

              <div
                className="
                mt-5 inline-flex items-center gap-2
                rounded-full
                border border-emerald-500/20
                bg-emerald-500/5
                px-3 py-1.5
                text-xs font-medium
                text-emerald-500
              "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for opportunities
              </div>
            </div>

            {/* Navigation */}

            <div>
              <h3 className="mb-5 text-sm font-semibold">Navigation</h3>

              <nav className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
                    w-fit
                    text-sm text-muted-foreground
                    transition-colors duration-200
                    hover:text-primary
                  "
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}

            <div>
              <h3 className="mb-5 text-sm font-semibold">Get In Touch</h3>

              <div className="space-y-4">
                <a
                  href="mailto:theshahzaib.dev@gmail.com"
                  className="
                  group flex items-start gap-3
                  text-sm text-muted-foreground
                  transition-colors
                  hover:text-primary
                "
                >
                  <span
                    className="
                    mt-0.5 flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-lg
                    border border-border/60
                    bg-background
                    transition-colors
                    group-hover:border-primary/30
                    group-hover:bg-primary/5
                  "
                  >
                    <Mail className="h-4 w-4" />
                  </span>

                  <span className="break-all pt-1">
                    theshahzaib.dev@gmail.com
                  </span>
                </a>

                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span
                    className="
                    mt-0.5 flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-lg
                    border border-border/60
                    bg-background
                  "
                  >
                    <MapPin className="h-4 w-4" />
                  </span>

                  <span className="pt-1">
                    Pakistan
                    <span className="mx-1.5 text-border">•</span>
                    Remote
                  </span>
                </div>
              </div>
            </div>

            {/* Connect */}

            <div>
              <h3 className="mb-5 text-sm font-semibold">Connect</h3>

              <div className="flex flex-col gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      group flex items-center justify-between
                      rounded-xl
                      border border-border/60
                      bg-background/50
                      px-3 py-2.5
                      text-sm text-muted-foreground
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:border-primary/30
                      hover:bg-primary/5
                      hover:text-primary
                    "
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4" />

                        {social.label}
                      </span>

                      <ArrowUpRight
                        className="
                        h-4 w-4
                        transition-transform duration-200
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ───────────────── Bottom Bar ───────────────── */}

          <div
            className="
            flex flex-col gap-3
            border-t border-border/50
            py-6
            text-xs text-muted-foreground
            sm:flex-row sm:items-center sm:justify-between
          "
          >
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-foreground">
                TheShahzaibDev
              </span>
              . All rights reserved.
            </p>

            <p className="text-left sm:text-right">
              Designed & Developed with <span className="text-red-500">♥</span>{" "}
              using <span className="text-foreground">Next.js</span>,{" "}
              <span className="text-foreground">Tailwind CSS</span> &{" "}
              <span className="text-foreground">shadcn/ui</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
