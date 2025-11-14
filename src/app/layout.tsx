import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "@/components/Loading";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hlpfl.dev'),
  title: {
    default: "HLPFL | Affordable Websites for First-Time Founders",
    template: "%s | HLPFL"
  },
  description: "High-quality websites for small business owners at prices you can actually afford. 72-hour delivery, 100% US-based work, no outsourcing. Our prices are negotiable.",
  keywords: ["affordable web development", "first-time founders", "startup websites", "cheap websites", "web design", "HLPFL"],
  authors: [{ name: "HLPFL", url: "https://hlpfl.dev" }],
  creator: "HLPFL",
  publisher: "HLPFL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "HLPFL | Affordable Websites for First-Time Founders",
    description: "High-quality websites for first-time founders at prices you can actually afford. 72-hour delivery, 100% US-based work.",
    url: "https://hlpfl.dev",
    siteName: "HLPFL",
    images: [
      {
        url: "https://hlpfl.dev/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HLPFL Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HLPFL | Affordable Websites for First-Time Founders",
    description: "High-quality websites for first-time founders at prices you can actually afford.",
    images: ["https://hlpfl.dev/images/og-image.jpg"],
    creator: "@hlpfl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "HLPFL Web Development",
              "image": "https://hlpfl.dev/images/logo.png",
              "url": "https://hlpfl.dev",
              "telephone": "+1-XXX-XXX-XXXX",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Grand Rapids, MI",
                "addressLocality": "Grand Rapids",
                "addressRegion": "MI",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.linkedin.com/company/hlpfl",
                "https://www.twitter.com/hlpfl"
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Loading />
        {children}
      </body>
    </html>
  );
}