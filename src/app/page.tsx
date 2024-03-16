"use client";
import BlurCircles from "@/components/BlurCircles";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/states/userStore";

import {
  DynamicContextProvider,
  DynamicWidget,
  useDynamicContext,
} from "@dynamic-labs/sdk-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { SlSocialGoogle } from "react-icons/sl";

export default function Home() {
  const router = useRouter();
  const setUserType = useUserStore((state: any) => state.setUserType);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
        <h1 className="text-6xl font-bold mb-6">Welcome to DataCat.</h1>
        <h2 className="mb-8 font-medium">Label data, get paid. Cheers.</h2>
        <div className="flex space-x-4 mb-4">
          <Button
            variant={"default"}
            onClick={() => {
              setUserType("labeller");
              router.push("/dashboard");
            }}
          >
            I'm here to annotate <FaArrowRight className="ml-2" />
          </Button>
          <Button
            variant={"outline"}
            className="rounded-none"
            onClick={() => {
              setUserType("buyer");
              router.push("/marketplace");
            }}
          >
            I'm here to buy/upload dataset <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </main>
    </>
  );
}
