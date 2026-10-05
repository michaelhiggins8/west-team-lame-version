import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "West Team | Homepage Mockup",
  description:
    "Build your real estate business with the HomeSmart West Team in Sun City West, Arizona.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}