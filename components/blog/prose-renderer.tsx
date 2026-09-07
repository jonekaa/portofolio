import React from "react";

/**
 * Parses inline markdown tokens:
 * - **bold**
 * - *italic*
 * - `code`
 * - [link text](url)
 */
export function formatInlineMarkdown(text: string): React.ReactNode {
  // Regex splitting by markdown tokens
  const tokenRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, i) => {
    if (!part) return null;

    // Bold: **text**
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Italic: *text*
    if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
      return <em key={i} className="italic text-foreground/90">{part.slice(1, -1)}</em>;
    }

    // Inline Code: `code`
    if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
      return (
        <code
          key={i}
          className="rounded bg-muted/80 px-1.5 py-0.5 font-mono text-xs text-foreground border border-border/50"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Links: [label](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-600 dark:text-sky-400 font-medium underline underline-offset-4 hover:text-sky-500"
        >
          {label}
        </a>
      );
    }

    return part;
  });
}

interface MarkdownProseProps {
  content: string;
}

export function MarkdownProse({ content }: MarkdownProseProps) {
  const blocks = content.split("\n\n");

  return (
    <div className="space-y-6 text-foreground/90 text-base sm:text-lg leading-relaxed">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Headings
        if (trimmed.startsWith("### ")) {
          return (
            <h3
              key={idx}
              className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4"
            >
              {trimmed.replace("### ", "")}
            </h3>
          );
        }

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={idx}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground pt-6 border-b border-border/50 pb-2"
            >
              {trimmed.replace("## ", "")}
            </h2>
          );
        }

        // Unordered / Ordered Lists
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ") || /^\d+\.\s/.test(trimmed)) {
          const lines = trimmed.split("\n");
          return (
            <ul key={idx} className="space-y-2.5 pl-5 list-disc text-muted-foreground text-justify">
              {lines.map((line, lIdx) => {
                const cleanedLine = line.replace(/^[-*]|\d+\.\s*/, "").trim();
                return (
                  <li key={lIdx} className="leading-relaxed">
                    {formatInlineMarkdown(cleanedLine)}
                  </li>
                );
              })}
            </ul>
          );
        }

        // Regular Paragraph - justified
        return (
          <p key={idx} className="text-muted-foreground leading-relaxed text-justify hyphens-auto">
            {formatInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
