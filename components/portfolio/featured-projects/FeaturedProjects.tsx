"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import ProjectCard from "./ProjectCard";
import { projects } from "@/types/project-data";

interface FeaturedProjectsProps {
  sectionVariant: any;
}

export default function FeaturedProjects({
  sectionVariant,
}: FeaturedProjectsProps) {
  return (
    <motion.section
      className="space-y-10"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Heading */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

        <div className="max-w-2xl space-y-4">

          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
            🚀 Featured Projects
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Turning ideas into real-world web applications.
          </h2>

          <p className="leading-8 text-muted-foreground">
            A collection of personal, academic, and client projects
            showcasing my experience building responsive user interfaces,
            secure backend systems, and production-ready web applications.
          </p>

        </div>

        <Button
          asChild
          variant="outline"
          className="rounded-full"
        >
          <Link href="/portfolio/projects">
            View All Projects
          </Link>
        </Button>

      </div>

      {/* Slider */}

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">

          {projects.map((project:any) => (

            <CarouselItem
              key={project.id}
              className="pl-6 basis-full"
            >
              <ProjectCard project={project} />
            </CarouselItem>

          ))}

        </CarouselContent>

        {/* Navigation */}

        <div className="mt-8 flex items-center justify-center gap-4">

          <CarouselPrevious className="static translate-y-0" />

          <CarouselNext className="static translate-y-0" />

        </div>

      </Carousel>
    </motion.section>
  );
}