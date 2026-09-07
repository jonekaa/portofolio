"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Unlock, KeyRound, ArrowLeft, ExternalLink, RefreshCw, FolderGit2, FileText, ShieldAlert } from "lucide-react";

interface StudioGateProps {
  projectId: string;
  dataset: string;
  isConfigured: boolean;
}

export function StudioGate({ projectId, dataset, isConfigured }: StudioGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Check if session was already verified in this tab
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem("jon_studio_auth");
    if (sessionAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Read configured admin key from env or fallback to Jon's personal admin password
    const validKey = process.env.NEXT_PUBLIC_ADMIN_KEY || "jonathan-admin-2026";

    setTimeout(() => {
      if (password === validKey) {
        setIsAuthenticated(true);
        sessionStorage.setItem("jon_studio_auth", "true");
      } else {
        setError("Access Denied: Incorrect administrator passcode.");
      }
      setLoading(false);
    }, 400);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("jon_studio_auth");
    setIsAuthenticated(false);
    setPassword("");
  };

  // LOCKED STATE: Shown to everyone unless they enter the correct admin password
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto max-w-md px-4 py-20">
        <Card className="border-border/80 shadow-lg">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-rose-500">
              <Lock className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl font-bold">Admin Portal Restricted</CardTitle>
            <CardDescription className="text-xs leading-relaxed">
              This area is restricted to the site owner. Please enter your administrator passcode to access content controls.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              {error && (
                <div className="rounded-md border border-rose-500/30 bg-rose-500/10 p-2.5 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="block text-xs font-mono text-muted-foreground">
                  Admin Passcode
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter passcode..."
                    required
                    autoFocus
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                  />
                  <KeyRound className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground opacity-50" />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-2 pt-0">
              <Button type="submit" disabled={loading || !password} className="w-full">
                {loading ? "Verifying..." : "Authenticate & Unlock"}
              </Button>
              <Link href="/" className="w-full">
                <Button variant="ghost" size="sm" className="w-full text-xs text-muted-foreground">
                  <ArrowLeft className="h-3.5 w-3.5 mr-1" /> Return to Homepage
                </Button>
              </Link>
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  }

  // UNLOCKED STATE: Only shown AFTER successful passcode verification!
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20 space-y-10">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500">
            <Unlock className="h-3.5 w-3.5" /> Session Authenticated (Admin Mode)
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Content Management Controls
          </h1>
        </div>

        <Button variant="outline" size="sm" onClick={handleLogout} className="text-xs">
          Lock & Log Out
        </Button>
      </header>

      {/* Admin Panel */}
      <Card className="border-border/80 bg-muted/20">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground uppercase">
              Connected CMS Target
            </span>
            <Badge variant="success" className="text-xs font-mono">
              Dataset: {dataset}
            </Badge>
          </div>
          <CardTitle className="text-xl">Sanity Studio Cloud Management</CardTitle>
          <CardDescription>
            You can manage your projects, upload images, and edit blog posts through Sanity.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 rounded bg-card border border-border/60 space-y-1">
              <span className="text-muted-foreground">Project ID:</span>
              <p className="font-semibold text-foreground">{projectId}</p>
            </div>
            <div className="p-3 rounded bg-card border border-border/60 space-y-1">
              <span className="text-muted-foreground">Dataset:</span>
              <p className="font-semibold text-foreground">{dataset}</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-4">
          <div className="flex items-center gap-2">
            <a
              href="http://localhost:3333"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                Launch Local Studio (Port 3333) <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <a
              href="https://www.sanity.io/manage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                Sanity Manage <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <Link href="/api/revalidate?secret=demo-secret" target="_blank">
            <Button variant="outline" size="sm" className="gap-1.5 font-mono text-xs">
              <RefreshCw className="h-3.5 w-3.5" /> Trigger Cache Revalidation
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-border/80">
          <CardHeader className="space-y-2">
            <CardTitle className="text-base flex items-center gap-2">
              <FolderGit2 className="h-4 w-4 text-sky-500" /> Managing Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-2">
            <p>
              In Sanity Manage, projects can have deep-dive metrics, screenshots, and live demo links.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/80">
          <CardHeader className="space-y-2">
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="h-4 w-4 text-emerald-500" /> Publishing Articles
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-2">
            <p>
              Rich-text or Markdown content with automatic reading time estimation.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="border-t border-border/60 pt-6">
        <Link href="/">
          <Button variant="outline">← Return to Public Portfolio</Button>
        </Link>
      </div>
    </div>
  );
}
