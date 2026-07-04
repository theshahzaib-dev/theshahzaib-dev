import React from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface TitleSectionProps {
  sectionVariant: any;
  buttons?: any;
  center?: boolean;
  title?: String;
  subTitle?: String;
  description?: String;
}

const TitleSection = ({
  sectionVariant,
  buttons = false,
  center = true,
  title = "Let's Build Something Amazing Together",
  subTitle = "📬 Contact Me",
  description = "Whether you're hiring for a full-time role, looking for a freelance developer, or have an exciting project in mind, I'd love to hear from you. Let's discuss how we can create something valuable together.",
}: TitleSectionProps) => {
  return (
    <div className="w-full">
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        className={`mx-auto max-w-5xl ${center ? "text-center" : "text-left"}`}
      >
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary">
          {subTitle}
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>

        {buttons && (
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {buttons.map((button: any) => (
              <Button size="lg" asChild>
                <Link
                  href={button.link}
                  target={button.target}
                  {...(button.download && { download: button.download })}
                >
                  {button.label}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </motion.section>
    </div>
  );
};

export default TitleSection;
