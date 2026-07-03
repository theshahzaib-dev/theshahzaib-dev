"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Lock,
  GraduationCap,
  FolderKanban,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Project } from "@/types/project-data";

interface ProjectCardProps {
  project: Project;
}

const statusConfig = {
  live: {
    label: "Live Project",
    icon: ExternalLink,
    className: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },

  private: {
    label: "Private Client",
    icon: Lock,
    className: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  },

  academic: {
    label: "Academic",
    icon: GraduationCap,
    className: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusConfig[project.status as keyof typeof statusConfig];
  const StatusIcon = status.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      <Card className="overflow-hidden border-border/60 bg-card/80 backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-2xl">
        <div className="grid lg:grid-cols-[420px_1fr]">
          {/* Image */}

          <div className="relative overflow-hidden bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="h-auto w-full overflow-hidden transition duration-500 hover:scale-105"
            />

            <div className="absolute left-5 top-5 flex gap-2">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${status.className}`}
              >
                <StatusIcon className="h-3.5 w-3.5" />
                {status.label}
              </span>

              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}

          <CardContent className="flex flex-col gap-6 p-8">
            <div>
              <h3 className="text-3xl font-bold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                {project.description}
              </p>
            </div>

            {/* Role */}

            <div>
              <h4 className="mb-3 flex items-center gap-2 font-semibold">
                <FolderKanban className="h-4 w-4 text-primary" />
                My Responsibilities
              </h4>

              <ul className="space-y-2">
                {project.role.map((item: any) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}

            <div>
              <h4 className="mb-3 font-semibold">Technologies</h4>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: any) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}

            <div>
              <h4 className="mb-3 font-semibold">Key Features</h4>

              <div className="flex flex-wrap gap-2">
                {project.features.map((feature: any) => (
                  <span
                    key={feature}
                    className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 pt-2">
              {project?.live ? (
                <Button asChild>
                  <Link href={project.live} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              ) : (
                <Button disabled>Private Project</Button>
              )}

              {project?.github ? (
                <Button variant="outline" asChild>
                  <Link href={project?.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" disabled>
                  Private Repository
                </Button>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}
