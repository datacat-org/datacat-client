import { DynamicWidget, useDynamicContext } from "@/lib/dynamic";
import { createUser } from "@/services/users";
import { useWalletStore } from "@/states/walletStore";
import { useEffect } from "react";

export default function ConnectWallet() {
  const setWalletAddress = useWalletStore(
    (state: any) => state.setWalletAddress
  );
  const walletAddress = useWalletStore((state: any) => state.walletAddress);

  const { user } = useDynamicContext();

  const handleCreateUser = async (user: any) => {
    const res = await createUser({
      nullifier_hash: "",
      wallet_address: walletAddress,
    });
    console.log("res from create user", res);
  };

  useEffect(() => {
    if (user) {
      console.log("user", user);
      setWalletAddress(user.verifiedCredentials[0].address);
      handleCreateUser(user);
    }
  }, [user]);

  return (
    <div className="fixed top-5 right-10">
      <DynamicWidget innerButtonComponent={<h1>Connect External Wallet</h1>} />
    </div>
  );
}
