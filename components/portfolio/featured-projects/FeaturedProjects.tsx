"use client";

import React from "react";

import { motion, LayoutGroup } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";

import TitleSection from "@/components/TitleSection";

import { featuredProjects } from "@/data/projects";

import InteractiveProjectCard from "./InteractiveProjectCard";
import ProjectModal from "./ProjectModal";

interface FeaturedProjectsProps {
  sectionVariant: any;
  buttonShow?: boolean;
}

export default function FeaturedProjects({
  sectionVariant,
  buttonShow = false,
}: FeaturedProjectsProps) {
  const [api, setApi] = React.useState<CarouselApi>();

  const [current, setCurrent] = React.useState(0);

  const [selectedProject, setSelectedProject] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <LayoutGroup>
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        className="space-y-14"
      >
        {/* Heading */}

        <TitleSection
          sectionVariant={sectionVariant}
          title="Turning ideas into real-world web applications."
          subTitle="🚀 Featured Projects"
          description="A collection of personal, academic and client projects showcasing modern frontend, backend and full-stack development."
        />

        {/* Carousel */}

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="pt-10">
            {featuredProjects.map((project, index) => {
              const active = current === index;

              return (
                <CarouselItem
                  key={project.id}
                  className="
                    md:basis-1/2
                    xl:basis-1/2
                  "
                >
                  <motion.div
                    animate={{
                      scale: active ? 1 : 0.92,
                      opacity: active ? 1 : 0.45,
                      filter: active ? "blur(0px)" : "blur(2px)",
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="px-4"
                  >
                    <InteractiveProjectCard
                      project={project}
                      active={active}
                      onClick={() => setSelectedProject(project)}
                    />
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* View All */}

        {buttonShow && (
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
            className="flex justify-center"
          >
            <Link
              href="/projects"
              className="
                rounded-full
                border
                px-8
                pb-3
                font-medium
                transition
                hover:bg-primary
                hover:text-primary-foreground
              "
            >
              View All Projects
            </Link>
          </motion.div>
        )}
        {/* Shared Layout Modal */}

        <ProjectModal
          open={!!selectedProject}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </motion.section>
    </LayoutGroup>
  );
}
