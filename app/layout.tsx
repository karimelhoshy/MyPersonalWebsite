import type { Metadata, Viewport } from "next";
import { Instrument_Serif, IBM_Plex_Mono, Inter_Tight } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE } from "@/lib/resume";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#0A0908" },
    { media: "(prefers-color-scheme: light)", color: "#F5F1E8" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Karim El Hoshy — AI Engineer at EY, Founding Engineer at Beiti. Production GenAI across 5 industries. Montreal · open to opportunities.",
  applicationName: `${SITE.name} portfolio`,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    "AI engineer", "full-stack engineer", "GenAI", "LangGraph", "Gemini",
    "Databricks", "Montreal", "Karim El Hoshy",
  ],
  openGraph: {
    type: "profile",
    siteName: `${SITE.name} portfolio`,
    title: `${SITE.name} — ${SITE.role}`,
    description: "Ships production GenAI systems & full-stack products.",
    url: SITE.url,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: "Ships production GenAI systems & full-stack products.",
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

// JSON-LD escape: prevent the literal "</script>" sequence from breaking
// out of the script tag, even though our controlled data never contains it.
function safeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: SITE.role,
    url: SITE.url,
    email: `mailto:${SITE.email}`,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montreal",
      addressCountry: "CA",
    },
    knowsLanguage: ["English", "French", "Arabic", "German", "Spanish"],
    sameAs: [SITE.linkedin, SITE.github],
    alumniOf: { "@type": "CollegeOrUniversity", name: "McGill University" },
    worksFor: { "@type": "Organization", name: "EY" },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${plexMono.variable} ${interTight.variable}`}
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <script type="application/ld+json">
          {safeJsonLd(personJsonLd)}
        </script>
      </body>
    </html>
  );
}
