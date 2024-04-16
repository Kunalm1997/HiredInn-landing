import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Metrics from "./metrics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HiredInn",
  description: "HiredInn - hiring platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        {children}
        <Metrics />
      </body>
    </html>
  );
}
