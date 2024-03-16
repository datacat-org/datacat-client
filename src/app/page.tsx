"use client";
import BlurCircles from "@/components/BlurCircles";
import { Button } from "@/components/ui/button";

import {
  DynamicContextProvider,
  DynamicWidget,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { SlSocialGoogle } from "react-icons/sl";

export default function Home() {

  const router = useRouter();


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
        <h1 className="text-6xl font-bold mb-4">Welcome to DataCat</h1>
        <h2 className="mb-4">Label data, get paid. Cheers.</h2>
        <Button
          variant={"default"}
          className="mb-4"
          onClick={() => {
            router.push("/verify");
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
