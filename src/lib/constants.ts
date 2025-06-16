export const APP_CONFIG = {
  name: "SaaS Starter",
  description: "The complete SaaS starter template",
  url: "https://saas-starter.com",
  ogImage: "https://saas-starter.com/og.jpg",
  links: {
    twitter: "https://twitter.com/saas-starter",
    github: "https://github.com/saas-starter",
    linkedin: "https://linkedin.com/company/saas-starter",
  },
} as const;

export const API_ENDPOINTS = {
  auth: {
    login: "/api/auth/login",
    register: "/api/auth/register",
    logout: "/api/auth/logout",
    refresh: "/api/auth/refresh",
    profile: "/api/auth/profile",
  },
  users: {
    list: "/api/users",
    create: "/api/users",
    update: (id: string) => `/api/users/${id}`,
    delete: (id: string) => `/api/users/${id}`,
  },
  billing: {
    plans: "/api/billing/plans",
    subscription: "/api/billing/subscription",
    invoices: "/api/billing/invoices",
    payment: "/api/billing/payment",
  },
} as const;

export const ROUTES = {
  home: "/",
  login: "/login",
  register: "/signup",
  dashboard: "/dashboard",
  settings: "/dashboard/settings",
  billing: "/dashboard/billing",
  profile: "/dashboard/profile",
} as const;

export const QUERY_KEYS = {
  auth: {
    user: ["auth", "user"] as const,
    profile: ["auth", "profile"] as const,
  },
  users: {
    all: ["users"] as const,
    lists: () => [...QUERY_KEYS.users.all, "list"] as const,
    list: (filters: string) =>
      [...QUERY_KEYS.users.lists(), { filters }] as const,
    details: () => [...QUERY_KEYS.users.all, "detail"] as const,
    detail: (id: string) => [...QUERY_KEYS.users.details(), id] as const,
  },
  billing: {
    all: ["billing"] as const,
    subscription: () => [...QUERY_KEYS.billing.all, "subscription"] as const,
    invoices: () => [...QUERY_KEYS.billing.all, "invoices"] as const,
    plans: () => [...QUERY_KEYS.billing.all, "plans"] as const,
  },
} as const;

export const STORAGE_KEYS = {
  auth: {
    token: "auth.token",
    refreshToken: "auth.refreshToken",
    user: "auth.user",
  },
  theme: "theme",
  sidebar: "sidebar.collapsed",
} as const;

export const VALIDATION_MESSAGES = {
  required: "This field is required",
  email: "Please enter a valid email address",
  password: {
    min: "Password must be at least 8 characters",
    uppercase: "Password must contain at least one uppercase letter",
    lowercase: "Password must contain at least one lowercase letter",
    number: "Password must contain at least one number",
    special: "Password must contain at least one special character",
  },
  confirmPassword: "Passwords do not match",
} as const;

export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 9,
    interval: "month",
    features: [
      "Up to 1,000 users",
      "Basic analytics",
      "Email support",
      "Core features",
      "1 team member",
    ],
    popular: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: 29,
    interval: "month",
    features: [
      "Up to 10,000 users",
      "Advanced analytics",
      "Priority support",
      "All features",
      "Up to 10 team members",
      "Custom integrations",
      "API access",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    interval: "custom",
    features: [
      "Unlimited users",
      "Custom analytics",
      "24/7 dedicated support",
      "Enterprise features",
      "Unlimited team members",
      "Custom integrations",
      "Advanced API access",
      "SLA guarantee",
      "On-premise deployment",
    ],
    popular: false,
  },
] as const;
