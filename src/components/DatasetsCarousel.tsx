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
import {
  fetchDatasetsForAnnotation,
  fetchDatasetsForMarketplace,
} from "@/services/datasets";
import MarketplaceSet from "@/types/marketplaceSet";
import { Skeleton } from "@/components/ui/skeleton";

export function DatasetsCarousel() {
  const [datasets, setDatasets] = useState([]);
  const handleFetchDatasets = async () => {
    const res = await fetchDatasetsForAnnotation();
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
      {datasets.length === 0 ? (
        <CarouselContent>
          <Skeleton className="min-w-[300px] max-w-[300px]" />
          <Skeleton className="min-w-[300px] max-w-[300px]" />
          <Skeleton className="min-w-[300px] max-w-[300px]" />
        </CarouselContent>
      ) : null}
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
