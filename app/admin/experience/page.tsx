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

type Experience = {
  id: number;
  company: string;
  role: string;
  years: string;
};

const initialExperiences: Experience[] = [
  { id: 1, company: "Company One", role: "MERN Developer", years: "1.5 years" },
  {
    id: 2,
    company: "Company Two",
    role: "Full-stack Developer",
    years: "1 year",
  },
  {
    id: 3,
    company: "Company Three",
    role: "Backend Developer",
    years: "1 year",
  },
  {
    id: 4,
    company: "Company Four",
    role: "Frontend Developer",
    years: "6 months",
  },
];

export default function AdminExperiencePage() {
  const [items, setItems] = useState<Experience[]>(initialExperiences);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Experience | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Experience | null>(null);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [years, setYears] = useState("");

  const openCreate = () => {
    setEditing(null);
    setCompany("");
    setRole("");
    setYears("");
    setModalOpen(true);
  };

  const openEdit = (exp: Experience) => {
    setEditing(exp);
    setCompany(exp.company);
    setRole(exp.role);
    setYears(exp.years);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!company.trim() || !role.trim()) return;

    if (editing) {
      setItems((prev) =>
        prev.map((exp) =>
          exp.id === editing.id ? { ...exp, company, role, years } : exp
        )
      );
    } else {
      const nextId = items.length ? Math.max(...items.map((e) => e.id)) + 1 : 1;
      setItems((prev) => [...prev, { id: nextId, company, role, years }]);
    }
    setModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setItems((prev) => prev.filter((e) => e.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Experience
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your work experience that will be shown on the public
            portfolio.
          </p>
        </div>
        <Button onClick={openCreate} className="rounded-full px-4">
          + Add experience
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Companies you have worked with
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {items.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No experiences yet. Click &quot;Add experience&quot; to create
              one.
            </p>
          )}
          <div className="space-y-2">
            {items.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col gap-2 rounded-lg border border-border/70 bg-card/80 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-medium">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.role}</p>
                  {exp.years && (
                    <p className="text-[11px] text-muted-foreground/80">
                      {exp.years}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 pt-1 sm:pt-0">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openEdit(exp)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-destructive/40 text-destructive hover:bg-destructive/10"
                    onClick={() => setDeleteTarget(exp)}
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
        title={editing ? "Edit experience" : "Add experience"}
        description="This information will be displayed in your experience section on the public portfolio."
      >
        <div className="space-y-1.5">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. MERN Developer"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="years">Duration</Label>
          <Input
            id="years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="e.g. 1.5 years"
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
            <DialogTitle>Delete experience entry?</DialogTitle>
            <DialogDescription>
              This will remove{" "}
              <span className="font-medium">
                {deleteTarget?.company || "this item"}
              </span>{" "}
              from your experience list. You can always re-add it later.
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
