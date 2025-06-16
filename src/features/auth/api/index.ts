import type {
  LoginFormData,
  LoginResponse,
  RegisterFormData,
  User,
} from "../types";

// Mock API functions - replace with actual API calls
export async function loginUser(
  credentials: LoginFormData
): Promise<LoginResponse> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock response
  return {
    user: {
      id: "1",
      email: credentials.email,
      name: "John Doe",
      avatar: "https://avatar.vercel.sh/john",
      role: "user",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    accessToken: "mock-access-token",
    refreshToken: "mock-refresh-token",
  };
}

export async function registerUser(
  data: RegisterFormData
): Promise<LoginResponse> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Mock response
  return {
    user: {
      id: "1",
      email: data.email,
      name: data.name,
      avatar: `https://avatar.vercel.sh/${data.name}`,
      role: "user",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    accessToken: "mock-access-token",
    refreshToken: "mock-refresh-token",
  };
}

export async function logoutUser(): Promise<void> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Clear stored tokens
  if (typeof window !== "undefined") {
    localStorage.removeItem("auth.token");
    localStorage.removeItem("auth.refreshToken");
    localStorage.removeItem("auth.user");
  }
}

export async function getCurrentUser(): Promise<User> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Mock getting user from token
  const storedUser =
    typeof window !== "undefined" ? localStorage.getItem("auth.user") : null;

  if (storedUser) {
    return JSON.parse(storedUser);
  }

  throw new Error("No authenticated user");
}

export async function refreshToken(): Promise<{ accessToken: string }> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    accessToken: "new-mock-access-token",
  };
}
