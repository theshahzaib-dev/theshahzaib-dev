"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, type Variants } from "framer-motion";

const offerings = [
  "MERN dashboards with authentication and role-based access",
  "Real-time chat and notifications for your product",
  "Management areas to handle content, users, and analytics",
  "Refactoring existing MERN codebases for clarity and performance",
];

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <motion.section
        className="space-y-4 max-w-2xl"
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Contact
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Have a MERN project in mind, need help with an existing codebase, or
          want to add real-time features? Share a few details and this will
          eventually open a conversation directly with me.
        </p>
      </motion.section>

      <motion.section
        className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start"
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
              <CardTitle>Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-background/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-background/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="project">Project type</Label>
                  <Input
                    id="project"
                    placeholder="e.g. MERN dashboard, chat app, portfolio CMS"
                    className="bg-background/60"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me a bit about your idea, timeline, and tech stack..."
                    className="min-h-[120px] w-full rounded-md border border-input bg-background/60 px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 pt-2">
                  <Button type="submit" className="rounded-full px-6 cursor-pointer">
                    Send message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="border-primary/20 bg-gradient-to-b from-primary/10 to-background rounded-xl"
          whileHover={{ y: -4, scale: 1.01 }}
        >
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="space-y-4 p-6 text-sm text-muted-foreground">
              <p className="text-base font-medium text-foreground">
                What I can help you with
              </p>
              <ul className="space-y-2 list-disc list-inside">
                {offerings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="pt-4 space-y-2">
                <p className="text-base font-medium text-foreground">
                  How contact & chat will work
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Form submits to a Node.js + MongoDB backend.</li>
                  <li>A dashboard view shows a new conversation request.</li>
                  <li>A real-time chat opens using WebSockets.</li>
                  <li>Messages are stored with timestamps and read state.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </div>
  );
}
