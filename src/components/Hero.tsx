"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="fixed top-5 left-10 font-bold">
      <h1
        className="text-2xl cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        datacat.
      </h1>
    </div>
  );
}
