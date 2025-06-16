import {
  BarChart3,
  CreditCard,
  Database,
  Globe,
  Lock,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with Next.js 15 and React 19 for blazing fast performance and optimal user experience.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "Enterprise-grade security with authentication, authorization, and data protection built-in.",
  },
  {
    icon: Database,
    title: "Database Ready",
    description:
      "PostgreSQL integration with Prisma ORM for robust, scalable data management.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Stripe integration ready for subscriptions, one-time payments, and billing management.",
  },
  {
    icon: Users,
    title: "User Management",
    description:
      "Complete user authentication system with roles, permissions, and profile management.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Beautiful charts and analytics to track your business metrics and user engagement.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Responsive design that works perfectly on all devices from mobile to desktop.",
  },
  {
    icon: Globe,
    title: "Multi-tenant",
    description:
      "Built-in multi-tenancy support for B2B SaaS applications and enterprise clients.",
  },
  {
    icon: Lock,
    title: "Privacy Compliant",
    description:
      "GDPR and CCPA compliant with privacy controls and data management features.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to launch
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete SaaS starter with all the features you need to build,
            launch, and scale your application.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:border-primary/20 border-2 transition-colors"
            >
              <CardHeader>
                <feature.icon className="text-primary mb-4 h-10 w-10" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
