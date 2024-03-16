"use client";
import VerifyWorldId from "@/components/VerifyWorldId";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function VerifyPage() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="mb-4">World ID Verification</h1>
      <VerifyWorldId />
      <Button variant={"link"} className="mt-4" onClick={() => router.back()}>
        <FaArrowLeft className="mr-2" />
        Back
      </Button>
    </div>
  );
}
