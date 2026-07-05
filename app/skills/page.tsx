"use client";

import TitleSection from "@/components/TitleSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  coreTechnologies,
  learningSkills,
  services,
  techStack,
} from "@/data/skills";
import { motion, type Variants } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend (React / Next.js)",
    items: [
      "React with hooks, context, and custom hooks",
      "Next.js App Router (server components, layouts, metadata)",
      "TypeScript in components, hooks, and utilities",
      "Styling with Tailwind CSS and shadcn/ui",
    ],
  },
  {
    title: "Backend (Node.js / Express)",
    items: [
      "Express.js REST APIs with routers and controllers",
      "MVC folder structure (routes, controllers, services, models)",
      "Middlewares for auth, validation, and error handling",
      "Environment-based config and clean startup files",
    ],
  },
  {
    title: "Database & Real-time (MongoDB)",
    items: [
      "MongoDB data modeling with Mongoose",
      "Indexes, aggregation, and pagination",
      "WebSockets / Socket.IO for chat and notifications",
      "Storing chat conversations and activity logs",
    ],
  },
  {
    title: "State, Tooling & DevOps",
    items: [
      "Redux Toolkit + RTK Query for data fetching",
      "Form handling, validation patterns, and UX states",
      "Git, GitHub, and basic CI/CD workflows",
      "Deploying apps to platforms like Vercel / Render",
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

export default function SkillsPage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <TitleSection
        sectionVariant={sectionVariant}
        title={"Building Modern Web Applications with MERN"}
        subTitle={"🚀 Skills & Technologies"}
        description={
          "I specialize in developing scalable full-stack applications using the MERN stack. From responsive user interfaces to secure backend APIs and database design, I enjoy turning ideas into reliable digital products."
        }
        center={true}
        hero={true}
      />

      {/* Skills Grid */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">Core Technologies</h2>

          <p className="mt-4 text-muted-foreground">
            The technologies I use most often to build production-ready
            applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {coreTechnologies.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <Card className="overflow-hidden border-border/60">
                <div className="p-7">
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${tech.color}`}
                  >
                    <img src={tech.icon} alt={tech.name} className="h-9 w-9" />
                  </div>

                  <h3 className="text-2xl font-semibold">{tech.name}</h3>

                  <p className="mt-2 text-muted-foreground">{tech.category}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="space-y-12"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            🛠 Technology Stack
          </span>

          <h2 className="mt-4 text-4xl font-bold">Technologies I Work With</h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
            I use a modern JavaScript ecosystem to build fast, scalable, and
            maintainable full-stack applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {techStack.map((group) => (
            <motion.div key={group.title} whileHover={{ y: -6 }}>
              <Card className="h-full p-5 border-border/60 transition-all hover:border-primary hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">{group.title}</CardTitle>

                  <p className="text-sm text-muted-foreground">
                    {group.description}
                  </p>
                </CardHeader>

                <div>
                  <div className="flex flex-wrap gap-3">
                    {group.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-4 py-2 text-sm transition-colors hover:border-primary hover:bg-primary/5"
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

      {/* Learning Skills */}
      <motion.section
        className="space-y-12"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            📚 Continuous Learning
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Always Learning, Always Improving
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
            Technology evolves quickly, and I enjoy continuously improving my
            skills by exploring new tools, architectures, and best practices
            that help me build better software.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {learningSkills.map((skill) => (
            <motion.div
              key={skill.title}
              whileHover={{
                y: -6,
              }}
            >
              <Card className="h-full border-border/60 transition-all hover:border-primary hover:shadow-lg">
                <div className="space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      🚀
                    </div>

                    <h3 className="text-lg font-semibold">{skill.title}</h3>
                  </div>

                  <p className="leading-7 text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        className="space-y-12"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            🚀 What I Build
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Turning Ideas into Products
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
            I enjoy solving real-world problems by building modern web
            applications that are scalable, secure, and easy to maintain. My
            focus is on creating solutions that deliver a great experience for
            both users and businesses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{
                y: -8,
              }}
            >
              <Card className="h-full border-border/60 transition-all hover:border-primary hover:shadow-xl">
                <div className="space-y-5 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold">{service.title}</h3>

                  <p className="leading-7 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
