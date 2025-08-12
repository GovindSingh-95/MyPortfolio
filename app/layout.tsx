import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Govind Singh - Full-Stack Developer | Cryptography Enthusiast",
  description:
    "Full-Stack Developer passionate about building production-ready software with performance, cryptographic security, and real-world impact. Currently interning at Avaxan Pharma, specializing in MERN stack, AI integration, and secure web applications.",
  keywords: [
    "Govind Singh",
    "Full-Stack Developer",
    "Cryptography",
    "React",
    "Next.js",
    "MERN Stack",
    "BMS College of Engineering",
    "Avaxan Pharma",
    "AI Integration",
    "Web Security",
    "JavaScript",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Govind Singh", url: "https://govindsingh.dev" }],
  creator: "Govind Singh",
  publisher: "Govind Singh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://govindsingh.dev",
    title: "Govind Singh - Full-Stack Developer | Cryptography Enthusiast",
    description:
      "Full-Stack Developer passionate about building production-ready software with cryptographic security and real-world impact. Currently interning at Avaxan Pharma.",
    siteName: "Govind Singh Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Govind Singh - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Govind Singh - Full-Stack Developer | Cryptography Enthusiast",
    description:
      "Full-Stack Developer passionate about building production-ready software with cryptographic security and real-world impact.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://govindsingh.dev",
  },
  verification: {
    google: "your-google-verification-code",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light dark" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Govind Singh",
              jobTitle: "Full-Stack Developer",
              description:
                "Full-Stack Developer passionate about building production-ready software with cryptographic security and real-world impact",
              url: "https://govindsingh.dev",
              sameAs: ["https://github.com/GovindSingh-95", "https://linkedin.com/in/govindsingh95"],
              worksFor: {
                "@type": "Organization",
                name: "Avaxan Pharma",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "BMS College of Engineering",
              },
              knowsAbout: [
                "Full-Stack Development",
                "Cryptography",
                "React",
                "Next.js",
                "Node.js",
                "AI Integration",
                "Web Security",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* Analytics - Uncomment and replace GA_TRACKING_ID with your actual tracking ID when ready */}
        {/* 
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID');
          `}
        </Script>
        */}
      </body>
    </html>
  )
}
