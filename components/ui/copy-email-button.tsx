"use client";

import * as React from "react";
import { Mail, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  variant?: "badge" | "button" | "minimal";
}

export function CopyEmailButton({
  email,
  className,
  variant = "button",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: window.location mailto
      window.location.href = `mailto:${email}`;
    }
  };

  if (variant === "badge") {
    return (
      <button
        onClick={handleCopy}
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/40 px-3 py-1 text-xs font-mono text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className
        )}
        title="Click to copy email address"
        aria-label={`Copy email address ${email}`}
      >
        {copied ? (
          <>
            <Check className="h-3 w-3 text-emerald-500" />
            <span className="text-emerald-500 font-medium">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-3 w-3" />
            <span>{email}</span>
          </>
        )}
      </button>
    );
  }

  if (variant === "minimal") {
    return (
      <button
        onClick={handleCopy}
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded px-1.5 py-0.5",
          className
        )}
        title="Click to copy email address"
        aria-label={`Copy email address ${email}`}
      >
        {copied ? (
          <>
            <Check className="h-3 w-3 text-emerald-500" />
            <span className="text-emerald-500">Copied</span>
          </>
        ) : (
          <>
            <Copy className="h-3 w-3" />
            <span>Copy email</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-border/80 bg-background/80 px-4 py-2 text-sm font-medium text-foreground hover:bg-muted hover:border-foreground/30 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      title="Click to copy email address"
      aria-label={`Copy email address ${email}`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-500" />
          <span className="text-emerald-500 font-semibold font-mono text-xs">Email Copied to Clipboard</span>
        </>
      ) : (
        <>
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="font-mono text-xs">{email}</span>
          <span className="text-[10px] text-muted-foreground font-sans uppercase tracking-wider bg-muted px-1.5 py-0.5 rounded ml-1">Copy</span>
        </>
      )}
    </button>
  );
}
