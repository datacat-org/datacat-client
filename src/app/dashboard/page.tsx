"use client";

import ConnectWallet from "@/components/ConnectWallet";

import Link from "next/link";

import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import PortfolioCard from "@/components/PortfolioCard";
import { DatasetsCarousel } from "@/components/DatasetsCarousel";
import { Button } from "@/components/ui/button";
import { fetchCircleWalletBalance } from "@/services/circle";
import { useUserStore } from "@/states/userStore";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const id = useUserStore((state: any) => state.id);
  const router = useRouter();

  const handleFetchCircleWalletBalance = async () => {
    try {
      const res = await fetchCircleWalletBalance(id);
      console.log("res from fetchCircleWalletBalance", res);
    } catch (error) {
      console.log("error from fetchCircleWalletBalance", error);
    }
  };

  useEffect(() => {
    handleFetchCircleWalletBalance();
  }, []);
  return (
    <div className="w-screen">
      <Hero />
      <ConnectWallet />
      <div className="flex flex-col justify-around items-start mt-[100px] px-10 h-full">
        <div className="my-5 text-3xl font-bold">Portfolio</div>
        <PortfolioCard />
        <div className="my-5 text-3xl font-bold">Explore</div>
        <DatasetsCarousel />
        <Button
          variant={"link"}
          className="mt-4"
          onClick={() => {
            router.push("/datasets");
          }}
        >
          View more
          <FaArrowRight className="ml-2" size={"20px"} />
        </Button>
      </div>
    </div>
  );
}
