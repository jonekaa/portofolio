import React from "react";
import type { Metadata } from "next";
import { profileData } from "@/lib/data/profile";
import { ContactForm } from "@/components/contact/contact-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/motion";
import { Mail, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profileData.name} - Open for remote data science and supply chain engineering opportunities.`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-20 space-y-12">
      <header className="space-y-3">
        <FadeIn>
          <Badge variant="accent" className="font-mono text-xs">
            Direct Reachout
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-2">
            Let&apos;s Connect
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Have an open remote role, a complex inventory/logistics puzzle, or a collaborative project?
            Send a note directly or reach out on my socials.
          </p>
        </FadeIn>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Direct Channels & Status */}
        <div className="space-y-6">
          <Card className="border-border/80">
            <CardContent className="p-5 space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-muted-foreground uppercase">
                  Availability
                </span>
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open for Remote Roles</span>
                </div>
                <p className="text-xs text-muted-foreground pt-1">
                  Full-time or selective contract opportunities in Data Science, Analytics, and SCM Tech.
                </p>
              </div>

              <div className="border-t border-border/40 pt-3 space-y-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3 text-sm text-foreground hover:text-sky-500 transition-colors group"
                >
                  <div className="rounded bg-muted p-2 group-hover:bg-sky-500/10 transition-colors">
                    <Mail className="h-4 w-4 text-sky-500" />
                  </div>
                  <div className="text-xs truncate">
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground truncate">{profileData.email}</div>
                  </div>
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-sky-500 transition-colors group"
                >
                  <div className="rounded bg-muted p-2 group-hover:bg-sky-500/10 transition-colors">
                    <LinkedinIcon className="h-4 w-4 text-sky-500" />
                  </div>
                  <div className="text-xs truncate">
                    <div className="font-medium text-foreground">LinkedIn</div>
                    <div className="text-muted-foreground">jonekaa</div>
                  </div>
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-sky-500 transition-colors group"
                >
                  <div className="rounded bg-muted p-2 group-hover:bg-sky-500/10 transition-colors">
                    <GithubIcon className="h-4 w-4 text-sky-500" />
                  </div>
                  <div className="text-xs truncate">
                    <div className="font-medium text-foreground">GitHub</div>
                    <div className="text-muted-foreground">github.com/jonekaa</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-sm text-muted-foreground pt-1">
                  <div className="rounded bg-muted p-2">
                    <MapPin className="h-4 w-4 text-rose-500" />
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-foreground">Base Location</div>
                    <div>{profileData.location}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg border border-border/50 bg-muted/20 p-4 text-xs text-muted-foreground flex items-center gap-2 font-mono">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>Rate-limited & protected against automated bot submissions.</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-2">
          <Card className="border-border/80 p-6 sm:p-8">
            <div className="mb-6 space-y-1">
              <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-sky-500" />
                Send a Direct Message
              </h2>
              <p className="text-xs text-muted-foreground">
                All fields validated on server-side. No exposed client secrets.
              </p>
            </div>

            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  );
}
