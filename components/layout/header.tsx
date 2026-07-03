"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/portfolio", label: "Home" },
  { href: "/portfolio/about", label: "About" },
  { href: "/portfolio/projects", label: "Projects" },
  { href: "/portfolio/skills", label: "Skills" },
  { href: "/portfolio/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const isActive = (href: string) => {
    if (href === "/portfolio") {
      return pathname === "/portfolio";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 flex h-16 items-center justify-between gap-4">
        {/* Left: logo + desktop nav */}
        <div className="flex items-center gap-6">
          <Link href="/portfolio" className="group flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight">
              TheShahzaibDev
            </span>

            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
              Building Modern Web Experiences
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors rounded-full px-3 pt-1 pb-2",
                  isActive(link.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: theme + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/portfolio/contact"
            className="hidden rounded-full hover:bg-primary outline-1 text-primary px-5 py-2 text-sm font-medium hover:text-primary-foreground transition hover:scale-105 md:inline-flex"
          >
            Hire Me
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground md:hidden cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background/95 md:hidden">
          <div className="container py-3 flex flex-col gap-1 px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
