"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AdminFormDialog } from "@/components/layout/admin-form-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string;
  featured: boolean;
};

const initialProjects: Project[] = [
  {
    id: 1,
    title: "MERN Real-time Chat App",
    description:
      "Chat application with rooms, typing indicators, online status, and message persistence.",
    tech: "React, Node.js, Socket.IO, MongoDB",
    featured: true,
  },
  {
    id: 2,
    title: "MERN Portfolio CMS",
    description:
      "Admin-driven MERN platform powering the public portfolio content.",
    tech: "Next.js, Express, MongoDB, RTK Query",
    featured: true,
  },
  {
    id: 3,
    title: "MERN Task & Analytics Dashboard",
    description:
      "Dashboard for tasks, analytics, and role-based access with charts.",
    tech: "React, Express, MongoDB",
    featured: false,
  },
];

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");
  const [featured, setFeatured] = useState(false);

  const openCreate = () => {
    setEditing(null);
    setTitle("");
    setDescription("");
    setTech("");
    setFeatured(false);
    setModalOpen(true);
  };

  const openEdit = (project: Project) => {
    setEditing(project);
    setTitle(project.title);
    setDescription(project.description);
    setTech(project.tech);
    setFeatured(project.featured);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!title.trim()) return;

    if (editing) {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === editing.id ? { ...p, title, description, tech, featured } : p
        )
      );
    } else {
      const nextId = projects.length
        ? Math.max(...projects.map((p) => p.id)) + 1
        : 1;
      setProjects((prev) => [
        ...prev,
        { id: nextId, title, description, tech, featured },
      ]);
    }

    setModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setProjects((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage the projects that appear on the public portfolio pages.
          </p>
        </div>
        <Button
          onClick={openCreate}
          className="rounded-full px-4 cursor-pointer"
        >
          + Add project
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Project list
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {projects.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No projects yet. Click &quot;Add project&quot; to create one.
            </p>
          )}
          <div className="space-y-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col gap-2 rounded-lg border border-border/70 bg-card/80 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{project.title}</p>
                    {project.featured && (
                      <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-[10px] font-medium text-secondary">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="text-[11px] text-muted-foreground/80">
                    {project.tech}
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-1 sm:pt-0">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openEdit(project)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-destructive/40 text-destructive hover:bg-destructive/10"
                    onClick={() => setDeleteTarget(project)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AdminFormDialog
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={editing ? "Edit project" : "Add project"}
        description="These values will later be saved to the backend and shown on the public portfolio."
      >
        <div className="space-y-1.5">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Project title"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="description">Description</Label>
          <textarea
            id="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Short summary shown on the card"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="tech">Tech stack</Label>
          <Input
            id="tech"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            placeholder="React, Node.js, MongoDB..."
          />
        </div>
        <div className="flex items-center gap-2 pt-1">
          <input
            id="featured"
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="h-3.5 w-3.5 rounded border-border"
          />
          <Label htmlFor="featured" className="text-xs text-muted-foreground">
            Show as featured project on the public site
          </Label>
        </div>
        <div className="flex justify-end gap-2 pt-3">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </Button>
          <Button type="button" size="sm" onClick={handleSave}>
            Save
          </Button>
        </div>
      </AdminFormDialog>

      <Dialog
        open={!!deleteTarget}
        onOpenChange={(open: boolean) => {
          if (!open) setDeleteTarget(null);
        }}
      >
        <DialogContent className="rounded-xl">
          <DialogHeader>
            <DialogTitle>Delete project?</DialogTitle>
            <DialogDescription>
              This will remove{" "}
              <span className="font-medium">
                {deleteTarget?.title || "this project"}
              </span>{" "}
              from the admin list. The public site will later reflect these
              changes once connected to the backend.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setDeleteTarget(null)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              size="sm"
              className="border-destructive/40 bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDeleteConfirm}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
