"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";
import { Download, Facebook, Github, Linkedin, X } from "lucide-react";
import FeaturedProjects from "@/components/portfolio/featured-projects/FeaturedProjects";
import Hero from "@/components/Hero";
import TitleSection from "@/components/TitleSection";

const skillCategories = [
  {
    title: "Frontend",
    icon: "⚛️",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: "🛠️",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "MVC Architecture",
      "Middleware",
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: ["MongoDB", "Mongoose", "Aggregation", "CRUD Operations"],
  },
  {
    title: "Tools & Deployment",
    icon: "🚀",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Netlify",
      "MongoDB Atlas",
    ],
  },
];

const projects = [
  {
    title: "Velocity Admin Dashboard",
    category: "Private Client Project",
    status: "Private Repository",
    image: "/projects/velocity-dashboard.png",

    description:
      "A logistics management dashboard built for administrators to manage drivers, vehicles, bookings, customers, and system analytics through a secure role-based interface.",

    role: [
      "Designed and developed the complete Admin Dashboard",
      "Integrated REST APIs",
      "Implemented secure authentication",
      "Built responsive dashboard UI",
      "Managed application state",
    ],

    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    features: [
      "Dashboard Analytics",
      "Driver Management",
      "Vehicle Management",
      "Booking Management",
      "Authentication",
      "Responsive Design",
    ],

    live: "",
    github: "",
  },

  {
    title: "Government Graduate College Lodhran",
    category: "Official College Website",
    status: "Live",

    image: "/projects/ggcl.png",

    description:
      "A modern multi-page college website developed to provide students, faculty, and visitors with easy access to institutional information.",

    role: [
      "Frontend Development",
      "Responsive Design",
      "Multi-page Website",
      "Performance Optimization",
      "Deployment",
    ],

    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Vercel"],

    features: [
      "Homepage",
      "Departments",
      "Admissions",
      "Faculty",
      "Gallery",
      "Contact",
    ],

    live: "https://your-link.com",
    github: "",
  },
];

const services = [
  {
    title: "Full MERN applications",
    items: [
      "End-to-end web apps from idea to deployment",
      "Authentication, RBAC, and secure API design",
      "Clean, reusable UI components and layouts",
    ],
  },
  {
    title: "APIs & backends",
    items: [
      "REST APIs with Express and MongoDB",
      "MVC structure, validation, and error handling",
      "Pagination, filtering, and query optimization",
    ],
  },
  {
    title: "Real-time features",
    items: [
      "WebSocket-based chat and notifications",
      "Presence, typing indicators, and live updates",
      "Scalable event-driven architecture",
    ],
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

export default function PortfolioPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero sectionVariant={sectionVariant} />

      {/* MERN stack overview */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl space-y-4">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-sm font-medium text-primary">
            💻 What I Build
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Building modern web applications from idea to deployment.
          </h2>

          <p className="text-base leading-8 text-muted-foreground">
            I build responsive, scalable, and user-friendly web applications
            using the MERN stack. My focus is on creating clean interfaces,
            secure backend APIs, and maintainable code that solves real-world
            business problems.
          </p>
        </div>
        <TitleSection
          sectionVariant={sectionVariant}
          title={"Building modern web applications from idea to deployment."}
          subTitle={"💻 What I Build"}
          description={
            "I build responsive, scalable, and user-friendly web applications using the MERN stack. My focus is on creating clean interfaces,  secure backend APIs, and maintainable code that solves real-world business problems."
          }
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card className="group border-border/60 bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
            <CardContent className="space-y-4 p-6">
              <div className="text-4xl">⚛️</div>

              <h3 className="text-xl font-semibold">Frontend Development</h3>

              <p className="text-sm leading-7 text-muted-foreground">
                Building responsive and interactive user interfaces with React,
                Next.js, Tailwind CSS, JavaScript, and reusable component
                architecture.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-border/60 bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
            <CardContent className="space-y-4 p-6">
              <div className="text-4xl">🛠️</div>

              <h3 className="text-xl font-semibold">Backend Development</h3>

              <p className="text-sm leading-7 text-muted-foreground">
                Developing secure RESTful APIs using Node.js, Express.js,
                MongoDB, JWT authentication, and role-based access control.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-border/60 bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
            <CardContent className="space-y-4 p-6">
              <div className="text-4xl">🗄️</div>

              <h3 className="text-xl font-semibold">Database Design</h3>

              <p className="text-sm leading-7 text-muted-foreground">
                Designing efficient MongoDB databases with Mongoose, data
                validation, and scalable schemas for modern web applications.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-border/60 bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl">
            <CardContent className="space-y-4 p-6">
              <div className="text-4xl">☁️</div>

              <h3 className="text-xl font-semibold">Deployment</h3>

              <p className="text-sm leading-7 text-muted-foreground">
                Deploying modern web applications using Vercel, Netlify, GitHub,
                and MongoDB Atlas with performance optimization and SEO best
                practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Skills overview */}

      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <TitleSection
          sectionVariant={sectionVariant}
          title={"Technologies I work with"}
          subTitle={"🛠️ Skills & Technologies"}
          description={
            "I use modern technologies to build scalable, maintainable, andproduction-ready web applications with a strong focus on clean code and user experience."
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div key={category.title} whileHover={{ y: -6 }}>
              <Card className="h-full border-border/60 bg-card/80 transition-all hover:border-primary hover:shadow-xl">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>

                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium transition hover:bg-primary hover:text-primary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects preview */}
      <FeaturedProjects sectionVariant={sectionVariant} />

      {/* Contact / chat CTA */}
      <motion.section
        className="space-y-8"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <Card className="overflow-hidden border-primary/20 ">
          <CardContent className="flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-5">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                🚀 Available for Work
              </span>

              <h2 className="text-4xl font-bold">
                Interested in working together?
              </h2>

              <p className="text-lg leading-8 text-muted-foreground">
                Whether you need a modern business website, a full-stack MERN
                application, or a custom admin dashboard, I'm ready to help
                bring your ideas to life.
              </p>
            </div>

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
                <Link href="/resume.pdf">Download Resume</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
