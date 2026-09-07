import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/sanity/client";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/motion";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Technical Writing",
  description: "Articles on supply chain fulfillment, machine learning, geospatial algorithms, and computational linguistics by Jonathan Eka.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20 space-y-12">
      <header className="space-y-3">
        <FadeIn>
          <Badge variant="accent" className="font-mono text-xs">
            Writing & Insights
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-2">
            Technical Writing & Notes
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Reflections from the industrial fulfillment frontline, algorithmic breakdowns, and data science experiments.
          </p>
        </FadeIn>
      </header>

      <div className="space-y-6">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="border-border/80 hover:border-foreground/30 transition-all group"
          >
            <CardHeader className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" /> {post.publishedAt}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                  <Badge variant="secondary" className="text-[10px]">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardTitle className="text-xl sm:text-2xl group-hover:text-sky-500 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>

              <CardDescription className="text-sm sm:text-base leading-relaxed line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>

            <CardFooter className="pt-0 flex items-center justify-between border-t border-border/40">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1 shrink-0 ml-4"
              >
                Read full note <ArrowRight className="h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
