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

interface DataCardProps {
  type: string;
}

export default function DataCard({ type }: DataCardProps) {
  const router = useRouter();
  return (
    <>
      <Card className="w-[300px] my-5 mr-4">
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Buy</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Buy</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        value="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </>
          ) : (
            <>
              <Button
                variant="default"
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
