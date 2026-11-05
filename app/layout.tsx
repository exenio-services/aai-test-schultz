import type { Metadata } from "next";
import "./globals.css";
import { seoDescription, seoTitle, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  // Kurs-Demo eines realen Betriebs: nicht indexieren.
  robots: { index: false, follow: false },
  title: seoTitle,
  description: seoDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: "/",
    siteName,
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col bg-white font-body text-ink">
        {children}
      </body>
    </html>
  );
}
