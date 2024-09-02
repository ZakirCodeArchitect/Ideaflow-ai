import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IdeaFlow AI",
  description: "NextJS App with AI integrated in it to generate content based on the niche and generates the answer in the text editor in the formatted form and you can download it direcrtly in the word file.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
