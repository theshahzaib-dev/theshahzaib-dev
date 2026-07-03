"use client";

import type { ApiResponse, User } from "@/types";

// For now we simulate requests on the frontend only so you can build the UI.
// Later you can replace this with real API calls using RTK Query and .env.

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface AuthPayload {
  email: string;
  password: string;
  name?: string;
}

export interface AuthResult {
  user: User;
  accessToken: string;
}

export const authClient = {
  async signup(payload: AuthPayload): Promise<ApiResponse<AuthResult>> {
    await delay(700);

    if (payload.email === "error@example.com") {
      return {
        success: false,
        error: "Demo error from signup mock. Try a different email.",
      };
    }

    const user: User = {
      id: "demo-admin-id",
      email: payload.email,
      name: payload.name || "Admin User",
      role: "admin",
    };

    return {
      success: true,
      data: {
        user,
        accessToken: "demo-access-token",
      },
    };
  },
  async login(payload: AuthPayload): Promise<ApiResponse<AuthResult>> {
    await delay(600);

    if (payload.email === "wrong@example.com") {
      return {
        success: false,
        error: "Invalid email or password (demo error).",
      };
    }

    const user: User = {
      id: "demo-admin-id",
      email: payload.email,
      name: "Demo Admin",
      role: "admin",
    };

    return {
      success: true,
      data: {
        user,
        accessToken: "demo-access-token",
      },
    };
  },
  async forgotPassword(email: string): Promise<ApiResponse<null>> {
    await delay(700);

    if (email === "error@example.com") {
      return {
        success: false,
        error: "Could not send reset email (demo error).",
      };
    }

    return {
      success: true,
      data: null,
      message: "Reset email sent (mock).",
    };
  },
  async resetPassword(
    _token: string,
    _password: string,
  ): Promise<ApiResponse<null>> {
    await delay(700);

    return {
      success: true,
      data: null,
      message: "Password reset successful (mock).",
    };
  },
};


