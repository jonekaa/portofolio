import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getProjects } from "@/lib/sanity/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Cpu,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { formatInlineMarkdown } from "@/components/blog/prose-renderer";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title}`,
    description: project.subtitle || project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const caseStudy = project.caseStudy;

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20 space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to all projects
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-4 border-b border-border/60 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent" className="text-xs font-mono">
            {project.category}
          </Badge>
          <span className="text-xs font-mono text-muted-foreground">
            {project.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          {project.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.subtitle || project.summary}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                <ExternalLink className="h-4 w-4" /> Open Live Application
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                <GithubIcon className="h-4 w-4" /> View Source on GitHub
              </Button>
            </a>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Metrics Banner */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, idx) => (
            <Card key={idx} className="border-border/60 bg-muted/20">
              <CardContent className="p-5 text-center">
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-foreground mt-1">
                  {metric.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      )}

      {/* Deep-Dive Case Study Content */}
      {caseStudy ? (
        <article className="space-y-12">
          {/* Overview */}
          {caseStudy.overview && (
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" /> Operational Context
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {formatInlineMarkdown(caseStudy.overview)}
              </p>
            </div>
          )}

          {/* Challenge */}
          {caseStudy.challenge && (
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-rose-500" /> The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {formatInlineMarkdown(caseStudy.challenge)}
              </p>
            </div>
          )}

          {/* Architecture */}
          {caseStudy.architecture && caseStudy.architecture.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Cpu className="h-5 w-5 text-sky-500" /> System Architecture & Tech Highlights
              </h2>
              <ul className="space-y-2.5">
                {caseStudy.architecture.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-muted-foreground text-base"
                  >
                    <span className="mt-1 flex h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                    <span>{formatInlineMarkdown(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Solution */}
          {caseStudy.solution && (
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" /> The Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {formatInlineMarkdown(caseStudy.solution)}
              </p>
            </div>
          )}

          {/* Impact */}
          {caseStudy.impact && caseStudy.impact.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-500" /> Measurable Impact & Results
              </h2>
              <ul className="space-y-2.5">
                {caseStudy.impact.map((result, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-muted-foreground text-base"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{formatInlineMarkdown(result)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lessons Learned */}
          {caseStudy.lessonsLearned && (
            <div className="rounded-xl border border-border/80 bg-muted/20 p-6 space-y-2">
              <h3 className="text-sm font-semibold font-mono text-foreground uppercase tracking-wider">
                Key Takeaway
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                &ldquo;{caseStudy.lessonsLearned}&rdquo;
              </p>
            </div>
          )}
        </article>
      ) : (
        <article className="space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {project.summary}
          </p>
        </article>
      )}

      {/* Footer Navigation */}
      <div className="border-t border-border/60 pt-8 flex items-center justify-between">
        <Link href="/projects">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" /> All Projects
          </Button>
        </Link>
        <Link href="/contact">
          <Button className="gap-2">Discuss this project</Button>
        </Link>
      </div>
    </div>
  );
}
