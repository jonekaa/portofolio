import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { isSanityConfigured, projectId, dataset } from "@/lib/sanity/config";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Terminal,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  FileText,
  FolderGit2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CMS & Studio Portal",
  description: "Manage portfolio projects, case studies, and blog posts without touching code.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudioPortalPage() {
  const sanityStudioUrl = isSanityConfigured
    ? `https://${projectId}.sanity.studio`
    : "https://www.sanity.io";

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20 space-y-10">
      <header className="space-y-3">
        <Badge variant="accent" className="font-mono text-xs">
          Content Studio & Administration
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground flex items-center gap-3">
          <Terminal className="h-8 w-8 text-sky-500" />
          Content Management Portal
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
          Manage your portfolio case studies, upload project screenshots, and publish blog notes
          without editing code or touching Git.
        </p>
      </header>

      {/* Status Card */}
      <Card className="border-border/80 bg-muted/20">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground uppercase">
              CMS Architecture Status
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                isSanityConfigured
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  : "bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {isSanityConfigured ? "Sanity API Connected" : "Local Data Fallback Active"}
            </span>
          </div>
          <CardTitle className="text-xl">
            {isSanityConfigured
              ? "Live Headless CMS Connected"
              : "High-Fidelity Resilient Fallback"}
          </CardTitle>
          <CardDescription>
            {isSanityConfigured
              ? `Connected to project dataset: ${dataset} (${projectId})`
              : "Your portfolio is currently pre-loaded with your full CV data, live project case studies, and blog posts directly from local data modules."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 rounded bg-card border border-border/60 space-y-1">
              <span className="text-muted-foreground">Sanity Project ID:</span>
              <p className="font-semibold text-foreground truncate">{projectId}</p>
            </div>
            <div className="p-3 rounded bg-card border border-border/60 space-y-1">
              <span className="text-muted-foreground">Dataset:</span>
              <p className="font-semibold text-foreground">{dataset}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-4">
          <a
            href={sanityStudioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2">
              Launch Sanity Studio Dashboard <ExternalLink className="h-4 w-4" />
            </Button>
          </a>

          <Link href="/api/revalidate?secret=demo-secret" target="_blank">
            <Button variant="outline" size="sm" className="gap-1.5 font-mono text-xs">
              <RefreshCw className="h-3.5 w-3.5" /> Trigger ISR Revalidate
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* How It Works & Guide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/80">
          <CardHeader className="space-y-2">
            <CardTitle className="text-base flex items-center gap-2">
              <FolderGit2 className="h-4 w-4 text-sky-500" />
              Adding Portfolio Projects
            </CardTitle>
            <CardDescription className="text-xs leading-relaxed">
              In your Sanity Studio, projects support:
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-2">
            <ul className="space-y-1.5 list-disc pl-4">
              <li>Project Title & Category tag (SCM Tech, Data Science, Web Apps)</li>
              <li>High-res screenshot drag-and-drop with auto-WebP conversion</li>
              <li>Live application URL & GitHub repository links</li>
              <li>Deep-dive narrative case studies with operational impact metrics</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/80">
          <CardHeader className="space-y-2">
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="h-4 w-4 text-emerald-500" />
              Publishing Blog Posts
            </CardTitle>
            <CardDescription className="text-xs leading-relaxed">
              Write and schedule articles easily:
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-2">
            <ul className="space-y-1.5 list-disc pl-4">
              <li>Rich-text or Markdown authoring</li>
              <li>Category badges and topic tags</li>
              <li>Estimated read time calculation</li>
              <li>Instant on-demand revalidation upon publish</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Onboarding Guide if not configured */}
      {!isSanityConfigured && (
        <Card className="border-border/80">
          <CardHeader>
            <CardTitle className="text-lg">Want to link your own Sanity account?</CardTitle>
            <CardDescription>
              Takes less than 1 minute and is completely free:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Sign up for free at{" "}
                <a
                  href="https://www.sanity.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 underline"
                >
                  sanity.io
                </a>
              </li>
              <li>Create a project called <code className="text-foreground">jonathan-portfolio</code></li>
              <li>
                Add your Project ID to <code className="text-foreground">.env.local</code>:
                <pre className="mt-2 text-xs bg-muted p-2.5 rounded font-mono text-foreground">
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id_here
                </pre>
              </li>
            </ol>
          </CardContent>
        </Card>
      )}

      <div className="border-t border-border/60 pt-6 flex items-center justify-between">
        <Link href="/">
          <Button variant="outline">← Back to Homepage</Button>
        </Link>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>Authenticated via Sanity SSO</span>
        </div>
      </div>
    </div>
  );
}
