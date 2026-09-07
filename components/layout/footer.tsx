import React from "react";
import Link from "next/link";
import { profileData } from "@/lib/data/profile";
import { Mail, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background/50 py-12 transition-colors">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <p className="text-sm font-semibold tracking-tight text-foreground">
              {profileData.name}
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              &ldquo;{profileData.tagline}&rdquo; · Surabaya, Indonesia
            </p>
          </div>

          {/* Center / Social Links */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 hover:bg-muted hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 hover:bg-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="rounded-md p-2 hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Email Me"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Right Column / Tech Badge */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span>Secure & Static · Next.js 15</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
