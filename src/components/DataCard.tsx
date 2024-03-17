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

interface DataCardProps {
  type: string;
  props: MarketplaceSet;
}

export default function DataCard({ type, props }: DataCardProps) {
  const router = useRouter();
  const { user } = useDynamicContext();
  const toast = useToast();
  const handleBuyDataset = async () => {
    if (user) {
      console.log("Buying dataset");
      const res = await buyDataset({
        dataset_id: props._id,
        wallet_address: user.verifiedCredentials[0].address,
      });
      console.log("res from buy dataset", res);
      
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
