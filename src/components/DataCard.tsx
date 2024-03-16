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

interface DataCardProps {
  type: string;
}

export default function DataCard({ type }: DataCardProps) {
  const router = useRouter();
  const { user } = useDynamicContext();
  const toast = useToast();
  const handleBuyDataset = async () => {
    if (user) {
      console.log("Buying dataset");
      const res = await buyDataset({
        dataset_id: 141,
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
      <Card className="min-w-[300px] my-5 mr-4 bg-transparent">
        <CardHeader>
          <CardTitle>WEF Research</CardTitle>
          <CardDescription>Stanford University, 2012</CardDescription>
        </CardHeader>
        <CardContent className="text-sm">
          <span className="mb-5">No. of Labellers: 10</span> <br />
          Diversity Score: 0.8 <br />
        </CardContent>
        <CardFooter className="flex justify-between">
          {type === "buyer" && <Label htmlFor="price">Price: $3000</Label>}
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
                  router.push(`dataset/141`);
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
