"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminSettingsPage() {
  const [siteTitle, setSiteTitle] = useState("MERN Portfolio");
  const [tagline, setTagline] = useState(
    "MERN stack developer portfolio with real-time features",
  );
  const [primaryColor, setPrimaryColor] = useState("#043b6a");
  const [secondaryColor, setSecondaryColor] = useState("#04aeef");

  const handleSave = () => {
    // For now we just keep it in state; later this will call a settings API.
    // You could also add a toast here if you want feedback.
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Settings
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Basic configuration for your portfolio site. In the backend phase,
            these values will be persisted and used across the app.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Site information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="siteTitle">Site title</Label>
            <Input
              id="siteTitle"
              value={siteTitle}
              onChange={(e) => setSiteTitle(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="tagline">Tagline</Label>
            <Input
              id="tagline"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Brand colors (preview only)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="primaryColor">Primary color</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="primaryColor"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="font-mono text-xs"
                />
                <div
                  className="h-8 w-8 rounded-md border"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="secondaryColor">Secondary color</Label>
              <div className="flex items-center gap-2">
                <Input
                  id="secondaryColor"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="font-mono text-xs"
                />
                <div
                  className="h-8 w-8 rounded-md border"
                  style={{ backgroundColor: secondaryColor }}
                />
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            These preview values roughly match your current Tailwind theme. In a
            later phase we can connect them to real CSS variables and persist
            them in the backend.
          </p>
          <div className="flex justify-end">
            <Button size="sm" onClick={handleSave}>
              Save settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


