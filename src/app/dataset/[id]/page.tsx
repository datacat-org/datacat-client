"use client";

import { useParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Hero from "@/components/Hero";
import ConnectWallet from "@/components/ConnectWallet";

export default function DatasetPage(props: any) {
  const { id } = useParams();
  const [score, setScore] = useState(5);
  return (
    <>
      <Hero />
      <ConnectWallet />
      <div className="p-10 h-screen overflow-hidden">
        <div className="flex flex-row-reverse justify-between items-start w-90 mt-5">
          <div className="flex flex-col items-start justify-start w-[30%] h-[90vh] mt-[100px] border-l-1 border-gray-600 px-1">
            <div className="flex flex-col items-start justify-around h-[30vh]">
              <h2>
                Dataset ID: <b>{id}</b>
              </h2>
              <p>Name: {props.name}</p>
              Mark the resume out of 10: {score}
              <Slider
                defaultValue={[5]}
                max={10}
                step={1}
                value={[score]}
                className="w-[300px] my-5"
                onValueChange={(value) => setScore(value[0])}
              />
            </div>
            <div className="w-full flex flex-col justify-end items-start h-[45vh]">
              <Button variant={"outline"} className="w-full">
                Submit
              </Button>
              <Button variant={"link"} className="w-full">
                Exit
              </Button>
            </div>
          </div>
          <div className="w-[70%] flex items-center justify-center">
            <iframe src="/a.pdf" className="h-[650px] w-[900px] rounded-sm" />
          </div>
        </div>
      </div>
    </>
  );
}
