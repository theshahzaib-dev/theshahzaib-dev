import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theshahzaibdev.online"),

  title: {
    default: "Muhammad Shahzaib | Full-Stack MERN Developer",
    template: "%s | TheShahzaibDev",
  },

  description:
    "Muhammad Shahzaib is a Full-Stack MERN Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Explore my portfolio, projects, and professional experience.",

  keywords: [
    "Muhammad Shahzaib",
    "Shahzaib Balouch",
    "TheShahzaibDev",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "Portfolio",
    "Pakistan Developer",
  ],

  authors: [
    {
      name: "Muhammad Shahzaib",
      url: "https://theshahzaibdev.online",
    },
  ],

  creator: "Muhammad Shahzaib",

  publisher: "TheShahzaibDev",

  alternates: {
    canonical: "https://theshahzaibdev.online",
  },

  openGraph: {
    title: "Muhammad Shahzaib | Full-Stack MERN Developer",
    description:
      "Explore the portfolio of Muhammad Shahzaib featuring modern web applications, MERN stack projects, and professional development work.",
    url: "https://theshahzaibdev.online",
    siteName: "TheShahzaibDev",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Shahzaib Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shahzaib | Full-Stack MERN Developer",
    description:
      "Explore my portfolio, featured projects, and technical expertise in the MERN Stack.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {
            process.env.ENVIREMENT === "production" && <Analytics/>
          }
          
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <div className="container mx-auto px-6 py-8">{children}</div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
