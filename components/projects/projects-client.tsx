"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface ProjectsClientProps {
  initialProjects: Project[];
}

export function ProjectsClient({ initialProjects }: ProjectsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Supply Chain Tech",
    "Data Science & ML",
    "Web Applications",
  ];

  const filtered =
    selectedCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
              selectedCategory === cat
                ? "bg-foreground text-background shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="text-xs text-muted-foreground font-mono ml-auto hidden sm:inline">
          Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <Card
            key={project.slug}
            className="flex flex-col justify-between border-border/80 hover:border-foreground/30 hover:shadow-md transition-all duration-300 group"
          >
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="accent" className="text-[10px]">
                  {project.category}
                </Badge>
                <div className="flex items-center gap-2">
                  {project.hasDeepDive && (
                    <span className="inline-flex items-center gap-1 rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold">
                      <Sparkles className="h-2.5 w-2.5" /> Case Study
                    </span>
                  )}
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {project.date}
                  </span>
                </div>
              </div>

              <CardTitle className="text-lg group-hover:text-sky-500 transition-colors">
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {project.subtitle || project.summary}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {project.summary}
              </p>

              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/40">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="rounded bg-muted/40 p-2 text-center">
                      <div className="text-[10px] font-mono text-muted-foreground truncate">
                        {m.label}
                      </div>
                      <div className="text-xs font-bold font-mono text-foreground mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="pt-0 flex items-center justify-between border-t border-border/40 mt-auto">
              {project.hasDeepDive ? (
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                >
                  Read Full Case Study <ArrowRight className="h-3 w-3" />
                </Link>
              ) : (
                <span className="text-xs text-muted-foreground">Overview</span>
              )}

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    title="Open Live Deployment"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
