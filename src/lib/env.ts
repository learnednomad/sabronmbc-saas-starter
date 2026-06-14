import { z } from "zod";

import tryParseEnv from "@/lib/try-parse-env";

/**
 * Define schema as an object with env variables and their types
 * **/
export const EnvSchema = z.object({
  PORT: z.coerce.number().min(1000),
  NODE_ENV: z.enum(["development", "production", "test"]),
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_WEBSOCKET_URL: z.string().url(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
  NEXT_PUBLIC_STRIPE_PRICE_ID: z.string().min(1),
  NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL: z.string().url(),
  NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET: z.string().min(1),
  NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY: z.string().min(1),
  NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY: z.string().min(1),
  NEXT_PUBLIC_STRIPE_PRICE_ID_LIFETIME: z.string().min(1),
  NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY_LITE: z.string().min(1),
  NEXT_SUPABASE_URL: z.string().url(),
  NEXT_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_RECAPTCHA_SECRET_KEY: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SECRET_KEY: z.string().optional(),
});

/**
 * Validate the environment variables against the schema
 * Type for the environment variables based on the schema
 * **/
export type EnvSchema = z.infer<typeof EnvSchema>;

/**
 * Try to parse the environment variables using the schema
 * This will throw a readable error if validation fails
 * **/
tryParseEnv(EnvSchema);

/**
 * Parse and validate the environment variables using the schema
 * This will throw an error if validation fails
 * **/
// eslint-disable-next-line node/no-process-env
export const env = EnvSchema.parse(process.env);
