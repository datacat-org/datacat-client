"use client";
import DataCard from "@/components/DataCard";
import { Button } from "@/components/ui/button";

export default function MarketplacePage() {
  return (
    <div className="p-10 flex justify-center items-start flex-col">
      <h1>Marketplace</h1>
      <div className="w-screen flex flex-wrap h-100 justify-start items-start">
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
      </div>
    </div>
  );
}
