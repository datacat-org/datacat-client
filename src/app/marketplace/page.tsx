"use client";
import BlurCircles from "@/components/BlurCircles";
import ConnectWallet from "@/components/ConnectWallet";
import DataCard from "@/components/DataCard";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { fetchDatasetsForMarketplace } from "@/services/datasets";
import { useEffect, useState } from "react";
import MarketplaceSet from "@/types/marketplaceSet";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function MarketplacePage() {
  const router = useRouter();
  const [datasets, setDatasets] = useState([]);
  const handleFetchDatasets = async () => {
    const res = await fetchDatasetsForMarketplace();
    console.log("res from marketplace", res);
    if (res.status !== 200) return console.log("Error fetching datasets");
    setDatasets(res.data.data);
  };
  useEffect(() => {
    handleFetchDatasets();
  }, []);
  return (
    <div className="p-10 flex justify-center items-start flex-col">
      <Hero />
      <ConnectWallet />
      <h1 className="mt-[50px] font-xl font-bold">Marketplace</h1>
      <div className="w-screen flex flex-wrap h-100 justify-start items-start">
        {datasets.map((dataset: MarketplaceSet) => (
          <DataCard key={dataset._id} props={dataset} type="buyer" />
        ))}
      </div>
      <Button
        variant="default"
        className="fixed bottom-10 right-10"
        onClick={() => {
          router.push("/upload");
        }}
      >
        Upload Dataset&nbsp;
        <FaPlus />
      </Button>
    </div>
  );
}
