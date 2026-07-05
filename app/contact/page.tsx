"use client";

import { useState } from "react";
import { toast } from "sonner";
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
import { personalInfo } from "@/data/data";
import TitleSection from "@/components/TitleSection";

const contacts = [
  {
    title: "Email",
    value: personalInfo.email,
    href: "mailto:" + personalInfo.email,
    icon: Mail,
    description: "The best way to reach me for jobs and projects.",
  },
  {
    title: "Phone",
    value: personalInfo.phone,
    href: "tel:" + personalInfo.phone,
    icon: Phone,
    description: "Available during normal business hours.",
  },
  {
    title: "Location",
    value: personalInfo.location,
    href: "https://maps.google.com/?q=Lodhran,Pakistan",
    icon: MapPin,
    description: "Available for remote opportunities worldwide.",
  },
  {
    title: "LinkedIn",
    value: "Connect Professionally",
    href: personalInfo.linkedin,
    icon: Linkedin,
    description: "Let's grow our professional network.",
  },
  {
    title: "GitHub",
    value: "View My Projects",
    href: personalInfo.github,
    icon: Github,
    description: "Explore my repositories and code.",
  },
  {
    title: "Portfolio",
    value: "theshahzaibdev.online",
    href: personalInfo.portfolio,
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
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-24">
      {/* Hero */}
      <TitleSection 
      sectionVariant={sectionVariant}
      title={"Let's Build Something Amazing Together"}
      subTitle={"📬 Contact Me"}
      description={
        "Whether you're hiring for a full-time role, looking for a freelance developer, or have an exciting project in mind, I'd love to hear from you. Let's discuss how we can create something valuable together."
      } 
      hero={true}
      />

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
        <TitleSection
          sectionVariant={sectionVariant}
          title="I'd Love to Hear From You"
          subTitle="✉️ Send a Message"
          description="Tell me about your project, job opportunity, or collaboration. I'll review your message and get back to you as soon as possible."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form */}

          <Card className="lg:col-span-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>

                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Company (Optional)
                    </label>

                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Subject
                    </label>

                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={8}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full cursor-pointer"
                  disabled={loading}
                >
                  <Send className="mr-2 h-4 w-4" />

                  {loading ? "Sending..." : "Send Message"}
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
