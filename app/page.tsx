"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";
import { Download, Facebook, Github, Linkedin, X } from "lucide-react";
import FeaturedProjects from "@/components/portfolio/featured-projects/FeaturedProjects";
import Hero from "@/components/Hero";
import TitleSection from "@/components/TitleSection";
import Technologies from "@/components/Technologies";
import Interested from "@/components/Interested";



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
      <Technologies  sectionVariant={sectionVariant} />

      {/* Projects preview */}
      <FeaturedProjects buttonShow={true} sectionVariant={sectionVariant} />

      {/* Contact / chat CTA */}
      <Interested sectionVariant={sectionVariant} />
    </div>
  );
}
