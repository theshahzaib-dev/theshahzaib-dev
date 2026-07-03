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

type JourneyItem = {
  id: number;
  label: string;
  text: string;
};

const initialAbout =
  "I'm a MERN stack developer who builds full-stack applications with MongoDB, Express.js, React/Next.js, and Node.js. I focus on clear architecture and smooth user experiences.";

const initialJourney: JourneyItem[] = [
  {
    id: 1,
    label: "Getting started",
    text: "Learned core JavaScript and built small projects with HTML, CSS, and vanilla JS.",
  },
  {
    id: 2,
    label: "React & frontend",
    text: "Moved into React and Next.js, focusing on clean components, routing, and state management.",
  },
  {
    id: 3,
    label: "MERN & backends",
    text: "Adopted the full MERN stack with Express APIs, MongoDB data models, auth, and real-time features.",
  },
];

export default function AdminAboutPage() {
  const [aboutText, setAboutText] = useState(initialAbout);
  const [journey, setJourney] = useState<JourneyItem[]>(initialJourney);

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<JourneyItem | null>(null);
  const [label, setLabel] = useState("");
  const [text, setText] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<JourneyItem | null>(null);

  const openCreate = () => {
    setEditing(null);
    setLabel("");
    setText("");
    setModalOpen(true);
  };

  const openEdit = (item: JourneyItem) => {
    setEditing(item);
    setLabel(item.label);
    setText(item.text);
    setModalOpen(true);
  };

  const handleSaveJourney = () => {
    if (!label.trim()) return;

    if (editing) {
      setJourney((prev) =>
        prev.map((j) =>
          j.id === editing.id ? { ...j, label, text } : j,
        ),
      );
    } else {
      const nextId = journey.length ? Math.max(...journey.map((j) => j.id)) + 1 : 1;
      setJourney((prev) => [...prev, { id: nextId, label, text }]);
    }
    setModalOpen(false);
  };

  const handleDeleteJourneyConfirm = () => {
    if (!deleteTarget) return;
    setJourney((prev) => prev.filter((j) => j.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            About content
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage the about text and MERN journey timeline shown on the public
            about page.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Main about text
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <textarea
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          <p className="text-xs text-muted-foreground">
            This text maps to the &quot;About me&quot; paragraph on the public
            portfolio.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-2">
          <div>
            <CardTitle className="text-base font-semibold">
              MERN journey items
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              These cards appear in the &quot;MERN journey&quot; section.
            </p>
          </div>
          <Button size="sm" onClick={openCreate}>
            + Add item
          </Button>
        </CardHeader>
        <CardContent className="space-y-2">
          {journey.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No journey items yet. Click &quot;Add item&quot; to create one.
            </p>
          )}
          <div className="space-y-2">
            {journey.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-2 rounded-lg border border-border/70 bg-card/80 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-medium text-secondary">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.text}</p>
                </div>
                <div className="flex items-center gap-2 pt-1 sm:pt-0">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-destructive/40 text-destructive hover:bg-destructive/10"
                    onClick={() => setDeleteTarget(item)}
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
        title={editing ? "Edit journey item" : "Add journey item"}
        description="These items help tell your story on the public about page."
      >
          <div className="space-y-1.5">
            <Label htmlFor="label">Label</Label>
            <Input
              id="label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Getting started"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="text">Text</Label>
            <textarea
              id="text"
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Describe this step in your MERN journey..."
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
            <Button type="button" size="sm" onClick={handleSaveJourney}>
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
            <DialogTitle>Delete journey item?</DialogTitle>
            <DialogDescription>
              This will remove{" "}
              <span className="font-medium">
                {deleteTarget?.label || "this item"}
              </span>{" "}
              from your MERN journey section. You can recreate it later if
              needed.
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
              onClick={handleDeleteJourneyConfirm}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}


