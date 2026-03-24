import type { Metadata } from "next";

import { AppProvider } from "@/components/providers/app-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nishit | Agent Systems Portfolio",
  description: "AI/ML portfolio staged as an agent operating world with visible build, retrieval, storytelling, and delivery flows."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
