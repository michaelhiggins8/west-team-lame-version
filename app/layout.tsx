import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
// import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "West Team | Homepage Mockup",
  description:
    "Build your real estate business with the HomeSmart West Team in Sun City West, Arizona.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.variable}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}