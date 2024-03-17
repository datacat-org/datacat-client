"use client";
import { DynamicWidget, useDynamicContext } from "@/lib/dynamic";
import { checkIfUserExists, createUser } from "@/services/users";
import { useUserStore } from "@/states/userStore";
import { useWalletStore } from "@/states/walletStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ConnectWallet() {
  const router = useRouter();
  const setWalletAddress = useWalletStore(
    (state: any) => state.setWalletAddress
  );
  const walletAddress = useWalletStore((state: any) => state.walletAddress);
  const userType = useUserStore((state: any) => state.userType);
  const setId = useUserStore((state: any) => state.setId);
  const setCircleWalletAddress = useWalletStore(
    (state: any) => state.setCircleWalletAddress
  );

  const { user } = useDynamicContext();

  const handleCreateUser = async (addr: any) => {
    const checkRes = await checkIfUserExists({ address: addr });
    console.log("checkRes", checkRes);
    if (checkRes.data.data._id) {
      console.log("User exists", checkRes.data.data._id);
      setId(checkRes.data.data._id);
      setCircleWalletAddress(checkRes.data.data.circle_wallet_address);
      return;
    }

    if (userType === "buyer") return;

    router.push("/verify");
  };

  useEffect(() => {
    if (user) {
      console.log("user", user);
      setWalletAddress(user.verifiedCredentials[0].address);
      handleCreateUser(user.verifiedCredentials[0].address);
    }
  }, [user]);

  return (
    <div className="fixed top-5 right-10">
      <DynamicWidget
        innerButtonComponent={<h1>Connect External Wallet</h1>}
        buttonClassName="rounded-none"
      />
    </div>
  );
}
