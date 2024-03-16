"use client";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const {
    setShowAuthFlow,
    user,
    handleLogOut,
    showAuthFlow,
    setAuthMode,
    authMode,
  } = useDynamicContext();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } else {
      setShowAuthFlow(true);
    }
  }, [user]);
  return (
    <div>
      <h1>Login</h1>
      <p>Please log in to continue</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
