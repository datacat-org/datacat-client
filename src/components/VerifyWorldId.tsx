"use client"; // for Next.js app router
import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createUser } from "@/services/users";
import { useWalletStore } from "@/states/walletStore";
import { useToast } from "@chakra-ui/react";

export default function VerifyWorldId() {
  const router = useRouter();
  const toast = useToast();
  const walletAddress = useWalletStore((state: any) => state.walletAddress);
  const handleVerify = async (proof: ISuccessResult) => {
    console.log(proof, "proof");
    const res = await fetch("/api/verify", {
      // route to your backend will depend on implementation
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proof),
    });
    if (!res.ok) {
      throw new Error("Verification failed."); // IDKit will display the error message to the user in the modal
    }
    const data = await res.json();
    console.log(data, res, "data");
    if (res.status === 200) {
      const res = await createUser({
        nullifier_hash: data.nullifier_hash,
        wallet_address: walletAddress,
      });
      console.log("res from create user", res);
      if (res.status === 200) {
        console.log("User created successfully");
        toast({
          title: "User created successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.log("Verification failed");
        toast({
          title: "User creation failed",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      console.log("Verification successful");
      router.push("/datasets");
    }
  };

  return (
    <>
      <IDKitWidget
        app_id="app_staging_e38f622e8302820e4f685c8da6090529" // obtained from the Developer Portal
        action="Datacat-onboard" // obtained from the Developer Portal
        onSuccess={() => {
          // callback when the proof is received
          console.log("Proof received");
        }} // callback when the modal is closed
        handleVerify={handleVerify} // callback when the proof is received
        verification_level={VerificationLevel.Orb}
      >
        {({ open }) => (
          // This is the button that will open the IDKit modal
          <Button onClick={open}>Verify with World ID</Button>
        )}
      </IDKitWidget>
    </>
  );
}
