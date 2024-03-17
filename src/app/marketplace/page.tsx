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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        {datasets.map((dataset: MarketplaceSet, index: number) => {
          if (index === datasets.length - 1) {
            return (
              <>
                <DataCard key={dataset._id} props={dataset} type="buyer" />
                <Card className="w-[300px] h-[190px] my-5 mr-4 bg-transparent rounded-none flex flex-col items-center justify-around">
                  <FaPlus size={"60px"} accentHeight={"10px"} />
                  <h1>
                    <Button
                      variant="default"
                      onClick={() => {
                        router.push("/upload");
                      }}
                    >
                      Upload Dataset
                    </Button>
                  </h1>
                </Card>
              </>
            );
          }
          return <DataCard key={dataset._id} props={dataset} type="buyer" />;
        })}
      </div>
    </div>
  );
}
