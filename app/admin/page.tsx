"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <div className=" space-y-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Overview of your portfolio content and activity.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-primary/10 gap-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-2xl font-semibold">3</p>
            <p className="text-xs text-muted-foreground">
              Matches the featured projects on the public site.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/10 gap-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-2xl font-semibold">6</p>
            <p className="text-xs text-muted-foreground">
              Based on the Skills & technologies section.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/10 gap-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              About blocks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-2xl font-semibold">3</p>
            <p className="text-xs text-muted-foreground">
              Main about text plus journey items.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/10 gap-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Chat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-2xl font-semibold">Preview</p>
            <p className="text-xs text-muted-foreground">
              Real-time chat will be powered by Node.js + WebSockets.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-2">
            <div>
              <CardTitle className="text-base font-semibold">
                Manage content
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Jump into the main sections that power the public portfolio.
              </p>
            </div>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2 ">
            <Link href="/admin/projects">
              <Button
                variant="outline"
                className="flex h-auto w-full flex-col items-start gap-1 rounded-xl px-3 py-3 cursor-pointer"
              >
                <span className="text-sm font-medium">Projects</span>
                <span className="text-xs text-muted-foreground max-w-xs text-wrap break-words text-left">
                  Cards shown on /portfolio and /portfolio/projects
                </span>
              </Button>
            </Link>
            <Link href="/admin/skills">
              <Button
                variant="outline"
                className="flex h-auto w-full flex-col items-start gap-1 rounded-xl px-3 py-3 cursor-pointer"
              >
                <span className="text-sm font-medium">Skills</span>
                <span className="text-xs text-muted-foreground max-w-xs text-wrap break-words text-left">
                  Tech groups and items on the skills page
                </span>
              </Button>
            </Link>
            <Link href="/admin/about">
              <Button
                variant="outline"
                className="flex h-auto w-full flex-col items-start gap-1 rounded-xl px-3 py-3 cursor-pointer"
              >
                <span className="text-sm font-medium">About</span>
                <span className="text-xs text-muted-foreground max-w-xs text-wrap break-words text-left">
                  Main about copy and journey timeline
                </span>
              </Button>
            </Link>
            <Link href="/admin/chat">
              <Button
                variant="outline"
                className="flex h-auto w-full flex-col items-start gap-1 rounded-xl px-3 py-3 cursor-pointer"
              >
                <span className="text-sm font-medium">Chat</span>
                <span className="text-xs text-muted-foreground max-w-xs text-wrap break-words text-left">
                  Configure chat behaviour and copy
                </span>
              </Button>
            </Link>
            <Link href="/admin/settings">
              <Button
                variant="outline"
                className="flex h-auto w-full flex-col items-start gap-1 rounded-xl px-3 py-3 cursor-pointer"
              >
                <span className="text-sm font-medium">Settings</span>
                <span className="text-xs text-muted-foreground max-w-xs text-wrap break-words text-left">
                  Site settings and meta information
                </span>
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Next steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-muted-foreground">
            <p>
              This dashboard is currently driven by static mock data that
              matches your public portfolio pages. In the backend phase, these
              numbers and sections will be powered by MongoDB models and Express
              APIs.
            </p>
            <ul className="list-disc space-y-1 pl-4">
              <li>Implement admin project, skills, and about CRUD UIs.</li>
              <li>Add RTK Query API slices for talking to the backend.</li>
              <li>
                Wire up real-time chat via WebSockets for admin & visitors.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
