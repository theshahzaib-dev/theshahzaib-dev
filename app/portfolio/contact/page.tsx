"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Send, Briefcase, Clock, CheckCircle2 } from "lucide-react";

import { CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contacts = [
  {
    title: "Email",
    value: "your@email.com",
    href: "mailto:theshahzaib.dev@gmail.com",
    icon: Mail,
    description: "The best way to reach me for jobs and projects.",
  },
  {
    title: "Phone",
    value: "+92 302 0549257",
    href: "tel:+923020549257",
    icon: Phone,
    description: "Available during normal business hours.",
  },
  {
    title: "Location",
    value: "Lodhran, Punjab, Pakistan",
    href: "https://maps.google.com/?q=Lodhran,Pakistan",
    icon: MapPin,
    description: "Available for remote opportunities worldwide.",
  },
  {
    title: "LinkedIn",
    value: "Connect Professionally",
    href: "https://linkedin.com/in/theshahzaibdev",
    icon: Linkedin,
    description: "Let's grow our professional network.",
  },
  {
    title: "GitHub",
    value: "View My Projects",
    href: "https://github.com/theshahzaib-dev",
    icon: Github,
    description: "Explore my repositories and code.",
  },
  {
    title: "Portfolio",
    value: "theshahzaibdev.online",
    href: "https://theshahzaibdev.online",
    icon: Globe,
    description: "Browse my latest work and projects.",
  },
];

const availability = [
  "Available for Full-Time Roles",
  "Open to Freelance Projects",
  "Contract-Based Development",
  "Usually replies within 24 hours",
];

const sectionVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl text-center"
      >
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary">
          📬 Contact Me
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
          Let's Build Something
          <br />
          Amazing Together
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          Whether you're hiring for a full-time role, looking for a freelance
          developer, or have an exciting project in mind, I'd love to hear from
          you. Let's discuss how we can create something valuable together.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#contact-form">
              Send Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/resume.pdf" target="_blank">
              Download Resume
            </Link>
          </Button>
        </div>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        className="space-y-10"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            📞 Contact Information
          </span>

          <h2 className="mt-4 text-4xl font-bold">Let's Connect</h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
            Feel free to reach out through any of the channels below. Whether
            it's a job opportunity, freelance project, collaboration, or simply
            a question, I'll do my best to respond promptly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -8,
                }}
              >
                <Link href={item.href} target="_blank" className="block h-full">
                  <Card className="h-full border-border/60 transition-all hover:border-primary hover:shadow-xl">
                    <div className="space-y-5 p-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>

                        <p className="mt-2 font-medium text-primary">
                          {item.value}
                        </p>

                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        id="contact-form"
        className="space-y-12"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            ✉️ Send a Message
          </span>

          <h2 className="mt-4 text-4xl font-bold">I'd Love to Hear From You</h2>

          <p className="mx-auto mt-4 max-w-3xl leading-8 text-muted-foreground">
            Tell me about your project, job opportunity, or collaboration. I'll
            review your message and get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form */}

          <Card className="lg:col-span-2">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>

                    <Input placeholder="John Doe" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>

                    <Input type="email" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Company (Optional)
                    </label>

                    <Input placeholder="Company Name" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Subject
                    </label>

                    <Input placeholder="Project Discussion" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <Textarea
                    rows={8}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Availability Card */}

          <Card>
            <div className="space-y-8 p-8">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Currently Available</h3>

                    <p className="text-sm text-muted-foreground">
                      Open for new opportunities
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Briefcase className="mt-1 h-5 w-5 text-primary" />

                  <div>
                    <h4 className="font-medium">Services</h4>

                    <div className="mt-3 space-y-2">
                      {availability.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-500" />

                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-primary" />

                  <div>
                    <h4 className="font-medium">Time Zone</h4>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Pakistan Standard Time (PKT)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}
