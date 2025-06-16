"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ROUTES } from "@/lib/constants";

import { registerUser } from "../api";
import type { RegisterFormData } from "../types";
import { useAuth } from "./use-auth";

export function useRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  const registerMutation = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await registerUser(data);

      login(response.user, {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      });

      // Redirect to dashboard
      router.push(ROUTES.dashboard);

      return response;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Registration failed";
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register: registerMutation,
    isLoading,
    error,
    clearError: () => setError(null),
  };
}
