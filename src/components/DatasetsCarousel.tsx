"use client";
import React, { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DataCard from "./DataCard";
import { fetchDatasetsForMarketplace } from "@/services/datasets";
import MarketplaceSet from "@/types/marketplaceSet";

export function DatasetsCarousel() {
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
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[75vw] ml-10"
    >
      <CarouselContent>
        {datasets.map((dataset: MarketplaceSet) => (
          <DataCard props={dataset} type="labeller" />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
