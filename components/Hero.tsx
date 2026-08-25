"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/data/data";

interface HeroProps {
  sectionVariant: any;
}

const Hero = ({ sectionVariant }: HeroProps) => {
  const jobTitles = [
    personalInfo.role,
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Full Stack Developer",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const currentTitle = jobTitles[titleIndex];

    let timeout:any;

    if (phase === "typing") {
      if (displayedTitle.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayedTitle(
            currentTitle.slice(0, displayedTitle.length + 1)
          );
        }, 90);
      } else {
        timeout = setTimeout(() => {
          setPhase("pausing");
        }, 1800);
      }
    }

    if (phase === "pausing") {
      timeout = setTimeout(() => {
        setPhase("deleting");
      }, 100);
    }

    if (phase === "deleting") {
      if (displayedTitle.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedTitle(
            currentTitle.slice(0, displayedTitle.length - 1)
          );
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % jobTitles.length);
          setPhase("typing");
        }, 300);
      }
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [displayedTitle, phase, titleIndex, jobTitles]);

  return (
    <motion.section
      className="relative grid items-center gap-16 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-16"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      {/* =====================================================
          LEFT
      ====================================================== */}

      <div className="space-y-8">
        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            inline-flex items-center gap-2
            rounded-full
            border border-emerald-500/20
            bg-emerald-500/5
            px-4 py-2
            text-sm font-medium
            text-emerald-500
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>

          Available for Full-Time • Freelance • Remote
        </motion.div>

        {/* Heading */}
        <div className="space-y-5">
          <p className="text-lg font-medium text-muted-foreground">
            Hi, I&apos;m
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {personalInfo.firstName}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {personalInfo.lastName}
            </span>
          </h1>

          {/* =================================================
              Animated Job Title
          ================================================== */}

          <div className="flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-primary" />

            <h2
              className="
                min-h-[30px]
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-indigo-500
                bg-clip-text
                text-xl
                font-bold
                text-transparent
                sm:min-h-[36px]
                sm:text-2xl
              "
              aria-live="polite"
            >
              {displayedTitle}
              <span
                className="
                  ml-1
                  inline-block
                  animate-pulse
                  text-primary
                "
              >
                |
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I build scalable, high-performance web applications using React,
            Next.js, Node.js, Express, and MongoDB. My focus is creating
            products that are fast, responsive, accessible, and enjoyable to
            use.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="
              group rounded-full
              px-7
              shadow-lg shadow-primary/20
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-xl hover:shadow-primary/25
            "
          >
            <Link href="/projects">
              Explore Projects

              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="
              group rounded-full
              border-border/70
              px-7
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-primary/40
              hover:bg-primary/5
            "
          >
            <Link
              href="/assets/docs/resume.pdf"
              download="Muhammad Shahzaib Resume.pdf"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          <span className="mr-1 text-sm text-muted-foreground">
            Find me on
          </span>

          <SocialLink
            href={personalInfo.github}
            label="GitHub"
            icon={<Github className="h-4 w-4" />}
          />

          <SocialLink
            href={personalInfo.linkedin}
            label="LinkedIn"
            icon={<Linkedin className="h-4 w-4" />}
          />

          <SocialLink
            href={`mailto:${personalInfo.email}`}
            label="Email"
            icon={<Mail className="h-4 w-4" />}
          />
        </div>
      </div>

      {/* =====================================================
          RIGHT
      ====================================================== */}

      <motion.div
        className="relative flex justify-center lg:justify-center"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {/* Outer glow */}
        <div className="absolute h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative">
          {/* Profile container */}
          <div
            className="
              relative
              h-[320px] w-[320px]
              overflow-hidden
              rounded-[2rem]
              border border-primary/20
              bg-gradient-to-br
              from-primary/10
              via-background
              to-cyan-500/10
              shadow-2xl
              shadow-primary/10
              sm:h-[380px] sm:w-[380px]
            "
          >
            {/* Image */}
            <img
              src="/assets/images/profile.webp"
              alt="Shahzaib Balouch"
              className="h-full w-full object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />

            {/* Corner decoration */}
            <div
              className="
                absolute right-5 top-5
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-white/20
                bg-background/50
                backdrop-blur-md
              "
            >
              <Sparkles className="h-5 w-5 text-cyan-400" />
            </div>
          </div>

          {/* =================================================
              Floating Stats
          ================================================== */}

          <FloatingCard
            className="-left-8 top-10 sm:-left-12"
            value="6+"
            label="Projects"
          />

          <FloatingCard
            className="-right-8 bottom-16 sm:-right-12"
            value="8+"
            label="Technologies"
          />

          {/* Bottom badge */}
          <div
            className="
              absolute
              -bottom-5 left-1/2
              -translate-x-1/2
              whitespace-nowrap
              rounded-2xl
              border border-border/70
              bg-background/90
              px-5 py-3
              shadow-xl
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-sm font-semibold">
                MERN Stack Developer
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

/* =========================================================
   Floating Card
========================================================= */

interface FloatingCardProps {
  className?: string;
  value: string;
  label: string;
}

function FloatingCard({
  className,
  value,
  label,
}: FloatingCardProps) {
  return (
    <div
      className={`
        absolute z-20
        rounded-2xl
        border border-border/70
        bg-background/85
        px-4 py-3
        shadow-xl
        backdrop-blur-xl
        ${className ?? ""}
      `}
    >
      <p className="text-2xl font-bold text-primary">
        {value}
      </p>

      <p className="text-xs text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   Social Link
========================================================= */

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

function SocialLink({
  href,
  label,
  icon,
}: SocialLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full
        border border-border/70
        bg-background/50
        text-muted-foreground
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-primary/30
        hover:bg-primary/5
        hover:text-primary
      "
    >
      {icon}
    </Link>
  );
}

export default Hero;