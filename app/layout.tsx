import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.scss";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
  weight: ["400", "700"], // Regular and Bold
  style: ["normal"], // Can add "italic" if available
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Move your constants here
const DESC = "Dean Francis Casili is a Senior Fullstack Developer from the Philippines. It is ALWAYS working on my end! :D";
const TITLE = 'Dean Francis Casili - Fullstack Developer, Front-end | React, VueJS, Angular, Back-end | PHP, Laravel, Node, and more.';
const BASE_URL = 'https://workingonmyend.dev';
const PREVIEW_IMG = `${BASE_URL}/preview.png`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: TITLE,
    description: DESC,
    url: BASE_URL,
    siteName: TITLE,
    images: [
      {
        url: PREVIEW_IMG,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [PREVIEW_IMG],
  },
  alternates: {
    canonical: BASE_URL,
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
