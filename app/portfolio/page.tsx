"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";

const coreStack = [
  "MongoDB for document data and aggregation pipelines",
  "Express.js REST APIs with clean MVC structure and validation",
  "React / Next.js frontends focused on DX and performance",
  "Node.js services with real-time WebSocket communication",
];

const skills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Node.js / Express",
  "MongoDB / Mongoose",
  "WebSockets (Socket.IO)",
  "Redux Toolkit / RTK Query",
];

const projects = [
  {
    title: "MERN Real-time Chat App",
    description:
      "A full-stack MERN chat application with rooms, typing indicators, online status, and message persistence.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB"],
  },
  {
    title: "MERN Portfolio CMS",
    description:
      "Admin-driven MERN platform powering this portfolio with CRUD for projects, skills, and content sections.",
    tech: ["Next.js", "Express", "MongoDB", "RTK Query"],
  },
  {
    title: "MERN Task & Analytics Dashboard",
    description:
      "Task management dashboard with role-based access, charts, filters, and server-side pagination.",
    tech: ["React", "Express", "MongoDB", "Charting libraries"],
  },
];

const services = [
  {
    title: "Full MERN applications",
    items: [
      "End-to-end web apps from idea to deployment",
      "Authentication, RBAC, and secure API design",
      "Clean, reusable UI components and layouts",
    ],
  },
  {
    title: "APIs & backends",
    items: [
      "REST APIs with Express and MongoDB",
      "MVC structure, validation, and error handling",
      "Pagination, filtering, and query optimization",
    ],
  },
  {
    title: "Real-time features",
    items: [
      "WebSocket-based chat and notifications",
      "Presence, typing indicators, and live updates",
      "Scalable event-driven architecture",
    ],
  },
];

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function PortfolioPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Available for freelance & remote work
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary">
            Building clean, fast &{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              real‑time
            </span>{" "}
            web experiences.
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-muted-foreground">
            I&apos;m a MERN stack developer focused on building production-ready
            applications with React/Next.js, Node.js, Express, and MongoDB —
            with real-time features when they matter.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="rounded-full px-6" asChild>
              <Link href="/portfolio/projects">View projects</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-secondary/60 text-secondary hover:bg-secondary/10"
              asChild
            >
              <Link href="/portfolio/contact">Let&apos;s chat</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Modern MERN stack (MongoDB, Express, React, Node)
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Real-time features with WebSockets / Socket.IO
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Clean, responsive UI with Tailwind + shadcn/ui
            </div>
          </div>
        </div>

        <motion.div
          className="border-primary/15 bg-gradient-to-b from-primary/5 to-background shadow-sm rounded-xl"
          variants={{
            hidden: { opacity: 0, x: 32 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase text-secondary tracking-[0.2em]">
                  Snapshot
                </p>
                <p className="text-lg font-semibold">Full-Stack JS Developer</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="space-y-1">
                  <p className="text-muted-foreground">Experience</p>
                  <p className="font-medium">+3 years with JavaScript</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">Remote / Worldwide</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Focus</p>
                  <p className="font-medium">MERN apps & APIs</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Stack</p>
                  <p className="font-medium">MongoDB, Express, React, Node</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium uppercase text-muted-foreground tracking-[0.2em]">
                  Core skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-background/60 px-3 py-1 text-xs font-medium border border-border/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* MERN stack overview */}
      <motion.section
        className="space-y-6"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            The MERN stack I work with
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-muted-foreground">
            I don&apos;t just use MERN as a buzzword. I understand how each part
            fits together and how to structure apps so they stay fast and
            maintainable as they grow.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {coreStack.map((item) => (
            <motion.div
              key={item}
              className="border-border/70 bg-card/80 hover:border-primary/40 transition rounded-xl"
              whileHover={{ y: -4, boxShadow: "0 18px 40px rgba(0,0,0,0.25)" }}
            >
              <CardContent className="flex items-start gap-3 p-4 text-sm text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <p>{item}</p>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills overview */}
      <motion.section
        className="space-y-6"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Skills & technologies
            </h2>
            <p className="text-sm text-muted-foreground">
              A modern MERN stack focused on performance, DX, and clean code.
            </p>
          </div>
        </div>

        <Card className="border-primary/10 bg-card/80">
          <CardContent className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 sm:p-6">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                className="flex items-center justify-between rounded-xl border border-border/60 bg-background/40 px-3 py-3 text-sm"
                whileHover={{ y: -2, scale: 1.01 }}
              >
                <span>{skill}</span>
                <span className="h-2 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.section>

      {/* Projects preview */}
      <motion.section
        className="space-y-6"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Featured projects
            </h2>
            <p className="text-sm text-muted-foreground">
              MERN projects with real-world features like auth, dashboards,
              chat, and real-time collaboration tools. Full data will later come
              from the Node.js backend.
            </p>
          </div>
          <Button variant="outline" size="sm" className="rounded-full" asChild>
            <Link href="/portfolio/projects">View all projects</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="flex h-full flex-col border-border/70 bg-card/80 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4 text-sm text-muted-foreground">
                  <p>{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-background px-2.5 py-1 text-[11px] font-medium border border-border/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact / chat CTA */}
      <motion.section
        className="space-y-6"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <Card className="border-primary/20 bg-gradient-to-r from-primary/90 via-primary to-secondary shadow-lg">
          <CardContent className="flex flex-col gap-6 p-6 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-8">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Let&apos;s build something great.
              </h2>
              <p className="text-sm sm:text-base text-primary-foreground/80 max-w-xl">
                This portfolio will include a real-time chat so you can reach me
                directly from the site once the backend is ready.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-6 border border-primary/40"
                asChild
              >
                <Link href="/portfolio/chat">Open chat</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
