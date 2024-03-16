"use client";

import BlurCircles from "@/components/BlurCircles";
import ConnectWallet from "@/components/ConnectWallet";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";
import Hero from "@/components/Hero";
import PortfolioCard from "@/components/PortfolioCard";
import { DatasetsCarousel } from "@/components/DatasetsCarousel";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
  return (
    <div className="w-screen">
      <Hero />
      <ConnectWallet />
      <BlurCircles />
      <div className="flex flex-col justify-around items-start mt-[100px] px-10 h-full">
        <PortfolioCard />
        <DatasetsCarousel />
        <Button variant={"link"} className="mt-4">
          <Link href="/datasets">View more datasets</Link>
        </Button>
      </div>
    </div>
  );
}
