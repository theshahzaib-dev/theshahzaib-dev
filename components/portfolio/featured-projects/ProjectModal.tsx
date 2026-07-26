"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  X,
  Github,
  Globe,
  Sparkles,
  Calendar,
  Layers,
  CheckCircle2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;

  technologies: string[];

  github?: string;
  live?: string;

  features?: string[];

  challenges?: string[];

  year?: string;
}

interface Props {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  open,
  onClose,
}: Props) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function esc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", esc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [open, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          className="fixed inset-0 z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* Backdrop */}

          <motion.div
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}

          <div className="absolute inset-0 overflow-y-auto p-6">

            <motion.div
              layoutId={`project-${project.id}`}
              onClick={(e) => e.stopPropagation()}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              className="
                relative
                mx-auto
                mt-8
                max-w-7xl
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-background/95
                shadow-2xl
                backdrop-blur-2xl
              "
            >

              {/* Close */}

              <Button
                size="icon"
                variant="secondary"
                onClick={onClose}
                className="
                  absolute
                  right-5
                  top-5
                  z-50
                  rounded-full
                "
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Hero */}

              <motion.div
                layoutId={`image-${project.id}`}
                className="relative h-[500px] overflow-hidden"
              >

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                <div className="absolute bottom-10 left-10 z-20 max-w-3xl">

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: .2,
                    }}
                  >
                    <Badge className="mb-5 rounded-full px-4 py-2">

                      <Sparkles className="mr-2 h-4 w-4" />

                      Featured Project

                    </Badge>
                  </motion.div>

                  <motion.h1
                    layoutId={`title-${project.id}`}
                    className="
                      text-5xl
                      font-black
                      tracking-tight
                    "
                  >
                    {project.title}
                  </motion.h1>

                  <motion.p
                    className="
                      mt-4
                      text-lg
                      text-muted-foreground
                      leading-8
                    "
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: .3,
                    }}
                  >
                    {project.description}
                  </motion.p>

                </div>

              </motion.div>
                            {/* Main Content */}

              <div className="grid gap-10 p-8 lg:grid-cols-3">

                {/* Left Content */}

                <div className="space-y-8 lg:col-span-2">

                  {/* Project Info */}

                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .35 }}
                    className="
                      rounded-3xl
                      border
                      bg-card/60
                      p-6
                      backdrop-blur-xl
                    "
                  >
                    <h2 className="mb-5 text-2xl font-bold">
                      Project Overview
                    </h2>

                    <p className="leading-8 text-muted-foreground">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Features */}

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .45 }}
                    className="
                      rounded-3xl
                      border
                      bg-card/60
                      p-6
                      backdrop-blur-xl
                    "
                  >

                    <h2 className="mb-6 text-2xl font-bold">
                      Key Features
                    </h2>

                    <div className="grid gap-4">

                      {(project.features ?? []).map((feature) => (

                        <motion.div
                          key={feature}
                          whileHover={{
                            x: 6,
                          }}
                          className="
                            flex
                            items-start
                            gap-4
                            rounded-xl
                            border
                            p-4
                            transition-colors
                            hover:bg-muted/50
                          "
                        >
                          <CheckCircle2
                            className="
                              mt-1
                              h-5
                              w-5
                              shrink-0
                              text-emerald-500
                            "
                          />

                          <p className="leading-7">
                            {feature}
                          </p>

                        </motion.div>

                      ))}

                    </div>

                  </motion.div>

                  {/* Challenges */}

                  {project.challenges &&
                    project.challenges.length > 0 && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: .55,
                      }}
                      className="
                        rounded-3xl
                        border
                        bg-card/60
                        p-6
                        backdrop-blur-xl
                      "
                    >

                      <h2 className="mb-6 text-2xl font-bold">
                        Engineering Challenges
                      </h2>

                      <div className="space-y-4">

                        {project.challenges.map((challenge) => (

                          <div
                            key={challenge}
                            className="
                              rounded-xl
                              border
                              border-orange-500/20
                              bg-orange-500/5
                              p-4
                            "
                          >

                            <p className="leading-7">
                              {challenge}
                            </p>

                          </div>

                        ))}

                      </div>

                    </motion.div>

                  )}

                </div>

                {/* Sidebar */}

                <div className="space-y-6">

                  {/* Metadata */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: .4,
                    }}
                    className="
                      rounded-3xl
                      border
                      bg-card/60
                      p-6
                      backdrop-blur-xl
                    "
                  >

                    <h3 className="mb-5 text-xl font-semibold">
                      Information
                    </h3>

                    <div className="space-y-5">

                      <div className="flex items-center gap-4">

                        <Layers
                          className="h-5 w-5 text-primary"
                        />

                        <div>

                          <p className="text-sm text-muted-foreground">
                            Category
                          </p>

                          <p className="font-medium">
                            {project.category}
                          </p>

                        </div>

                      </div>

                      <div className="flex items-center gap-4">

                        <Calendar
                          className="h-5 w-5 text-primary"
                        />

                        <div>

                          <p className="text-sm text-muted-foreground">
                            Year
                          </p>

                          <p className="font-medium">
                            {project.year ?? "2026"}
                          </p>

                        </div>

                      </div>

                    </div>

                  </motion.div>

                  {/* Tech Stack */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: .55,
                    }}
                    className="
                      rounded-3xl
                      border
                      bg-card/60
                      p-6
                      backdrop-blur-xl
                    "
                  >

                    <h3 className="mb-5 text-xl font-semibold">
                      Tech Stack
                    </h3>

                    <div className="flex flex-wrap gap-3">

                      {project.technologies.map((tech) => (

                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full px-4 py-2"
                        >
                          {tech}
                        </Badge>

                      ))}

                    </div>

                  </motion.div>
                                    {/* Project Statistics */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: .65,
                    }}
                    className="
                      rounded-3xl
                      border
                      bg-card/60
                      p-6
                      backdrop-blur-xl
                    "
                  >
                    <h3 className="mb-5 text-xl font-semibold">
                      Project Stats
                    </h3>

                    <div className="grid grid-cols-2 gap-4">

                      <motion.div
                        whileHover={{
                          y: -5,
                          scale: 1.03,
                        }}
                        className="
                          rounded-2xl
                          border
                          p-5
                          text-center
                        "
                      >
                        <h4 className="text-3xl font-black text-primary">
                          {project.technologies.length}
                        </h4>

                        <p className="mt-2 text-sm text-muted-foreground">
                          Technologies
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{
                          y: -5,
                          scale: 1.03,
                        }}
                        className="
                          rounded-2xl
                          border
                          p-5
                          text-center
                        "
                      >
                        <h4 className="text-3xl font-black text-primary">
                          100%
                        </h4>

                        <p className="mt-2 text-sm text-muted-foreground">
                          Responsive
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{
                          y: -5,
                          scale: 1.03,
                        }}
                        className="
                          rounded-2xl
                          border
                          p-5
                          text-center
                        "
                      >
                        <h4 className="text-3xl font-black text-primary">
                          ⚡
                        </h4>

                        <p className="mt-2 text-sm text-muted-foreground">
                          Optimized
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{
                          y: -5,
                          scale: 1.03,
                        }}
                        className="
                          rounded-2xl
                          border
                          p-5
                          text-center
                        "
                      >
                        <h4 className="text-3xl font-black text-primary">
                          🚀
                        </h4>

                        <p className="mt-2 text-sm text-muted-foreground">
                          Production
                        </p>
                      </motion.div>

                    </div>

                  </motion.div>

                  {/* Action Buttons */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: .75,
                    }}
                    className="
                      rounded-3xl
                      border
                      bg-card/60
                      p-6
                      backdrop-blur-xl
                    "
                  >

                    <h3 className="mb-5 text-xl font-semibold">
                      Explore Project
                    </h3>

                    <div className="space-y-4">

                      {project.live && (

                        <motion.div
                          whileHover={{
                            scale: 1.03,
                          }}
                          whileTap={{
                            scale: .97,
                          }}
                        >
                          <Link
                            href={project.live}
                            target="_blank"
                            className="block"
                          >
                            <Button
                              size="lg"
                              className="w-full"
                            >
                              <Globe className="mr-2 h-5 w-5" />

                              Live Demo
                            </Button>
                          </Link>
                        </motion.div>

                      )}

                      {project.github && (

                        <motion.div
                          whileHover={{
                            scale: 1.03,
                          }}
                          whileTap={{
                            scale: .97,
                          }}
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            className="block"
                          >
                            <Button
                              size="lg"
                              variant="outline"
                              className="w-full"
                            >
                              <Github className="mr-2 h-5 w-5" />

                              View Source
                            </Button>
                          </Link>
                        </motion.div>

                      )}

                    </div>

                  </motion.div>

                </div>

              </div>
                            {/* Footer */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.9,
                }}
                className="
                  relative
                  overflow-hidden
                  border-t
                  border-border/50
                  px-8
                  py-8
                "
              >
                {/* Background Glow */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-primary
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    -bottom-32
                    left-1/2
                    h-64
                    w-64
                    -translate-x-1/2
                    rounded-full
                    bg-primary/10
                    blur-3xl
                  "
                />

                <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">

                  <div>

                    <h3 className="text-xl font-bold">
                      Thanks for viewing this project.
                    </h3>

                    <p className="mt-2 text-muted-foreground">
                      Interested in how it was built?
                      Feel free to explore the source code or try the live demo.
                    </p>

                  </div>

                  <div className="flex gap-4">

                    {project.github && (

                      <Link
                        href={project.github}
                        target="_blank"
                      >
                        <Button
                          variant="outline"
                          size="lg"
                        >
                          <Github className="mr-2 h-5 w-5" />
                          GitHub
                        </Button>
                      </Link>

                    )}

                    {project.live && (

                      <Link
                        href={project.live}
                        target="_blank"
                      >
                        <Button size="lg">

                          <Globe className="mr-2 h-5 w-5" />

                          Live Demo

                        </Button>
                      </Link>

                    )}

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );
}