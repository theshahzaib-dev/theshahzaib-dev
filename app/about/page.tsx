"use client";

import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences, highlights, journey } from "@/data/data";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const testimonials = [
  {
    name: "Prof. Mr. Muhammad Irfan Yasir",
    role: "Principal, Government Graduate College Lodhran",
    avatar: "/assets/images/testimonials/principal.png", // Optional
    quote:
      "Shahzaib developed the official website for our college with exceptional dedication and professionalism. The quality of his work is comparable to projects that often command a high commercial value. Although this was a contribution to our institution, we proudly recognized his efforts with a token of appreciation.",
    highlight: "Official Website Project",
  },
  {
    name: "Muhammad Sarfraz",
    role: "Freelance Client",
    avatar: "/assets/images/testimonials/sarfraz.svg",
    quote:
      "Shahzaib delivered a modern, responsive website that matched our requirements and branding. Throughout the project, he communicated clearly, addressed feedback quickly, and maintained a professional approach. His attention to detail and commitment to quality made the collaboration smooth and successful.",
    highlight: "Frontend Development",
  },
  {
    name: "Mr. Azhar Shahzad",
    role: "Arwa Tchnologies",
    avatar: "/assets/images/testimonials/azhar.png", // Optional
    quote:
      "During his internship, Shahzaib showed excellent dedication, quickly adapted to new technologies, and consistently delivered quality work while collaborating effectively with the development team.",
    highlight: "Job Performance & Collaboration",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      {/* My Journey into Full-Stack Development */}
      <motion.section
        className="grid items-center gap-10 lg:grid-cols-4"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content (75%) */}
        <div className="space-y-6 lg:col-span-3">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            👋 About Me
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            From Curiosity to
            <span className="text-primary"> Full-Stack Development</span>
          </h1>

          <p className="text-lg leading-8 text-muted-foreground">
            I'm <strong>Muhammad Shahzaib</strong>, a Full-Stack MERN Developer
            from Pakistan passionate about building fast, scalable, and
            user-focused web applications using React, Next.js, Node.js,
            Express.js, MongoDB, and TypeScript.
          </p>

          <p className="leading-8 text-muted-foreground">
            My journey into web development began in 9th grade when my computer
            teacher recognized my interest in HTML and encouraged me to pursue
            programming beyond the classroom. Since then, I've completed
            professional MERN Stack training, gained internship experience,
            delivered freelance and contract projects, mentored fellow students,
            and developed the official website for Government Graduate College
            Lodhran.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild>
              <Link href="/contact">Let's Connect</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link
                href="/assets/docs/resume.pdf"
                download={"Muhammad Shahzaib Resume.pdf"}
              >
                Download Resume
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Image (25%) */}
        <div className="flex justify-center lg:justify-end">
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="relative w-full max-w-[280px]"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />

            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <img
                src="/assets/images/profile.png"
                alt="Muhammad Shahzaib"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What Defines Me */}
      <motion.section
        className="space-y-8"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <TitleSection
          sectionVariant={sectionVariant}
          subTitle={"👩‍💻 Who am I"}
          description={
            "Beyond writing code, I enjoy solving problems, learning continuously, and collaborating with others to build meaningful digital products."
          }
          title="What Defines Me"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <motion.div key={item.title} whileHover={{ y: -6 }}>
              <Card className="h-full border-border/60 bg-card/80 transition hover:border-primary hover:shadow-xl">
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* My Journey */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <TitleSection
          sectionVariant={sectionVariant}
          title={"From Curiosity to Professional Development"}
          subTitle={"🚀 My Journey"}
          description={
            "Every milestone has helped shape my skills as a developer—from writing my first HTML page in school to building production-ready applications for clients and organizations."
          }
        />

        <div className="relative border-l border-primary/20 pl-8">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 8 }}
              className="relative mb-12"
            >
              <div className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </div>

              <span className="text-sm font-semibold text-primary">
                {item.year}
              </span>

              <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-3 leading-8 text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experiences */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <TitleSection
          sectionVariant={sectionVariant}
          title={"Professional Experience"}
          subTitle={"💼 My Journey"}
          description={
            "My professional experience includes internships, contract-based development, and client projects where I've built scalable web applications using modern JavaScript technologies."
          }
        />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div key={exp.company} whileHover={{ y: -5 }}>
              <Card className="border-border/60 transition hover:border-primary hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold">{exp.role}</h3>

                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>

                    <div className="text-right">
                      <p className="font-medium">{exp.duration}</p>

                      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-muted/40 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <TitleSection
          sectionVariant={sectionVariant}
          title={"Testimonials"}
          subTitle={"💬 What Others Say"}
          description={
            "Hear from those who have worked with me and the impact of my work on their projects."
          }
        />

        {/* Featured Testimonial */}

        <motion.div whileHover={{ y: -5 }}>
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8 lg:p-10">
              <div className="mb-6 text-6xl text-primary">“</div>

              <p className="text-lg leading-9 text-muted-foreground italic">
                {testimonials[0].quote}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    <img
                      src={testimonials[0].avatar}
                      alt={testimonials[0].name}
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold">{testimonials[0].name}</h4>

                    <p className="text-sm text-muted-foreground">
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>

                <span className="hidden rounded-full bg-primary/10 px-4 py-2 text-sm text-primary md:block">
                  {testimonials[0].highlight}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Remaining Testimonials */}

        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.slice(1).map((testimonial) => (
            <motion.div key={testimonial.name} whileHover={{ y: -5 }}>
              <Card className="h-full transition hover:border-primary hover:shadow-xl">
                <CardContent className="space-y-6 p-6">
                  <div className="text-4xl text-primary">“</div>

                  <p className="leading-8 text-muted-foreground">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>

                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
