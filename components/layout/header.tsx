"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Code2,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname?.startsWith(href);
  };

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b border-border/60",
        "bg-background/80 backdrop-blur-xl",
        "supports-[backdrop-filter]:bg-background/65",
      )}
    >
      <div className="container mx-auto flex h-[72px] items-center justify-between px-5 sm:px-6">
        {/* ───────────────── Logo ───────────────── */}
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

        {/* ───────────────── Desktop Navigation ───────────────── */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium",
                  "transition-all duration-200",

                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : [
                        "text-muted-foreground",
                        "hover:bg-accent",
                        "hover:text-foreground",
                      ],
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ───────────────── Right Actions ───────────────── */}
        <div className="flex items-center gap-2">
          {/* Hire Me */}
          <Link
            href="/contact"
            className={cn(
              "group hidden items-center gap-2 rounded-full",
              "border border-primary/30",
              "bg-primary/5 px-5 py-2",
              "text-sm font-semibold text-primary",
              "transition-all duration-300",
              "hover:bg-primary hover:text-primary-foreground",
              "hover:shadow-md hover:shadow-primary/20",
              "md:inline-flex",
            )}
          >
            Hire Me

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          {/* Theme */}
          <div className="rounded-full border border-border/60 bg-background/60 p-0.5">
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center",
              "rounded-full border border-border/60",
              "text-muted-foreground",
              "transition-colors",
              "hover:bg-accent hover:text-foreground",
              "md:hidden",
            )}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-[18px] w-[18px]" />
            ) : (
              <Menu className="h-[18px] w-[18px]" />
            )}
          </button>
        </div>
      </div>

      {/* ───────────────── Mobile Menu ───────────────── */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 md:hidden",
          "bg-background/95 backdrop-blur-xl",
          "transition-all duration-300",
          open
            ? "max-h-[420px] opacity-100"
            : "max-h-0 border-transparent opacity-0",
        )}
      >
        <nav className="container mx-auto px-5 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl",
                    "px-4 py-3 text-sm font-medium",
                    "transition-all duration-200",

                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : [
                          "text-muted-foreground",
                          "hover:bg-accent",
                          "hover:text-foreground",
                        ],
                  )}
                >
                  <span>{link.label}</span>

                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                  )}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Hire Me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}