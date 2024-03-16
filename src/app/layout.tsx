"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DynamicContextProvider
        settings={{
          environmentId: "36878322-39ae-4a1e-8b42-71f475b32dc1",
          appName: "Datacat",
          walletConnectors: [],
        }}
      >
        <body className={inter.className}>{children}</body>
      </DynamicContextProvider>
    </html>
  );
}
