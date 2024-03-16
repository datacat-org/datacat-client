import * as React from "react";

import { Button } from "@/components/ui/button";
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

interface DataCardProps {}

export default function DataCard({}: DataCardProps) {
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
          <Label htmlFor="price">Price: $3000</Label>
          <Button>Buy</Button>
        </CardFooter>
      </Card>
    </>
  );
}
