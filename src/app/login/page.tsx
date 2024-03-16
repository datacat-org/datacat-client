"use client";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { user, setShowAuthFlow } = useDynamicContext();

  //   useEffect(() => {
  //     if (user) {
  //       router.push("/dashboard");
  //     } else {
  //       setShowAuthFlow(true);
  //     }
  //   }, [user]);
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
    </div>
  );
}
