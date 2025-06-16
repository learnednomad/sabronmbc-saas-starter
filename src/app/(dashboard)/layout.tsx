"use client";

import { AuthGuard } from "@/features/auth";
import { DashboardLayout } from "@/features/dashboard/components/dashboard-layout";

export default function DashboardLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard requireAuth={true}>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}
