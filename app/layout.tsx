import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import FullNav from "@/components/FullNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "h-aesthetic studio — Design Precision",
  description:
    "Interior design and space-planning studio for hospitality and workplace interiors: hotels, cafés, restaurants and co-working offices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@100..900&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <FullNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
