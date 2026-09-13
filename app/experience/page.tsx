import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  workExperience,
  educationExperience,
  leadershipExperience,
  certifications,
  skillsMatrix,
} from "@/lib/data/experience";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/motion";
import {
  Briefcase,
  GraduationCap,
  Users,
  Award,
  Download,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience & Certifications",
  description: "Professional career history, academic background, leadership, and machine learning certifications of Jonathan Eka.",
};

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/60 pb-8">
        <div className="space-y-2">
          <FadeIn>
            <Badge variant="accent" className="font-mono text-xs">
              Career & Credentials
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-2">
              Experience & Certifications
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Proven track record across enterprise supply chain operations, HR database engineering, and applied machine learning.
            </p>
          </FadeIn>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Jonathan_Eka_Saputra_CV.pdf"
        >
          <Button className="gap-2 shrink-0">
            <Download className="h-4 w-4" /> Download CV (PDF)
          </Button>
        </a>
      </div>

      {/* 1. Work Experience */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Briefcase className="h-6 w-6 text-sky-500" />
          Professional Work Experience
        </h2>

        <div className="relative border-l border-border/80 ml-3 md:ml-4 space-y-10 pl-6 md:pl-8">
          {workExperience.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-sky-500 ring-4 ring-background" />

              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted/60 px-2.5 py-0.5 rounded">
                    <Calendar className="h-3 w-3" /> {exp.period}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-sky-600 dark:text-sky-400 font-medium">
                  <span>{exp.organization}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground font-normal">
                    <MapPin className="h-3 w-3" /> {exp.location}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {exp.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Education */}
      <section className="space-y-8 pt-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <GraduationCap className="h-6 w-6 text-emerald-500" />
          Education & Fellowships
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {educationExperience.map((edu) => (
            <Card key={edu.id} className="border-border/80 flex flex-col justify-between">
              <CardHeader className="space-y-2 pb-4">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>{edu.period}</span>
                  <Badge variant="outline">{edu.location}</Badge>
                </div>
                <CardTitle className="text-lg leading-snug md:min-h-[3.25rem] flex items-start">
                  {edu.role}
                </CardTitle>
                <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 md:min-h-[1.5rem] flex items-center">
                  {edu.organization}
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-between pt-0">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed md:min-h-[3.75rem]">
                  {edu.description}
                </p>
                <ul className="space-y-2 pt-3 border-t border-border/40 mt-auto">
                  {edu.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Leadership */}
      <section className="space-y-8 pt-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
          <Users className="h-6 w-6 text-amber-500" />
          Organizational Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {leadershipExperience.map((lead) => (
            <Card key={lead.id} className="border-border/80 flex flex-col justify-between">
              <CardHeader className="space-y-1.5 pb-3">
                <div className="text-xs font-mono text-muted-foreground">
                  {lead.period}
                </div>
                <CardTitle className="text-base leading-snug md:min-h-[2.75rem] flex items-start">
                  {lead.role}
                </CardTitle>
                <div className="text-xs text-muted-foreground md:min-h-[1.25rem] font-medium flex items-center">
                  {lead.organization}
                </div>
              </CardHeader>
              <CardContent className="space-y-3 flex-1 flex flex-col justify-between pt-0">
                <p className="text-xs text-muted-foreground leading-relaxed md:min-h-[3.75rem]">
                  {lead.description}
                </p>
                <ul className="space-y-1.5 pt-3 border-t border-border/40 mt-auto">
                  {lead.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[11px] text-foreground/80 leading-relaxed"
                    >
                      <span className="h-1 w-1 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Certifications */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
            <Award className="h-6 w-6 text-sky-500" />
            Specialized Certifications
          </h2>
          <span className="text-xs font-mono text-muted-foreground">
            {certifications.length} verified credentials
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => {
            const hasLink = Boolean(cert.credentialUrl);
            const CardWrapper = hasLink ? "a" : "div";
            const linkProps = hasLink
              ? {
                  href: cert.credentialUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": `Verify ${cert.title} issued by ${cert.issuer}`,
                }
              : {};

            return (
              <CardWrapper
                key={idx}
                {...linkProps}
                className={`group flex flex-col justify-between rounded-xl border border-border/80 bg-card p-4 space-y-3.5 transition-all duration-200 hover:border-sky-500/40 hover:bg-muted/20 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 ${
                  hasLink ? "cursor-pointer" : ""
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider font-medium truncate">
                      {cert.issuer}
                    </span>
                    {hasLink && (
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground leading-snug sm:min-h-[2.5rem] flex items-start group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {hasLink && (
                  <div className="pt-2 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    <span>Verify Credential</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </section>

      {/* 5. Comprehensive Skills Matrix */}
      <section className="space-y-6 pt-4 border-t border-border/60">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Technical & Operational Tooling
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase text-sky-600 dark:text-sky-400">
              Programming & Scripting
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillsMatrix.programming.map((s) => (
                <span key={s} className="rounded bg-muted px-2 py-1 text-xs font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase text-emerald-600 dark:text-emerald-400">
              Machine Learning & AI
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillsMatrix.dataScienceML.map((s) => (
                <span key={s} className="rounded bg-muted px-2 py-1 text-xs font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase text-amber-600 dark:text-amber-400">
              SCM & Logistics Operations
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillsMatrix.supplyChainOperations.map((s) => (
                <span key={s} className="rounded bg-muted px-2 py-1 text-xs font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase text-rose-600 dark:text-rose-400">
              Data Visualization & BI
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillsMatrix.dataVizAnalytics.map((s) => (
                <span key={s} className="rounded bg-muted px-2 py-1 text-xs font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-mono font-semibold uppercase text-teal-600 dark:text-teal-400">
              Web Architecture & DevOps
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {skillsMatrix.webToolsDevOps.map((s) => (
                <span key={s} className="rounded bg-muted px-2 py-1 text-xs font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-border/60 pt-8 flex items-center justify-between">
        <Link href="/projects">
          <Button variant="outline">View Applied Projects</Button>
        </Link>
        <Link href="/contact">
          <Button>Contact Me</Button>
        </Link>
      </div>
    </div>
  );
}
