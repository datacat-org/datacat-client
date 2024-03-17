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
      <Card className="min-w-[80vw] h-fit pt-3 rounded-none">
        <CardContent className="w-100 my-2">
          <StatGroup className="flex w-100 justify-around items-center">
            <Stat className="mr-5">
              <StatLabel className="mb-2">Rewards Earned</StatLabel>
              <StatNumber>
                100 <span className="font-sm">catCoins</span>
              </StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                10%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel className="mb-2">Labels</StatLabel>
              <StatNumber>6</StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                5%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel className="mb-2">Circle USDC Balance</StatLabel>
              <StatNumber>$50</StatNumber>
            </Stat>
            <Stat>
              <StatLabel className="mb-2">Staked USDC</StatLabel>
              <StatNumber>$150</StatNumber>
            </Stat>
            <Stat>
              <StatLabel className="mb-2">Tier</StatLabel>
              <StatNumber>GOLD</StatNumber>
            </Stat>
          </StatGroup>
        </CardContent>
      </Card>
    </>
  );
}
