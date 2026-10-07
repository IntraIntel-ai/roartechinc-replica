import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "RoarTech Inc. | Cloud Migration & Enterprise Governance",
    template: "%s | RoarTech Inc."
  },
  description: "RoarTech Inc. is a software development consulting firm specializing in Cloud Migration, Enterprise Governance, and DevSecOps.",
  keywords: ["Cloud Migration", "Enterprise Governance", "DevSecOps", "AWS", "Azure", "GCP", "Next-Generation Data", "Analytics", "Washington DC"],
  authors: [{ name: "RoarTech Inc." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roartechinc.com",
    siteName: "RoarTech Inc.",
    title: "RoarTech Inc. | Cloud Migration & Enterprise Governance",
    description: "Software development consulting firm specializing in Cloud Migration, Enterprise Governance, and DevSecOps.",
    images: [
      {
        url: "/images/logo-roartechinc.png",
        width: 220,
        height: 52,
        alt: "RoarTech Inc. Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoarTech Inc. | Cloud Migration & Enterprise Governance",
    description: "Software development consulting firm specializing in Cloud Migration, Enterprise Governance, and DevSecOps.",
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
    <html lang="en">
      <body className={`${montserrat.variable} font-sans bg-white text-brand-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
