import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import TitleSection from "./TitleSection";
import { Button } from "./ui/button";
import Link from "next/link";

const Interested = ({ sectionVariant }: { sectionVariant: any }) => {
  return (
    <motion.section
      className="space-y-8"
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
    >
      <Card className="overflow-hidden border-primary/20 ">
        <CardContent className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">
          <TitleSection
            sectionVariant={sectionVariant}
            center={false}
            title={"Interested in working together?"}
            subTitle={"🚀 Available for Work"}
            description={
              "Whether you need a modern business website, a full-stack MERN application, or a custom admin dashboard, I'm ready to help bring your ideas to life."
            }
          />

          <div className="flex flex-col gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/portfolio/contact">Contact Me</Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              asChild
            >
              <Link href="/assets/docs/resume.pdf" download={"Muhammad Shahzaib Resume.pdf"}>
                Download Resume
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default Interested;
