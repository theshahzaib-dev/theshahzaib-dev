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

type Skill = {
  id: number;
  name: string;
  category: string;
};

const initialSkills: Skill[] = [
  { id: 1, name: "React / Next.js", category: "Frontend" },
  { id: 2, name: "TypeScript", category: "Frontend" },
  { id: 3, name: "Node.js / Express", category: "Backend" },
  { id: 4, name: "MongoDB / Mongoose", category: "Database" },
  { id: 5, name: "WebSockets (Socket.IO)", category: "Real-time" },
  { id: 6, name: "Redux Toolkit / RTK Query", category: "State & Data" },
];

export default function AdminSkillsPage() {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Skill | null>(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<Skill | null>(null);

  const openCreate = () => {
    setEditing(null);
    setName("");
    setCategory("");
    setModalOpen(true);
  };

  const openEdit = (skill: Skill) => {
    setEditing(skill);
    setName(skill.name);
    setCategory(skill.category);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!name.trim()) return;

    if (editing) {
      setSkills((prev) =>
        prev.map((s) =>
          s.id === editing.id ? { ...s, name, category: category || "General" } : s,
        ),
      );
    } else {
      const nextId = skills.length ? Math.max(...skills.map((s) => s.id)) + 1 : 1;
      setSkills((prev) => [
        ...prev,
        { id: nextId, name, category: category || "General" },
      ]);
    }
    setModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setSkills((prev) => prev.filter((s) => s.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Skills
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage the skills and technologies displayed on the public skills
            page.
          </p>
        </div>
        <Button onClick={openCreate} className="rounded-full px-4">
          + Add skill
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Skills list
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {skills.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No skills yet. Click &quot;Add skill&quot; to create one.
            </p>
          )}
          <div className="space-y-2">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col gap-2 rounded-lg border border-border/70 bg-card/80 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-medium">{skill.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {skill.category}
                  </p>
                </div>
                <div className="flex items-center gap-2 pt-1 sm:pt-0">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openEdit(skill)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-destructive/40 text-destructive hover:bg-destructive/10"
                    onClick={() => setDeleteTarget(skill)}
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
        title={editing ? "Edit skill" : "Add skill"}
        description="Skills here correspond to the technologies shown on the public site."
      >
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. React / Next.js"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Frontend, Backend, Database..."
            />
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
            <DialogTitle>Delete skill?</DialogTitle>
            <DialogDescription>
              This will remove{" "}
              <span className="font-medium">
                {deleteTarget?.name || "this skill"}
              </span>{" "}
              from the admin skills list. The public site will later reflect
              these changes once connected to the backend.
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


