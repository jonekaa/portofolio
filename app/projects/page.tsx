import React from "react";
import type { Metadata } from "next";
import { getProjects } from "@/lib/sanity/client";
import { ProjectsClient } from "@/components/projects/projects-client";
import { FadeIn } from "@/components/animations/motion";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio of Supply Chain Tech, Data Science, Machine Learning, and Web projects by Jonathan Eka.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-20 space-y-10">
      <div className="space-y-3">
        <FadeIn>
          <Badge variant="accent" className="font-mono text-xs">
            Portfolio
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-2">
            Engineering & Data Solutions
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Real-world systems, geospatial distribution routers, and algorithmic tools engineered to solve operational friction.
          </p>
        </FadeIn>
      </div>

      <ProjectsClient initialProjects={projects} />
    </div>
  );
}
