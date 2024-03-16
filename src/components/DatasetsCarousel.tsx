import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DataCard from "./DataCard";

export function DatasetsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[75vw] ml-10"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <DataCard key={index} type="labeller" />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
