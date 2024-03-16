"use client";

import ConnectWallet from "@/components/ConnectWallet";

import Link from "next/link";

import React from "react";
import Hero from "@/components/Hero";
import PortfolioCard from "@/components/PortfolioCard";
import { DatasetsCarousel } from "@/components/DatasetsCarousel";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="w-screen">
      <Hero />
      <ConnectWallet />
      <div className="flex flex-col justify-around items-start mt-[100px] px-10 h-full">
        <PortfolioCard />
        <DatasetsCarousel />
        <Button variant={"link"} className="mt-4">
          <Link href="/datasets">View more datasets</Link>
        </Button>
      </div>
    </div>
  );
}
