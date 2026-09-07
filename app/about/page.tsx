import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { profileData } from "@/lib/data/profile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/motion";
import {
  Download,
  ArrowRight,
  Sparkles,
  Target,
  Compass,
  Activity,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profileData.name} - Supply Chain Fulfillment Specialist, Data Scientist, and automation developer.`,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20 space-y-16">
      {/* Header */}
      <section className="space-y-4">
        <FadeIn>
          <Badge variant="accent" className="font-mono text-xs">
            About Me
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-2">
            Solving Real-World Bottlenecks with Data & Operational Empathy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed pt-2">
            I am a problem-solver at the intersection of industrial operations, data science, and modern web software.
          </p>
        </FadeIn>
      </section>

      {/* Main Narrative */}
      <section className="space-y-8 text-foreground/90 leading-relaxed text-base sm:text-lg">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-sky-500" />
            The Operational Frontline
          </h2>
          <p className="text-muted-foreground">
            In my current role as an <strong className="text-foreground">SCM Planner in Fulfillment at PT Wings Surya</strong>,
            one of Indonesia’s preeminent consumer goods powerhouses, I manage end-to-end order fulfillment operations.
            Balancing optimal inventory levels across nationwide distribution centers requires continuous vigilance:
            overstock ties up valuable capital, while stockouts disrupt customer trust and supply chain predictability.
          </p>
          <p className="text-muted-foreground">
            Rather than accepting manual spreadsheet friction as an inevitable cost of business, I design and deploy
            automation utilities: engineering macros in LibreOffice BASIC and Microsoft Excel VBA, and architecting internal
            web portals for our Inventory Control teams with interactive spatial routing, distance matrices, and transit calculations.
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-emerald-500" />
            Data Science & Academic Foundations
          </h2>
          <p className="text-muted-foreground">
            I graduated with High Honors in <strong className="text-foreground">Data Science and Analytics</strong> from{" "}
            <strong className="text-foreground">Petra Christian University</strong> (GPA: 3.66/4.00), where I developed deep
            rigor in applied statistical modeling, algorithmic structures, and distributed computation.
          </p>
          <p className="text-muted-foreground">
            During my studies, I was selected for the Google, GoTo, and Traveloka-backed{" "}
            <strong className="text-foreground">Bangkit Academy</strong> (Machine Learning cohort), where I graduated with Distinction,
            specializing in deep neural networks, computer vision, and TensorFlow production deployment.
          </p>
        </div>

        {/* Life Outside Work & Interests */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Compass className="h-5 w-5 text-amber-500" />
            Beyond the Terminal: &ldquo;Live Like There Is No Tomorrow&rdquo;
          </h2>
          <p className="text-muted-foreground">
            My personal motto, <em>&ldquo;Live like there is no tomorrow,&rdquo;</em> fuels how I approach both my work and personal life:
            with relentless dedication, curiosity, and high energy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Card className="border-border/60 bg-muted/20">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Activity className="h-4 w-4 text-sky-500" />
                  Hybrid Athletic Training
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  I believe cognitive clarity stems from physical resilience. I train as a hybrid athlete, balancing
                  concurrent endurance running and strength disciplines with data-driven recovery tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-muted/20">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  Culture & Travel Routing
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Passionate about exploring diverse landscapes and cultural preservation: from developing algorithms to transliterate
                  endangered Balinese scripts (Aksara Bali) to building smart algorithmic itinerary planners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Action Strip */}
      <section className="border-t border-border/60 pt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Jonathan_Eka_Saputra_CV.pdf"
          >
            <Button className="gap-2">
              <Download className="h-4 w-4" /> Download Full CV (PDF)
            </Button>
          </a>
          <Link href="/experience">
            <Button variant="outline">
              View Detailed Timeline
            </Button>
          </Link>
        </div>

        <Link
          href="/contact"
          className="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
        >
          Get in touch with me <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
