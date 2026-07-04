"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { developmentProcess, otherProjects } from "@/data/projects";

import { featuredProjects } from "@/data/projects";
import FeaturedProjects from "@/components/portfolio/featured-projects/FeaturedProjects";
import { stats } from "@/data/stats";

const sectionVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-20">
      {/* Hero */}

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl text-center space-y-8"
      >
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary">
          🚀 Portfolio Projects
        </span>

        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Building Digital Products
          <br />
          That Solve Real Problems
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
          Here you'll find a collection of client work, full-stack applications,
          dashboards, and personal projects built with modern web technologies.
          Every project reflects my approach to writing clean code, designing
          scalable architectures, and creating exceptional user experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="rounded-full border px-4 py-2 text-sm">
            React.js
          </span>

          <span className="rounded-full border px-4 py-2 text-sm">Next.js</span>

          <span className="rounded-full border px-4 py-2 text-sm">Node.js</span>

          <span className="rounded-full border px-4 py-2 text-sm">
            Express.js
          </span>

          <span className="rounded-full border px-4 py-2 text-sm">MongoDB</span>

          <span className="rounded-full border px-4 py-2 text-sm">
            TypeScript
          </span>

          <span className="rounded-full border px-4 py-2 text-sm">
            Tailwind CSS
          </span>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <FeaturedProjects sectionVariant={sectionVariant} />

      {/* Other Projects */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            💼 More Work
          </span>

          <h2 className="mt-4 text-4xl font-bold">More Projects</h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
            Alongside client work, I've built personal projects and learning
            applications to explore new technologies, improve problem-solving
            skills, and experiment with modern development practices.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {otherProjects.map((project: any) => (
            <motion.div
              key={project.title}
              whileHover={{
                y: -8,
              }}
            >
              <Card className="overflow-hidden h-full border-border/60 hover:border-primary transition">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-5 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {project.category}
                    </span>

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">{project.title}</h3>

                  <p className="text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech: any) => (
                      <span
                        key={tech}
                        className="rounded-full border px-3 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Development Process */}
      <motion.section
        className="space-y-12"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            ⚙️ My Development Process
          </span>

          <h2 className="mt-4 text-4xl font-bold">From Idea to Deployment</h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
            Every successful project follows a structured process. Here's how I
            turn ideas into scalable, maintainable, and production-ready web
            applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {developmentProcess.map((item) => (
            <motion.div
              key={item.step}
              whileHover={{
                y: -8,
              }}
            >
              <Card className="h-full *:space-y-5 p-6 border-border/60 transition-all hover:border-primary hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="text-5xl">{item.icon}</div>

                  <span className="text-2xl font-bold text-primary/30">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="leading-7 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Statistics */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            📊 Portfolio Overview
          </span>

          <h2 className="mt-4 text-4xl font-bold">Project Statistics</h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
            A quick overview of the work I've completed and the technologies I
            use to build modern web applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div key={stat.label} whileHover={{ y: -6 }}>
              <Card className="space-y-3 p-8 text-center">
                <h3 className="text-5xl font-bold text-primary">
                  {stat.value}
                </h3>

                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
