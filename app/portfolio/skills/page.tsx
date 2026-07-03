"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <motion.section
        className="space-y-4"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Skills
        </h1>
        <p className="max-w-3xl text-sm sm:text-base text-muted-foreground">
          My main focus is the MERN stack. I&apos;m comfortable taking a feature
          from a Figma idea to a deployed product: frontend, backend, database,
          and real-time behaviour.
        </p>
      </motion.section>

      <motion.section
        className="grid gap-6 md:grid-cols-2"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="border-border/70 bg-card/80 hover:border-primary/40 transition rounded-xl"
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-lg border border-border/60 bg-background/40 px-3 py-2"
                  >
                    <span className="max-w-[80%]">{item}</span>
                    <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
