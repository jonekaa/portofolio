"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Terminal,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Copy,
  Check,
  QrCode,
  Smartphone,
  Globe,
  Settings,
  Lock,
  ArrowRight,
  ShieldAlert,
  FolderGit2,
  FileText,
  KeyRound,
} from "lucide-react";

interface StudioClientPortalProps {
  initialProjectId: string;
  dataset: string;
  isConfigured: boolean;
}

export function StudioClientPortal({
  initialProjectId,
  dataset,
  isConfigured,
}: StudioClientPortalProps) {
  const [activeProjectId, setActiveProjectId] = useState(initialProjectId || "c2zytnzx");
  const [customInput, setCustomInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const studioUrl = `https://${activeProjectId}.sanity.studio`;
  const manageUrl = `https://www.sanity.io/manage/project/${activeProjectId}`;
  const corsSettingsUrl = `https://www.sanity.io/manage/project/${activeProjectId}/api#cors`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(studioUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted on non-HTTPS
    }
  };

  const handleApplyCustomId = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = customInput.trim();
    if (clean) {
      setActiveProjectId(clean);
      setCustomInput("");
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20 space-y-10">
      {/* Page Header */}
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent" className="font-mono text-xs">
            Content Studio & Administration
          </Badge>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Any-Device Ready
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground flex items-center gap-3">
          <Terminal className="h-8 w-8 text-sky-500" />
          Content Management Portal
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
          Manage your portfolio case studies, upload project screenshots, and publish blog notes
          without editing code or touching Git, accessible from any laptop, tablet, or phone.
        </p>
      </header>

      {/* Main Studio Gateway Card */}
      <Card className="border-border/80 bg-muted/20 shadow-sm">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              CMS Architecture Status
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium ${
                isConfigured
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                  : "bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {isConfigured ? "Sanity Studio Connected" : "Local Data Fallback Active"}
            </span>
          </div>
          <CardTitle className="text-xl">
            {isConfigured ? "Live Headless CMS Connected" : "Resilient Fallback Mode"}
          </CardTitle>
          <CardDescription>
            Target project dataset:{" "}
            <span className="font-mono text-foreground font-semibold">{dataset}</span> (Project ID:{" "}
            <span className="font-mono text-foreground font-semibold">{activeProjectId}</span>)
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 rounded bg-card border border-border/60 space-y-1">
              <span className="text-muted-foreground">Sanity Project ID:</span>
              <p className="font-semibold text-foreground truncate">{activeProjectId}</p>
            </div>
            <div className="p-3 rounded bg-card border border-border/60 space-y-1">
              <span className="text-muted-foreground">Target Dataset:</span>
              <p className="font-semibold text-foreground">{dataset}</p>
            </div>
          </div>

          {/* Quick Direct Link Display */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-3 rounded-lg bg-card border border-border/80 text-xs">
            <div className="flex-1 font-mono text-foreground truncate flex items-center gap-2">
              <Globe className="h-4 w-4 text-sky-500 shrink-0" />
              <span className="truncate">{studioUrl}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
                className="gap-1.5 font-mono text-xs w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" /> Copy Link
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowQr(!showQr)}
                className="gap-1.5 font-mono text-xs w-full sm:w-auto"
                title="Scan QR on phone"
              >
                <QrCode className="h-3.5 w-3.5" />
                {showQr ? "Hide QR" : "Phone QR"}
              </Button>
            </div>
          </div>

          {/* QR Code expansion for mobile phones */}
          {showQr && (
            <div className="p-4 rounded-lg bg-card border border-border/80 flex flex-col sm:flex-row items-center gap-4 animate-in fade-in duration-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                  studioUrl
                )}`}
                alt="Sanity Studio QR Code"
                width={130}
                height={130}
                className="rounded-md border border-border/60 bg-white p-1.5 shrink-0"
              />
              <div className="space-y-1.5 text-xs text-muted-foreground text-center sm:text-left">
                <p className="font-semibold text-foreground flex items-center justify-center sm:justify-start gap-1.5">
                  <Smartphone className="h-4 w-4 text-emerald-500" /> Open directly on your personal phone
                </p>
                <p>
                  Using someone else&apos;s computer? Scan this QR code with your camera to access Sanity Studio
                  on your own phone without logging in on their device.
                </p>
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={studioUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                Launch Sanity Studio <ExternalLink className="h-4 w-4" />
              </Button>
            </a>

            <a
              href={manageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" className="gap-2 text-xs">
                <Settings className="h-3.5 w-3.5" /> Sanity Manage
              </Button>
            </a>
          </div>

          <Link href="/api/revalidate?secret=demo-secret" target="_blank">
            <Button variant="outline" size="sm" className="gap-1.5 font-mono text-xs">
              <RefreshCw className="h-3.5 w-3.5" /> Trigger ISR Revalidate
            </Button>
          </Link>
        </CardFooter>
      </Card>

      {/* Shared Device Guide & Security Tips */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2">
          <KeyRound className="h-5 w-5 text-sky-500" />
          Accessing From Someone Else&apos;s Device
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-border/80 p-4 space-y-2 bg-card/60">
            <div className="flex items-center gap-2 font-semibold text-sm text-foreground">
              <Lock className="h-4 w-4 text-amber-500" />
              1. Use Incognito Window
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Open a Private/Incognito window (<code className="text-xs">Ctrl+Shift+N</code> / <code className="text-xs">Cmd+Shift+N</code>) before logging into Sanity. This ensures your Google, GitHub, or Sanity session cookies aren&apos;t saved on this machine.
            </p>
          </Card>

          <Card className="border-border/80 p-4 space-y-2 bg-card/60">
            <div className="flex items-center gap-2 font-semibold text-sm text-foreground">
              <Smartphone className="h-4 w-4 text-emerald-500" />
              2. Or Use Phone QR Scan
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Click <strong>&quot;Phone QR&quot;</strong> above to scan the URL with your own smartphone. Sanity Studio is fully responsive and touch-friendly for publishing on the go.
            </p>
          </Card>

          <Card className="border-border/80 p-4 space-y-2 bg-card/60">
            <div className="flex items-center gap-2 font-semibold text-sm text-foreground">
              <ShieldAlert className="h-4 w-4 text-rose-500" />
              3. Remember to Sign Out
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              When finished editing on a shared device, click your avatar inside Sanity Studio and select <strong>Sign Out</strong>, or simply close the Incognito session.
            </p>
          </Card>
        </div>
      </section>

      {/* Advanced Project Switcher / CORS Config */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/80">
          <CardHeader className="space-y-1 pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Globe className="h-4 w-4 text-sky-500" />
              Sanity CORS Configuration
            </CardTitle>
            <CardDescription className="text-xs">
              Ensure this domain or network IP can communicate with Sanity:
            </CardDescription>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-3">
            <p>
              If previewing or testing API queries from a new deployment URL or custom domain, remember to add your domain to Sanity&apos;s allowed CORS origins:
            </p>
            <div className="p-2.5 rounded bg-muted font-mono text-[11px] text-foreground space-y-1">
              <p>Allowed Origins: <span className="text-emerald-500 font-semibold">http://localhost:3000</span>, <span className="text-emerald-500 font-semibold">https://your-domain.com</span></p>
              <p>Allow credentials: <span className="text-emerald-500 font-semibold">Enabled</span></p>
            </div>
            <a
              href={corsSettingsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-500 hover:underline font-mono text-xs"
            >
              Open Sanity CORS Settings <ExternalLink className="h-3 w-3" />
            </a>
          </CardContent>
        </Card>

        <Card className="border-border/80">
          <CardHeader className="space-y-1 pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Settings className="h-4 w-4 text-teal-500" />
              Switch Project ID (Temporary)
            </CardTitle>
            <CardDescription className="text-xs">
              Need to access a staging or alternative Sanity project?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <form onSubmit={handleApplyCustomId} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. c2zytnzx"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                className="flex-1 rounded-md border border-input bg-background px-3 py-1.5 text-xs font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <Button type="submit" size="sm" variant="secondary" className="text-xs font-mono">
                Switch
              </Button>
            </form>
            <p className="text-[11px] text-muted-foreground">
              Currently active: <code className="text-foreground">{activeProjectId}</code>
              {activeProjectId !== "c2zytnzx" && (
                <button
                  onClick={() => setActiveProjectId("c2zytnzx")}
                  className="ml-2 text-sky-500 underline"
                >
                  Reset to default
                </button>
              )}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Schemas Quick Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/80">
          <CardHeader className="space-y-2">
            <CardTitle className="text-base flex items-center gap-2">
              <FolderGit2 className="h-4 w-4 text-sky-500" />
              Portfolio Projects Schema
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
              Blog Posts Schema
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

      {/* Footer Navigation */}
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
