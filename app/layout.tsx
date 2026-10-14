import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Manrope({ variable: "--font-heading", subsets: ["latin"], weight: ["600", "700", "800"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "905 Greenscape | Lawn Care, Landscaping & Snow Removal in the Niagara Region",
  description:
    "Owner-run lawn mowing, trimming, weeding, garden cleanups, new grass and snow removal across the Niagara Region. 5.0 stars from 18 Google reviews. Call or text Jessie at (905) 401-6059.",
  openGraph: {
    title: "905 Greenscape | Niagara Lawn Care & Snow Removal",
    description: "Owner-run lawn care, landscaping and snow removal in the Niagara Region. 5.0 stars from 18 Google reviews. Call (905) 401-6059.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
