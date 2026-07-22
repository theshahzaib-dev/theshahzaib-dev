"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { otherProjects } from "@/data/projects";
import TitleSection from "@/components/TitleSection";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeaturedProjectsProps {
  sectionVariant: any;
  buttonShow: boolean;
}

export default function FeaturedProjects({
  sectionVariant,
  buttonShow = false,
}: FeaturedProjectsProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <motion.section
      className="space-y-10"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Heading */}

      <div className="">
        <TitleSection
          sectionVariant={sectionVariant}
          title="Turning ideas into real-world web applications."
          subTitle="🚀 Featured Projects"
          description="A collection of personal, academic, and client projects showcasing my experience building responsive user interfaces, secure backend systems, and production-ready web applications."
        />
      </div>

      {/* Slider */}

      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full p-3"
      >
        <CarouselContent className="ml-2 p-10">
          {otherProjects.map((project, index) => {
            const active = index === current;

            return (
              <CarouselItem key={project.id} className="lg:basis-1/2">
                <motion.div
                  animate={{
                    scale: active ? 1 : 0.9,
                    opacity: active ? 1 : 0.45,
                    y: active ? -8 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className={`
                  rounded-lg transition-all duration-500
                  ${active ? "shadow-2xl shadow-primary/30 z-20" : "shadow-md"}
                `}
                >
                  <Card className="pt-0 h-full border-border/60 hover:border-primary transition">
                    <div className="relative min-h-80 h-auto w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="space-y-5 p-6 w-full">
                      <div className="grid space-y-3 lg:grid-cols-2 justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">
                            {project.title}
                          </h3>
                          <span className="text-sm font-medium text-primary">
                            {project.category}
                          </span>
                        </div>
                        {project.live ? (
                          <Link href={project.live}>
                            <ExternalLink className=" p-2 ml-auto rounded-md bg-primary h-auto w-auto text-5xl" />
                          </Link>
                        ) : (
                          <span className="cursor-not-allowed opacity-50 ml-auto">
                            <ExternalLink className="mr-2 p-2 rounded-md bg-primary h-auto w-auto text-5xl" />
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="mt-8 flex justify-center gap-4">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>

      {buttonShow && (
        <div className="flex justify-center align-center">
          <Link className="text-primary w-full text-center" href="/projects">
            View All Projects
          </Link>
        </div>
      )}
    </motion.section>
  );
}
