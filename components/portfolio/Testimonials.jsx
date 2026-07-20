"use client";

import { motion, type Variants } from "framer-motion";
import TitleSection from "@/components/TitleSection";
import FeaturedTestimonials from "@/components/portfolio/testimonials/FeaturedTestimonials";
import TestimonialsGrid from "@/components/portfolio/testimonials/TestimonialsGrid";
import TestimonialStats from "@/components/portfolio/testimonials/TestimonialStats";
import CTA from "@/components/portfolio/CTA";

const sectionVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .6,
    },
  },
};

export default function Testimonials() {
  return (
    <div className="space-y-24">

      {/* Hero */}

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl space-y-8 text-center"
      >
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary">
          💬 Client Testimonials
        </span>

        <h1 className="text-5xl font-bold md:text-6xl">
          Trusted by Clients
          <br />
          Across Multiple Projects
        </h1>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
          Every project is an opportunity to build lasting relationships.
          Here's what clients say about my communication, development
          process, and the quality of delivered products.
        </p>
      </motion.section>

      {/* Statistics */}

      <TestimonialStats />

      {/* Featured Slider */}

      <section className="space-y-10">
        <TitleSection
          sectionVariant={sectionVariant}
          subTitle="⭐ Featured Reviews"
          title="What Clients Say"
          description="A selection of feedback from business owners, startups, and organizations I've worked with."
        />

        <FeaturedTestimonials />
      </section>

      {/* Grid */}

      <section className="space-y-10">
        <TitleSection
          sectionVariant={sectionVariant}
          subTitle="❤️ More Reviews"
          title="More Client Experiences"
          description="Additional feedback collected from completed projects."
        />

        <TestimonialsGrid />
      </section>

      <CTA />

    </div>
  );
}