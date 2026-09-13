"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Loader2, Send, Mail, ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website_url_hp: "",
    },
  });

  const formData = watch();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to submit message");
      }

      setStatus("success");
      reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message || "Something went wrong while sending your message. Please try again."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot Bot Trap Field: invisible to humans */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_hp">Do not fill this field</label>
        <input
          id="website_url_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website_url_hp")}
        />
      </div>

      {/* Success Notification */}
      {status === "success" && (
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-600 dark:text-emerald-400 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold">Message delivered successfully!</p>
            <p className="text-xs mt-0.5 opacity-90">
              Thank you for reaching out, Jon has received your note and will respond soon.
            </p>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {status === "error" && (
        <div className="rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-600 dark:text-rose-400 space-y-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
            <div className="space-y-1">
              <p className="font-semibold">Message delivery notice</p>
              <p className="text-xs leading-relaxed opacity-95">{errorMessage}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-rose-500/20 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:jonathansaputra03@gmail.com?subject=${encodeURIComponent(
                formData.subject || "Portfolio Inquiry"
              )}&body=${encodeURIComponent(
                `Hi Jonathan,\n\n${formData.message || ""}\n\n---\nSent by: ${
                  formData.name || "A visitor"
                } (${formData.email || "No email provided"})`
              )}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 text-xs font-semibold shadow-sm transition-all"
            >
              <Mail className="h-3.5 w-3.5" /> Send via your Email App (Pre-filled) <ArrowUpRight className="h-3 w-3" />
            </a>
            <span className="text-[11px] opacity-75">
              Your message is preserved and won&apos;t be lost.
            </span>
          </div>
        </div>
      )}

      {/* Name and Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="block text-xs font-mono font-medium text-foreground"
          >
            Your Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            disabled={status === "submitting"}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all disabled:opacity-50"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-rose-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-xs font-mono font-medium text-foreground"
          >
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="jane@example.com"
            disabled={status === "submitting"}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all disabled:opacity-50"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-rose-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label
          htmlFor="subject"
          className="block text-xs font-mono font-medium text-foreground"
        >
          Subject / Reason <span className="text-rose-500">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Collaboration inquiry, Remote role, or Project question"
          disabled={status === "submitting"}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all disabled:opacity-50"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-xs text-rose-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-xs font-mono font-medium text-foreground"
        >
          Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me about your project, team, or challenge..."
          disabled={status === "submitting"}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all disabled:opacity-50 resize-y"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-rose-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button & Direct Option */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto gap-2 font-medium"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending message...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Send Message
            </>
          )}
        </Button>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span>Prefer direct email?</span>
          <a
            href="mailto:jonathansaputra03@gmail.com"
            className="text-sky-600 dark:text-sky-400 font-mono font-medium hover:underline inline-flex items-center gap-1"
          >
            <Mail className="h-3 w-3" /> jonathansaputra03@gmail.com
          </a>
        </div>
      </div>
    </form>
  );
}
