import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pitbull Construction Solutions | AI-Powered Construction Management",
  description:
    "One platform replacing Procore, Vista, and spreadsheets. AI document intelligence, bid leveling, compliance tracking for general contractors.",
  keywords: "construction management software, construction ERP, Procore alternative, Vista alternative, AI construction, general contractor software, construction project management",
  openGraph: {
    title: "Pitbull Construction Solutions | AI-Powered Construction Management",
    description: "One platform replacing your entire construction tech stack. AI-powered document intelligence, bid leveling, and compliance tracking for GCs.",
    url: "https://pitbullconstructionsolutions.com",
    siteName: "Pitbull Construction Solutions",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Pitbull Construction Solutions - AI-Powered Construction Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitbull Construction Solutions",
    description: "AI-powered construction management that replaces your entire tech stack.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://pitbullconstructionsolutions.com"),
};

// Structured data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pitbull Construction Solutions",
  url: "https://pitbullconstructionsolutions.com",
  description: "AI-powered construction management platform for general contractors",
  foundingDate: "2025",
  industry: "Construction Technology",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pitbull Construction Solutions",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "AI-powered construction management platform that replaces siloed tools with one GC-first platform",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Alpha access - pricing coming soon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
