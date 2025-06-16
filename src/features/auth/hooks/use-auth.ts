"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import { STORAGE_KEYS } from "@/lib/constants";

import type { AuthState, User } from "../types";

interface AuthStore extends AuthState {
  login: (
    user: User,
    tokens: { accessToken: string; refreshToken: string }
  ) => void;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: (user, tokens) => {
        // Store tokens
        if (typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEYS.auth.token, tokens.accessToken);
          localStorage.setItem(
            STORAGE_KEYS.auth.refreshToken,
            tokens.refreshToken
          );
        }

        set({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      logout: () => {
        // Clear tokens
        if (typeof window !== "undefined") {
          localStorage.removeItem(STORAGE_KEYS.auth.token);
          localStorage.removeItem(STORAGE_KEYS.auth.refreshToken);
        }

        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      updateUser: (userData) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...userData },
          });
        }
      },

      setLoading: (loading) => {
        set({ isLoading: loading });
      },
    }),
    {
      name: STORAGE_KEYS.auth.user,
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export function useAuth() {
  const store = useAuthStore();

  return {
    user: store.user,
    isAuthenticated: store.isAuthenticated,
    isLoading: store.isLoading,
    login: store.login,
    logout: store.logout,
    updateUser: store.updateUser,
    setLoading: store.setLoading,
  };
}

// Hook to get auth token
export function useAuthToken() {
  const getToken = () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(STORAGE_KEYS.auth.token);
  };

  return { getToken };
}
