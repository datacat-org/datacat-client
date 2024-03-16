"use client";

import { useParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DatasetPage(props: any) {
  const { id } = useParams();
  const [score, setScore] = useState(5);
  return (
    <div className="p-10">
      <h1>Dataset</h1>
      <div className="flex justify-between items-start w-90">
        <div className="flex flex-col items-start justify-start w-100 h-100 mt-10">
          <h2>Dataset ID: {id}</h2>
          <p>Name: {props.name}</p>
          Mark the resume out of 10: {score}
          <Slider
            defaultValue={[5]}
            max={10}
            step={1}
            value={[score]}
            className="w-[300px] my-10"
            onValueChange={(value) => setScore(value[0])}
          />
          <Button variant={"outline"}>Submit</Button>
        </div>
        <iframe src="/a.pdf" className="h-[600px] w-[500px] rounded-lg" />
      </div>
    </div>
  );
}
