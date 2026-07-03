"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";

const projects = [
  {
    title: "MERN Real-time Chat Platform",
    role: "Full-stack",
    description:
      "Real-time messaging with rooms, presence, typing indicators, and message history stored in MongoDB.",
    tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
    features: ["JWT auth", "Protected routes", "Online users list"],
  },
  {
    title: "MERN Portfolio CMS",
    role: "Full-stack",
    description:
      "Control center to manage projects, skills, and about content that powers the public portfolio.",
    tech: ["Next.js", "Express", "MongoDB", "RTK Query"],
    features: [
      "Role-based access",
      "Reusable UI components",
      "Optimistic updates",
    ],
  },
  {
    title: "Task & Analytics Dashboard",
    role: "Full-stack",
    description:
      "Dashboard for managing tasks, tracking progress, and visualising metrics with charts and filters.",
    tech: ["React", "Express", "MongoDB"],
    features: ["Server-side filters", "Pagination", "Aggregated stats"],
  },
  {
    title: "Auth & RBAC Boilerplate",
    role: "Backend + Frontend",
    description:
      "Reusable MERN boilerplate with authentication, refresh tokens, and role-based permissions.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    features: ["JWT + refresh", "Role middleware", "Protected layouts"],
  },
  {
    title: "File Upload & Media Library",
    role: "Full-stack",
    description:
      "Upload images and documents, attach them to projects, and manage them through a secure management area.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Multer uploads", "Cloud storage ready", "Admin moderation"],
  },
];

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <motion.section
        className="space-y-4"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="max-w-3xl text-sm sm:text-base text-muted-foreground">
          A selection of MERN projects that show how I think about architecture,
          real-time features, and product experiences. These cards are static
          for now — in the final version they&apos;ll be driven by the Node.js
          backend.
        </p>
      </motion.section>

      <motion.section
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="flex h-full flex-col border-border/70 bg-card/80 hover:border-primary/40 hover:shadow-lg transition"
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-col gap-1">
                  <span>{project.title}</span>
                  <span className="text-xs font-normal text-secondary">
                    {project.role}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 text-sm text-muted-foreground">
                <p>{project.description}</p>
                {project.features && (
                  <ul className="space-y-1 text-xs list-disc list-inside">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
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
      </motion.section>
    </div>
  );
}
