"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function AdminForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email) {
      setError("Email is required.");
      return;
    }

    setLoading(true);

    const res = await authClient.forgotPassword(email);

    if (!res.success) {
      const message = res.error || "Could not send reset email";
      setError(message);
      setLoading(false);
      toast.error(message || "Reset request failed");
      return;
    }

    const message =
      "If an account exists for this email, a password reset link has been sent.";
    setSuccess(message);
    setLoading(false);
    toast.success("Reset link sent");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Forgot password
            </CardTitle>
            <CardDescription>
              Enter your admin email and we&apos;ll send you a reset link.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <p className="mb-3 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}
            {success && (
              <p className="mb-3 rounded-md bg-emerald-500/10 px-3 py-2 text-sm text-emerald-600">
                {success}
              </p>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                />
              </div>
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send reset link"}
              </Button>
            </form>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Remember your password?{" "}
              <Link
                href="/admin/login"
                className="font-medium hover:text-foreground hover:underline"
              >
                Back to login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


