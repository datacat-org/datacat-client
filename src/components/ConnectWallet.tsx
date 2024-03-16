import { DynamicWidget } from "@/lib/dynamic";

export default function ConnectWallet() {
  return (
    <div className="fixed top-5 right-10">
      <DynamicWidget innerButtonComponent={<h1>Connect External Wallet</h1>} />
    </div>
  );
}
