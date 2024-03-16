"use client";
import { DynamicWidget, useDynamicContext } from "@/lib/dynamic";

import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  const { user, setShowAuthFlow, sdkHasLoaded } = useDynamicContext();

  useEffect(() => {
    console.log("sdk", sdkHasLoaded);
  }, []);
  return (
    <div>
      <h1>Login</h1>
      <p>Please log in to continue</p>
      <button
        onClick={() => {
          setShowAuthFlow(true);
        }}
      >
        LogIN
      </button>
      <DynamicWidget />
    </div>
  );
}
