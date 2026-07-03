"use client";

import { useState } from "react";
import { MessageCircle, Shield, User, Send } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type ChatSetting = {
  id: number;
  label: string;
  value: string;
};

const initialSettings: ChatSetting[] = [
  {
    id: 1,
    label: "Welcome message",
    value: "Hi! Tell me a bit about your MERN project 👋",
  },
  {
    id: 2,
    label: "Offline message",
    value: "I’m currently away, but I’ll reply as soon as I can.",
  },
];

export default function AdminChatPage() {
  const [settings, setSettings] = useState<ChatSetting[]>(initialSettings);
  const [typingPreview, setTypingPreview] = useState(false);
  const [adminReply, setAdminReply] = useState(
    "Thanks for reaching out! I can help you design and build this with the MERN stack."
  );

  const handleChange = (id: number, value: string) => {
    setSettings((prev) => prev.map((s) => (s.id === id ? { ...s, value } : s)));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Chat configuration
            </h1>
            <p className="mt-0.5 text-sm text-muted-foreground">
              See how a visitor message and your admin reply will look.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              Messages & copy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {settings.map((setting) => (
              <div key={setting.id} className="space-y-1.5">
                <Label htmlFor={`setting-${setting.id}`}>{setting.label}</Label>
                <Input
                  id={`setting-${setting.id}`}
                  value={setting.value}
                  onChange={(e) => handleChange(setting.id, e.target.value)}
                />
              </div>
            ))}
            <div className="space-y-1.5">
              <Label htmlFor="admin-reply">Sample admin reply</Label>
              <Input
                id="admin-reply"
                value={adminReply}
                onChange={(e) => setAdminReply(e.target.value)}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              These texts will later be used by the real-time chat system on
              both the public and admin side.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-4 w-4" />
              </div>
              Chat preview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-muted-foreground">
            <div className="rounded-xl border border-border/60 bg-card/80 p-3">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <User className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-[11px] font-medium">Visitor</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <Shield className="h-3.5 w-3.5" />
                  <span>Admin</span>
                </div>
              </div>

              <div className="space-y-2">
                {/* Visitor message */}
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-xs">
                    <p>{settings[0]?.value}</p>
                    <span className="mt-1 block text-[9px] text-muted-foreground">
                      10:12 • Visitor
                    </span>
                  </div>
                </div>

                {/* Admin reply */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-primary to-secondary px-3 py-2 text-xs text-primary-foreground shadow-sm">
                    <p>{adminReply}</p>
                    <span className="mt-1 block text-[9px] text-primary-foreground/80">
                      10:13 • You (admin)
                    </span>
                  </div>
                </div>

                {/* Optional typing indicator */}
                {typingPreview && (
                  <div className="flex justify-start">
                    <div className="max-w-[60%] rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-xs">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary/70" />
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary/50" />
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary/30" />
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input preview row */}
              <div className="mt-3 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5">
                <Input
                  disabled
                  placeholder="Type a message..."
                  className="h-7 border-0 bg-transparent px-0 text-[11px] shadow-none focus-visible:ring-0"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 rounded-full text-secondary hover:bg-secondary/10"
                  aria-label="Send"
                >
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            <Button
              size="sm"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => setTypingPreview((prev) => !prev)}
            >
              {typingPreview ? "Hide typing preview" : "Show typing preview"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
