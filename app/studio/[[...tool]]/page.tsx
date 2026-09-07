import React from "react";
import type { Metadata } from "next";
import { isSanityConfigured, projectId, dataset } from "@/lib/sanity/config";
import { StudioGate } from "@/components/studio/studio-gate";

export const metadata: Metadata = {
  title: "Admin Portal",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StudioPortalPage() {
  return (
    <StudioGate
      projectId={projectId}
      dataset={dataset}
      isConfigured={isSanityConfigured}
    />
  );
}
