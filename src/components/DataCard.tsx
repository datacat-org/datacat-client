"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useDynamicContext } from "@/lib/dynamic";
import { useToast } from "@chakra-ui/react";
import { buyDataset } from "@/services/consumers";
import MarketplaceSet from "@/types/marketplaceSet";
import { publicClient, walletClient } from "@/lib/config";
import usdcAbi from "@/lib/abis/usdc_abi.json";
import transferABI from "@/lib/abis/transfer.json";
import { Address, parseUnits } from "viem";
import { useEffect, useState } from "react";
import { addressFromId } from "@/services/datasets";

interface DataCardProps {
  type: string;
  props: MarketplaceSet;
}

export default function DataCard({ type, props }: DataCardProps) {
  const router = useRouter();
  const { user } = useDynamicContext();
  const toast = useToast();
  const [caddress, setCaddress] = useState("");

  useEffect(() => {
    handleFetchAddress();
  }, []);

  const handleFetchAddress = async () => {
    console.log("Fetching address", props.contractId);
    const addr = await addressFromId(props.contractId);
    console.log("addr in datacard", addr.data.data);
    if (addr.status === 200) {
      setCaddress(addr.data.data);
    }
  };

  const handleBuyDataset = async () => {
    if (user) {
      console.log("Buying dataset");
      const res = await buyDataset({
        dataset_id: props._id,
        wallet_address: user.verifiedCredentials[0].address,
      });
      const addr = user.verifiedCredentials[0].address;
      console.log("res from buy dataset", res);
      if (res.status === 200) {
        try {
          const { request: r1 } = await publicClient!.simulateContract({
            address: "0xc64D44204d5c2109833e54311744a48dF7EB964D" as Address,
            abi: usdcAbi,
            functionName: "approve",
            args: [caddress, parseUnits("100000", 6)],
            account: addr as Address,
          });
          const hash1 = await walletClient.writeContract(r1);
          console.log("hash1", hash1);

          const { request: r2 } = await publicClient!.simulateContract({
            address: caddress as Address,
            abi: transferABI,
            functionName: "buy",
            args: [parseUnits(props.price.toString(), 6)],
            account: addr as Address,
          });
          const hash2 = await walletClient.writeContract(r2);
          console.log("hash2", hash2);
          if (hash2) {
            toast({
              title: "Dataset bought",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
        } catch (e) {
          console.error(e);
        }
      }
    } else {
      toast({
        title: "Please connect your wallet",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Card className="min-w-[300px] max-w-[300px] my-5 mr-4 bg-transparent rounded-none">
        <CardHeader>
          <CardTitle>{props.name}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <span className="mb-5">
            No. of Labellers: {props.times_annotated}
          </span>{" "}
          <br />
          <span className="mb-5">Size: {props.nums_row} Rows</span>
        </CardContent>
        <CardFooter className="flex justify-between">
          {type === "buyer" && (
            <Label htmlFor="price">Price: ${props.price}</Label>
          )}
          {type === "buyer" ? (
            <>
              <Button variant="outline" onClick={handleBuyDataset}>
                Buy
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  router.push(`dataset/${props._id}`);
                }}
              >
                Select
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
