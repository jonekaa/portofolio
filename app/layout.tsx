import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { profileData } from "@/lib/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profileData.name} · SCM Tech & Data Scientist`,
    template: `%s · ${profileData.name}`,
  },
  description: `${profileData.title} · ${profileData.roleDescription}`,
  keywords: [
    "Jonathan Eka Saputra",
    "Supply Chain Management",
    "Data Science",
    "Machine Learning",
    "FMCG Logistics",
    "Inventory Control",
    "Python",
    "TensorFlow",
    "Surabaya",
  ],
  authors: [{ name: profileData.name, url: profileData.github }],
  creator: profileData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jonathaneka.com",
    title: `${profileData.name} · SCM Tech & Data Scientist`,
    description: profileData.roleDescription,
    siteName: profileData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} · SCM Tech & Data Scientist`,
    description: profileData.roleDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
