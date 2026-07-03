"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";

const timeline = [
  {
    label: "Getting started",
    text: "Learned core JavaScript and built small projects with HTML, CSS, and vanilla JS.",
  },
  {
    label: "React & frontend",
    text: "Moved into React and Next.js, focusing on clean components, routing, and state management.",
  },
  {
    label: "MERN & backends",
    text: "Adopted the full MERN stack: Express APIs, MongoDB data models, auth, and real-time features.",
  },
  {
    label: "Full-stack products",
    text: "Design and ship complete products: dashboards, admin panels, chat apps, and portfolio systems.",
  },
];

const experiences = [
  {
    company: "Company One",
    role: "MERN Developer",
    years: "1.5 years",
  },
  {
    company: "Company Two",
    role: "Full-stack Developer",
    years: "1 year",
  },
  {
    company: "Company Three",
    role: "Backend Developer",
    years: "1 year",
  },
  {
    company: "Company Four",
    role: "Frontend Developer",
    years: "6 months",
  },
];

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <motion.section
        className="space-y-4"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          About me
        </h1>
        <p className="max-w-3xl text-sm sm:text-base text-muted-foreground">
          I&apos;m a MERN stack developer who builds full-stack applications
          using MongoDB, Express.js, React/Next.js, and Node.js. I enjoy turning
          ideas into production-ready products with clear architecture and a
          smooth user experience.
        </p>
      </motion.section>

      <motion.section
        className="grid gap-6 md:grid-cols-3"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="border-border/70 bg-card/80 rounded-xl"
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <Card className="border-0 bg-transparent shadow-none">
            <CardHeader>
              <CardTitle>What I do</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                I design and implement MERN applications end-to-end: responsive
                UIs, REST APIs, database schemas, authentication, and
                deployment.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="border-border/70 bg-card/80 rounded-xl"
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <Card className="border-0 bg-transparent shadow-none">
            <CardHeader>
              <CardTitle>How I work</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                I structure projects with clear folders (controllers, models,
                routes, services) and keep components small, typed, and
                reusable. I prefer simple solutions that are easy to extend
                later.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="border-border/70 bg-card/80 rounded-xl"
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <Card className="border-0 bg-transparent shadow-none">
            <CardHeader>
              <CardTitle>What I focus on</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Real-time features, secure auth, and dashboards that feel smooth
                to use. I pay attention to loading states, error handling, and
                the small details that make a product feel polished.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      <motion.section
        className="space-y-4"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          MERN journey
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {timeline.map((item) => (
            <motion.div
              key={item.label}
              className="border-border/70 bg-card/80 hover:border-primary/40 transition rounded-xl"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Card className="border-0 bg-transparent shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold text-secondary">
                    {item.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{item.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="space-y-4"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Experience
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
          I&apos;ve worked across different companies and roles, always focused
          on JavaScript and the MERN ecosystem. Here&apos;s a quick snapshot of
          my professional experience.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              className="border-border/70 bg-card/80 hover:border-primary/40 transition rounded-xl"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Card className="border-0 bg-transparent shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold">
                    {exp.company}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-1">
                  <p>{exp.role}</p>
                  <p className="text-xs text-muted-foreground/80">
                    {exp.years}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
