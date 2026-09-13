import React from "react";
import Link from "next/link";
import { profileData } from "@/lib/data/profile";
import { getProjects, getBlogPosts } from "@/lib/sanity/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/motion";
import { CopyEmailButton } from "@/components/ui/copy-email-button";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  MapPin,
  ExternalLink,
  Layers,
  TrendingUp,
  Award,
  Network,
  Cpu,
  Boxes,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";

export default async function HomePage() {
  const allProjects = await getProjects();
  const dcSearcher = allProjects.find((p) => p.slug === "dc-searcher") || allProjects[0];
  const secondaryProjects = allProjects.filter((p) => p.slug !== "dc-searcher").slice(0, 2);
  const blogPosts = await getBlogPosts();
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-20 space-y-28">
      {/* 1. Hero Section */}
      <section className="space-y-8">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-xs font-mono text-muted-foreground">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-foreground/90">{profileData.status.text}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08] text-balance">
            {profileData.name}
          </h1>
          <p className="text-lg sm:text-xl font-mono text-sky-600 dark:text-sky-400 font-medium">
            {profileData.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty">
            {profileData.roleDescription} Grounded on the fulfillment frontline at{" "}
            <strong className="text-foreground font-semibold">PT Wings Surya</strong>,
            with high honors in Data Science from{" "}
            <strong className="text-foreground font-semibold">Petra Christian University</strong> and Machine Learning distinction from{" "}
            <strong className="text-foreground font-semibold">Bangkit Academy</strong>.
          </p>
        </FadeIn>

        {/* Action Buttons & Fast Channels */}
        <FadeIn delay={0.3} className="flex flex-wrap items-center gap-3 pt-2">
          <Link href="#featured-work">
            <Button size="lg" className="gap-2 font-medium shadow-sm">
              Explore Case Studies <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Jonathan_Eka_Saputra_CV.pdf"
          >
            <Button variant="outline" size="lg" className="gap-2 font-medium">
              <Download className="h-4 w-4" /> Download CV
            </Button>
          </a>
          <CopyEmailButton email={profileData.email} />

          <div className="flex items-center gap-1.5 pl-1">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border/80 p-2.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border/80 p-2.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={profileData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border/80 p-2.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram Profile"
              title="Instagram Profile"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        {/* Telemetry Highlight Strip */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/60">
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-sky-500" /> 01 / SCM Operations
              </div>
              <p className="text-sm font-semibold text-foreground">
                PT Wings Surya
              </p>
              <p className="text-xs text-muted-foreground">Fulfillment & Inventory Control</p>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-emerald-500" /> 02 / Academic Rigor
              </div>
              <p className="text-sm font-semibold text-foreground">
                GPA 3.66 / 4.00
              </p>
              <p className="text-xs text-muted-foreground">Data Science High Honors</p>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 text-amber-500" /> 03 / Machine Learning
              </div>
              <p className="text-sm font-semibold text-foreground">
                Bangkit Distinction
              </p>
              <p className="text-xs text-muted-foreground">Google, GoTo, Traveloka</p>
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-rose-500" /> 04 / Base & Reach
              </div>
              <p className="text-sm font-semibold text-foreground">
                Surabaya, Indonesia
              </p>
              <p className="text-xs text-muted-foreground">Open for Remote Worldwide</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 2. Featured Systems Section (Asymmetric Flagship Spotlight) */}
      <section id="featured-work" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border/40 pb-4">
          <div>
            <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold tracking-wider uppercase">
              Selected Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
              Featured Case Studies & Systems
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>All projects ({allProjects.length})</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Flagship Spotlight: DC-Searcher */}
        {dcSearcher && (
          <FadeIn>
            <div className="rounded-2xl border border-border/80 bg-card/60 hover:border-foreground/30 transition-all duration-300 p-6 sm:p-8 md:p-10 shadow-sm space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-md bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold uppercase tracking-wider">
                  <Network className="h-3.5 w-3.5" /> Flagship SCM Project
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {dcSearcher.date}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Narrative & Links */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    <Link href={`/projects/${dcSearcher.slug}`}>
                      {dcSearcher.title}
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-foreground/80 leading-relaxed">
                    {dcSearcher.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In multi-echelon manufacturing networks like PT Wings Surya, regional distribution centers often face stockout risks while adjacent facilities hold buffer stock. DC-Searcher replaces slow, error-prone manual spreadsheets with instant spatial nearest-neighbor computation and transit time estimations.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {dcSearcher.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link href={`/projects/${dcSearcher.slug}`}>
                      <Button className="gap-2 font-medium">
                        Read Case Study <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    {dcSearcher.liveUrl && (
                      <a
                        href={dcSearcher.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    )}
                    {dcSearcher.githubUrl && (
                      <a
                        href={dcSearcher.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GithubIcon className="h-4 w-4" /> Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Operational Metrics & Architecture Telemetry */}
                <div className="lg:col-span-5 rounded-xl border border-border/60 bg-muted/30 p-6 space-y-6">
                  <div className="flex items-center justify-between border-b border-border/40 pb-3">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                      Operational Impact
                    </span>
                    <span className="text-[10px] font-mono text-emerald-500 font-semibold">
                      VERIFIED BENCHMARKS
                    </span>
                  </div>

                  <div className="space-y-4">
                    {dcSearcher.metrics?.map((m, idx) => (
                      <div key={idx} className="flex items-baseline justify-between border-b border-border/20 pb-3 last:border-0 last:pb-0">
                        <span className="text-xs text-muted-foreground font-mono">
                          {m.label}
                        </span>
                        <span className="text-base sm:text-lg font-bold font-mono text-foreground">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-border/40 space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-sky-500" />
                      Haversine & Road Transit Engine
                    </div>
                    <p className="leading-relaxed pl-5">
                      Computes real travel boundaries instead of straight-line distance, deployed with zero server latency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Secondary Curated Systems: Caraka-ID & Solusi Rumah 1001 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project) => (
            <FadeIn key={project.slug}>
              <Card className="h-full flex flex-col justify-between border-border/80 hover:border-foreground/30 hover:shadow-sm transition-all duration-300 group">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="outline" className="text-[10px] font-mono">
                      {project.category}
                    </Badge>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {project.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/40">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="rounded bg-muted/40 p-2.5 border border-border/40">
                          <div className="text-[10px] font-mono text-muted-foreground truncate">
                            {m.label}
                          </div>
                          <div className="text-sm font-bold font-mono text-foreground mt-0.5">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 flex items-center justify-between border-t border-border/40 mt-auto">
                  {project.hasDeepDive ? (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                    >
                      Read Case Study <ArrowRight className="h-3 w-3" />
                    </Link>
                  ) : (
                    <span className="text-xs text-muted-foreground font-mono">Completed Project</span>
                  )}

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.title} GitHub Source`}
                        title="GitHub Source"
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
                        aria-label={`${project.title} Live Application`}
                        title="Live Application"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. The Bridge: Operational Philosophy & Architecture */}
      <FadeIn>
        <section className="rounded-2xl border border-border/80 bg-muted/20 p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold uppercase tracking-wider">
              Core Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Operational Empathy Meets Computational Rigor
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Data science is only as valuable as the real-world friction it eliminates. By connecting physical factory-floor logistics with machine learning and automated workflow engineering, I bridge the gap between high-level modeling and daily operational execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="rounded-xl border border-border/60 bg-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Boxes className="h-4 w-4 text-sky-500" />
                Physical Logistics Execution
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Hands-on FMCG fulfillment at PT Wings Surya: resolving stock imbalances across national distribution centers, diagnosing order fulfillment bottlenecks, and eliminating manual spreadsheet friction with automated macros.
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Cpu className="h-4 w-4 text-emerald-500" />
                Applied Machine Learning & Modeling
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Academic foundation in Data Science (Petra Christian University high honors, GPA 3.66) and Bangkit ML distinction: predictive modeling, spatial routing algorithms, and production-grade NLP architectures.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border/40">
            <Link href="/about">
              <Button variant="outline" className="gap-2 font-medium">
                Read Personal Background <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/experience">
              <Button variant="ghost" className="font-medium text-muted-foreground hover:text-foreground">
                View Career Timeline
              </Button>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* 4. Recent Technical Writing */}
      {recentPosts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-end justify-between border-b border-border/40 pb-4">
            <div>
              <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold tracking-wider uppercase">
                Technical Writing
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
                Recent Engineering Notes
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              All articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <FadeIn key={post.slug}>
                <Card className="h-full flex flex-col justify-between hover:border-foreground/30 transition-all group">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.publishedAt}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-base group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                    >
                      Read article <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardFooter>
                </Card>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* 5. Direct Conversion & Contact Banner */}
      <FadeIn>
        <section className="rounded-2xl border border-border/80 bg-gradient-to-b from-card to-muted/30 p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
              Direct Contact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Let&apos;s Build Resilient Systems Together
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Available for full-time remote roles in Data Science, AI Engineering, and Supply Chain Automation. Whether evaluating candidates or consulting on logistics workflows, my inbox is open.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <CopyEmailButton email={profileData.email} />
            <Link href="/contact">
              <Button size="default" className="font-medium gap-2">
                Send Direct Message <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
