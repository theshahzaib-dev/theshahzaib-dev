import React from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/data";

interface HeroProps {
  sectionVariant: any;
}

const Hero = ({ sectionVariant }: HeroProps) => {
  return (
    <motion.section
      className="grid items-center gap-14 lg:grid-cols-2"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Left Side */}
      <div className="space-y-8">
        <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
          🚀 Available for Full-Time • Freelance • Remote
        </span>

        <div className="space-y-4">
          <h2 className="text-xl text-muted-foreground">Hi, I'm</h2>

          <h1 className="text-3xl font-extrabold leading-tight lg:text-5xl">
            {personalInfo.firstName}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {personalInfo.lastName}
            </span>
          </h1>

          <h3 className="text-xl font-semibold from-cyan-400 via-blue-500 to-indigo-500">
            {personalInfo.role }
          </h3>

          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            I build scalable, high-performance web applications using React,
            Next.js, Node.js, Express and MongoDB. My focus is creating products
            that are fast, responsive and enjoyable to use.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link href="/portfolio/projects">Explore Projects</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8"
          >
            <Link
              href="/assets/docs/resume.pdf"
              download={"Muhammad Shahzaib Resume.pdf"}
            >
              Download Resume
            </Link>
          </Button>
        </div>
        <div className="gap-2 flex items-center justify-start">
          <Link
            className="p-2 outline-2 rounded-md"
            href={personalInfo.github}
          >
            <Github />
          </Link>
          <Link
            className="p-2 outline-2 rounded-md"
            href={personalInfo.linkedin}
          >
            <Linkedin />
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <motion.div
        className="relative flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute -left-8 top-10 rounded-2xl border bg-card/80 p-4 shadow-xl backdrop-blur">
            <p className="text-3xl font-bold text-cyan-400">6+</p>
            <p className="text-sm text-muted-foreground">Projects</p>
          </div>

          <div className="absolute -right-8 top-24 rounded-2xl border bg-card/80 p-4 shadow-xl backdrop-blur">
            <p className="text-3xl font-bold text-cyan-400">8+</p>
            <p className="text-sm text-muted-foreground">Technologies</p>
          </div>

          <div className="absolute -left-10 bottom-10 rounded-2xl border bg-card/80 p-4 shadow-xl backdrop-blur">
            <p className="text-xl font-semibold">MERN</p>

            <p className="text-sm text-muted-foreground">Stack Developer</p>
          </div>

          <div className="absolute -right-10 bottom-2 rounded-2xl border bg-card/80 p-4 shadow-xl backdrop-blur">
            <p className="text-xl font-semibold">🌍 Remote</p>

            <p className="text-sm text-muted-foreground">Worldwide</p>
          </div>

          <div className="h-90 w-90 overflow-hidden rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 shadow-2xl">
            <img
              src="/assets/images/profile.png"
              alt="Shahzaib Balouch"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
