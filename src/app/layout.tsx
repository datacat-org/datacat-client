"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicContextProvider
          settings={{
            environmentId: "36878322-39ae-4a1e-8b42-71f475b32dc1",
          }}
        >
          {children}
        </DynamicContextProvider>
      </body>
    </html>
  );
}
