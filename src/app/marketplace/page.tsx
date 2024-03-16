"use client";
import BlurCircles from "@/components/BlurCircles";
import ConnectWallet from "@/components/ConnectWallet";
import DataCard from "@/components/DataCard";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

export default function MarketplacePage() {
  return (
    <div className="p-10 flex justify-center items-start flex-col">
      <Hero />
      <ConnectWallet />
      <h1 className="mt-[50px] font-xl font-bold">Marketplace</h1>
      <div className="w-screen flex flex-wrap h-100 justify-start items-start">
        <DataCard type="buyer" />
        <DataCard type="buyer" />
        <DataCard type="buyer" />
        <DataCard type="buyer" />
        <DataCard type="buyer" />
        <DataCard type="buyer" />
        <DataCard type="buyer" />
        <DataCard type="buyer" />
        <DataCard type="buyer" />
      </div>
      <BlurCircles />
    </div>
  );
}
