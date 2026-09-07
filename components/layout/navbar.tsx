"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close mobile menu on path change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-medium tracking-tight text-foreground transition-opacity hover:opacity-90"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-foreground text-background font-mono text-xs font-bold transition-transform group-hover:scale-105">
            JE
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">
              Jonathan Eka
            </span>
            <span className="text-[11px] text-muted-foreground font-mono leading-none">
              SCM Tech & Data
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-1.5 transition-all",
                  isActive
                    ? "bg-muted text-foreground font-semibold"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Actions (CMS Studio Link + Theme Toggle + Mobile Menu Toggle) */}
        <div className="flex items-center gap-2">
          {/* CMS Studio Portal Link */}
          <Link
            href="/studio"
            className="hidden sm:inline-flex items-center gap-1 rounded-md border border-border/60 bg-muted/30 px-2.5 py-1 text-xs font-mono text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            title="Manage Content via Studio"
          >
            <Terminal className="h-3 w-3" />
            <span>Studio</span>
          </Link>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 bg-background/60 md:hidden text-foreground"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-lg px-4 py-4 md:hidden">
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-2 text-base transition-colors",
                    isActive
                      ? "bg-muted text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-50" />
                </Link>
              );
            })}
            <div className="pt-2 border-t border-border mt-2">
              <Link
                href="/studio"
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-muted-foreground hover:text-foreground"
              >
                <Terminal className="h-3.5 w-3.5" />
                <span>Open CMS Studio (/studio)</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
