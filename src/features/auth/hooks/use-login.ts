"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ROUTES } from "@/lib/constants";

import { loginUser } from "../api";
import type { LoginFormData } from "../types";
import { useAuth } from "./use-auth";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  const loginMutation = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await loginUser(data);

      login(response.user, {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      });

      // Redirect to dashboard
      router.push(ROUTES.dashboard);

      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Login failed";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login: loginMutation,
    isLoading,
    error,
    clearError: () => setError(null),
  };
}
