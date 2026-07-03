"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div className="space-y-4">
            <Link
              href="/portfolio"
              className="group flex flex-col leading-none"
            >
              <span className="text-xl font-extrabold tracking-tight">
                TheShahzaibDev
              </span>

              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                Building Modern Web Experiences
              </span>
            </Link>

            <p className="text-muted-foreground leading-7">
              Full-Stack MERN Developer passionate about building scalable,
              modern, and user-focused web applications.
            </p>

            <div className="flex items-center gap-2 text-sm text-emerald-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for Freelance & Full-Time
            </div>
          </div>

          {/* Navigation */}

          <div>
            <h4 className="mb-5 font-semibold">Navigation</h4>

            <div className="space-y-3  text-muted-foreground ">
              <Link href="/">Home</Link>

              <br />

              <Link href="/portfolio/about">About</Link>

              <br />

              <Link href="/portfolio/projects">Projects</Link>

              <br />

              <Link href="/portfolio/contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}

          <div>
            <h4 className="mb-5 font-semibold">Contact</h4>

            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />

                <span>theshahzaib.dev@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />

                <span>Pakistan • Remote</span>
              </div>
            </div>
          </div>

          {/* Social */}

          <div>
            <h4 className="mb-5 font-semibold">Connect</h4>

            <div className="space-y-4">
              <Link
                href="https://github.com/theshahzaib-dev"
                target="_blank"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Github className="h-5 w-5" />
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/theshahzaibdev/"
                target="_blank"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/50 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} TheShahzaibDev. All rights reserved.
          </p>

          <p>
            Designed & Developed with ❤️ using Next.js, Tailwind CSS &
            shadcn/ui.
          </p>
        </div>
      </div>
    </footer>
  );
}
