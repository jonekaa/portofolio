import React from "react";
import Link from "next/link";
import { profileData } from "@/lib/data/profile";
import { getProjects } from "@/lib/sanity/client";
import { getBlogPosts } from "@/lib/sanity/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/motion";
import {
  ArrowRight,
  Download,
  MapPin,
  ExternalLink,
  Layers,
  TrendingUp,
  Award,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default async function HomePage() {
  const allProjects = await getProjects();
  const featuredProjects = allProjects.filter((p) => p.isFeatured).slice(0, 3);
  const blogPosts = await getBlogPosts();
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-20 space-y-24">
      {/* Hero Section */}
      <section className="space-y-6">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profileData.status.text}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {profileData.name}
          </h1>
          <p className="text-lg sm:text-xl text-sky-600 dark:text-sky-400 font-mono font-medium">
            {profileData.title}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {profileData.roleDescription} Grounded on the fulfillment frontline at{" "}
            <strong className="text-foreground font-semibold">PT Wings Surya</strong>,
            with honors in Data Science from{" "}
            <strong className="text-foreground font-semibold">Petra Christian University</strong> and{" "}
            <strong className="text-foreground font-semibold">Bangkit Academy</strong>.
          </p>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.3} className="flex flex-wrap items-center gap-3 pt-2">
          <Link href="/projects">
            <Button size="lg" className="gap-2 font-medium">
              Explore Projects <ArrowRight className="h-4 w-4" />
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
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="font-medium">
              Get in Touch
            </Button>
          </Link>

          <div className="flex items-center gap-2 pl-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border p-2.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border p-2.5 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        {/* Quick Highlights / Metrics Strip */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border/60">
            <div className="space-y-1">
              <div className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-sky-500" /> SCM Operations
              </div>
              <p className="text-sm font-semibold text-foreground">
                PT Wings Surya
              </p>
              <p className="text-xs text-muted-foreground">Fulfillment & IC</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-emerald-500" /> Academic Honors
              </div>
              <p className="text-sm font-semibold text-foreground">
                GPA 3.66 / 4.00
              </p>
              <p className="text-xs text-muted-foreground">Data Science & Analytics</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5 text-amber-500" /> Bangkit Academy
              </div>
              <p className="text-sm font-semibold text-foreground">
                With Distinction
              </p>
              <p className="text-xs text-muted-foreground">Machine Learning Cohort</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-rose-500" /> Location
              </div>
              <p className="text-sm font-semibold text-foreground">
                Surabaya, Indonesia
              </p>
              <p className="text-xs text-muted-foreground">Available Globally (Remote)</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-sky-500 font-semibold tracking-wider uppercase">
              Selected Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
              Featured Case Studies & Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>View all projects ({allProjects.length})</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card
              key={project.slug}
              className="flex flex-col justify-between border-border/80 hover:border-foreground/30 hover:shadow-md transition-all duration-300 group"
            >
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="accent" className="text-[10px]">
                    {project.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {project.date}
                  </span>
                </div>
                <CardTitle className="text-lg group-hover:text-sky-500 transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title.split(":")[0]}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.summary}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/40">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="rounded bg-muted/50 p-2">
                        <div className="text-[10px] font-mono text-muted-foreground truncate">
                          {m.label}
                        </div>
                        <div className="text-sm font-bold font-mono text-foreground">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag) => (
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
                    Deep Dive <ArrowRight className="h-3 w-3" />
                  </Link>
                ) : (
                  <span className="text-xs text-muted-foreground">Case Study</span>
                )}

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title="GitHub Source"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Operational Philosophy / The Bridge */}
      <section className="rounded-2xl border border-border/80 bg-gradient-to-br from-card to-muted/20 p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-4">
          <Badge variant="outline" className="font-mono text-xs">
            Core Philosophy
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Operational Empathy Meets Computational Rigor
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Data science is only as valuable as the real-world operational friction it eliminates.
            By combining physical supply chain execution with machine learning, automation macros,
            and software engineering, I bridge the gap between executive strategy and factory-floor realities.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link href="/about">
            <Button variant="outline" className="gap-2">
              Read My Journey <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/experience">
            <Button variant="ghost">View Career Timeline</Button>
          </Link>
        </div>
      </section>

      {/* Recent Writing / Blog Section */}
      {recentPosts.length > 0 && (
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-mono text-sky-500 font-semibold tracking-wider uppercase">
                Thoughts & Write-ups
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
                Recent Articles
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              All posts →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <Card
                key={post.slug}
                className="hover:border-foreground/30 transition-all group"
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span>{post.publishedAt}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-base group-hover:text-sky-500 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
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
            ))}
          </div>
        </section>
      )}

      {/* Direct Contact CTA Banner */}
      <section className="text-center py-12 border-t border-border/60 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Let&apos;s Build Resilient Systems Together
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
          Whether you are looking for a dedicated Data Scientist / SCM Engineer for your team
          or want to consult on optimizing industrial workflows, my inbox is open.
        </p>
        <div className="pt-2">
          <Link href="/contact">
            <Button size="lg" className="font-semibold gap-2">
              Send a Message <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
