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

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

export default function PortfolioCard() {
  return (
    <>
      <Card className="min-w-[450px] h-fit pt-3">
        <CardContent className="w-100 my-2">
          <StatGroup className="flex w-100 justify-around items-center">
            <Stat>
              <StatLabel className="mb-2">Rewards Earned</StatLabel>
              <StatNumber>345,670</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                23.36%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel className="mb-2">Labels</StatLabel>
              <StatNumber>45</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                9.05%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </CardContent>
      </Card>
    </>
  );
}
