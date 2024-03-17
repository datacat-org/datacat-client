"use client";
import React, { useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import { useWalletStore } from "@/states/walletStore";
import { useUserStore } from "@/states/userStore";
import { fetchCircleWalletBalance } from "@/services/circle";

export default function PortfolioCard() {
  return (
    <>
      <Card className="min-w-[450px] h-fit pt-3 rounded-none">
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
