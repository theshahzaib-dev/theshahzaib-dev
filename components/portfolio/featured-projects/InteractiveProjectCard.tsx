"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { ArrowUpRight, Github, Globe, Sparkles } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

interface Props {
  project: Project;
  active?: boolean;
  onClick?: () => void;
}

export default function InteractiveProjectCard({
  project,
  active = true,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, {
    stiffness: 180,
    damping: 18,
  });

  const rotateY = useSpring(0, {
    stiffness: 180,
    damping: 18,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlight = useMotionTemplate`
    radial-gradient(
      280px circle at ${mouseX}px ${mouseY}px,
      rgba(255,255,255,.18),
      transparent 70%
    )
  `;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const rotateYValue = ((x - rect.width / 2) / rect.width) * 16;

    const rotateXValue = -((y - rect.height / 2) / rect.height) * 16;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={onClick}
      whileHover={{
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      className="group relative cursor-pointer"
    >
      {/* Animated Gradient Glow */}

      <motion.div
        className="
        absolute
        -inset-[2px]
        rounded-[30px]
        opacity-0
        blur-2xl
        transition
        duration-500
        group-hover:opacity-100
        "
        
      />

      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <Card
          className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-background/80
          backdrop-blur-xl
          transition-all
          duration-300
          "
        >
          {/* Cursor Spotlight */}

          <motion.div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              background: spotlight,
            }}
          />

          {/* Noise */}

          <div
            className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[url('/noise.png')]
            pointer-events-none
            "
          />

          {/* Browser Top Bar */}

          <div
            className="
            flex
            items-center
            gap-2
            border-b
            border-border/50
            px-5
            py-3
            "
          >
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <div
              className="
              ml-4
              rounded-full
              bg-muted
              px-3
              py-1
              text-xs
              text-muted-foreground
              "
            >
              {project.live ? new URL(project.live).hostname : "localhost"}
            </div>
          </div>

          {/* Hero Image */}

          <motion.div
            layoutId={`image-${project.id}`}
            className="relative h-72 overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={false}
              className="
              object-cover
              transition
              duration-700
              group-hover:scale-110
              "
            />

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-transparent
              to-transparent
              "
            />
          </motion.div>
          {/* Floating Badge */}

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
              delay: 0.15,
            }}
            className="absolute left-5 top-20 z-30"
          >
            <Badge
              className="
              rounded-full
              bg-primary/90
              px-4
              py-1
              text-white
              backdrop-blur
              "
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Featured Project
            </Badge>
          </motion.div>

          {/* Card Content */}

          <div className="space-y-6 p-6">
            {/* Title */}

            <motion.div
              layoutId={`title-${project.id}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-primary">
                    {project.category}
                  </p>
                </div>

                <motion.div
                  whileHover={{
                    rotate: 45,
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                  rounded-xl
                  border
                  bg-background/80
                  p-3
                  backdrop-blur
                  "
                >
                  <ArrowUpRight className="h-5 w-5" />
                </motion.div>
              </div>
            </motion.div>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
              line-clamp-3
              leading-7
              text-muted-foreground
              "
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="flex flex-wrap gap-2"
            >
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    "
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            {/* Divider */}

            <div className="h-px w-full bg-border/60" />

            {/* Footer */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
              }}
              className="
              flex
              items-center
              justify-between
              gap-4
              "
            >
              {/* Buttons */}

              <div className="flex items-center gap-3">
                {project.live && (
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                  >
                    <Link
                      href={project.live}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-primary
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-primary-foreground
                      transition
                      hover:opacity-90
                      "
                    >
                      <Globe className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </motion.div>
                )}

                {project.github && (
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      px-4
                      py-2
                      text-sm
                      font-medium
                      "
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  </motion.div>
                )}
              </div>

              {/* Status */}

              <motion.div
                animate={{
                  scale: active ? 1 : 0.9,
                  opacity: active ? 1 : 0.6,
                }}
                className="flex items-center gap-2"
              >
                <span className="relative flex h-3 w-3">
                  <span
                    className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-75
                    "
                  />

                  <span
                    className="
                    relative
                    inline-flex
                    h-3
                    w-3
                    rounded-full
                    bg-emerald-500
                    "
                  />
                </span>

                <span className="text-xs text-muted-foreground">
                  Production Ready
                </span>
              </motion.div>
            </motion.div>
            {/* Bottom Gradient Line */}

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="
                h-[2px]
                w-full
                origin-left
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                via-violet-500
                to-pink-500
              "
            />

            {/* Stats */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
              }}
              className="grid grid-cols-3 gap-4 pt-2"
            >
              <div className="space-y-1 text-center">
                <p className="text-2xl font-bold text-primary">
                  {project.technologies.length}
                </p>
                <p className="text-xs text-muted-foreground">Technologies</p>
              </div>

              <div className="space-y-1 text-center">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">Responsive</p>
              </div>

              <div className="space-y-1 text-center">
                <p className="text-2xl font-bold text-primary">🚀</p>
                <p className="text-xs text-muted-foreground">Live</p>
              </div>
            </motion.div>
          </div>

          {/* Hover Overlay */}

          <AnimatePresence>
            {active && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[28px]
                  border
                  border-primary/20
                "
              />
            )}
          </AnimatePresence>

          {/* Bottom Glow */}

          <motion.div
            animate={{
              opacity: active ? 1 : 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              absolute
              bottom-0
              left-1/2
              h-24
              w-4/5
              -translate-x-1/2
              rounded-full
              bg-primary/20
              blur-3xl
              pointer-events-none
            "
          />
        </Card>
      </motion.div>
    </motion.div>
  );
}
