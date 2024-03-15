"use client";
import BlurCircles from "@/components/BlurCircles";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
        <h1 className="text-6xl font-bold mb-4">Welcome to DataCat</h1>
        <h2 className="mb-4">Label data, get paid. Cheers.</h2>
        <Button
          variant={"default"}
          onClick={() => {
            console.log("Button clicked");
          }}
        >
          Get Started
          <FaArrowRight className="ml-2" />
        </Button>
        <BlurCircles />
      </main>
    </>
  );
}
