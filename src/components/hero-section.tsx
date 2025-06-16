import Link from "next/link";

import { ArrowRight, Globe, Play, Shield, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="from-primary/5 to-accent/5 absolute inset-0 bg-gradient-to-br via-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
            <Zap className="text-primary mr-2 h-4 w-4" />
            Launch your SaaS in days, not months
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Build Your Next
            <span className="text-primary block">Big Thing</span>
          </h1>

          {/* Description */}
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg sm:text-xl">
            The complete SaaS starter template with authentication, payments,
            database, and everything you need to launch your next project.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg"
              asChild
            >
              <Link href="#demo">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <Shield className="text-primary mb-2 h-8 w-8" />
              <h3 className="font-semibold">Enterprise Security</h3>
              <p className="text-muted-foreground text-sm">
                Bank-level encryption
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="text-primary mb-2 h-8 w-8" />
              <h3 className="font-semibold">Global CDN</h3>
              <p className="text-muted-foreground text-sm">
                Lightning fast worldwide
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="text-primary mb-2 h-8 w-8" />
              <h3 className="font-semibold">99.9% Uptime</h3>
              <p className="text-muted-foreground text-sm">Always available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
