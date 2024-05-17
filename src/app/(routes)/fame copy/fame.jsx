"use client";
import React from "react";
import Container from "@/components/shared/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Assets from "./assets";
import Stake from "./stake";
import Reward from "./reward";
import Sell from "./publicsell";
import VestingTable from "./Vesting/VestingTable";
const fame = () => {
  return (
    <Container>
      <div className="mt-20 flex flex-col justify-center items-center">
        <h2 className="text-5xl font-medium">Fame Portfolio</h2>
        <p className="text-sm text-[#9A9A9A] pt-3">
          Launch your NFT collection for others to mint. Launch your NFT
          collection for.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Tabs defaultValue="Assets" className="w-full mx-auto">
            <TabsList className="bg-[#0C021D] my-12 mx-auto flex justify-center">
              <TabsTrigger
                className="data-[state=active]:bg-[#2F125F] px-8 py-2 rounded-xl"
                value="Assets"
              >
                <span className=" text-lg font-medium">Assets</span>
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#2F125F] px-8 py-2 rounded-xl"
                value="Reward"
              >
                <span className=" text-lg font-medium">Reward</span>
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#2F125F] px-8 py-2 rounded-xl "
                value="Stake"
              >
                <span className=" text-lg font-medium">Stake</span>
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#2F125F] px-8 py-2 rounded-xl "
                value="Vesting"
              >
                <span className=" text-lg font-medium">Vesting</span>
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#2F125F] px-8 py-2 rounded-xl"
                value="PublicSell"
              >
                <span className=" text-lg font-medium">Public Sell</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Assets" className="min-w-[1040px] ">
              <Assets />
            </TabsContent>
            <TabsContent value="Reward" className="min-w-[1040px] ">
              <Reward />
            </TabsContent>
            <TabsContent value="Stake" className="min-w-[1040px] ">
              <Stake />
            </TabsContent>
            <TabsContent value="Vesting" className="min-w-[1040px] ">
              <VestingTable />
            </TabsContent>
            <TabsContent value="PublicSell" className="min-w-[1040px] ">
              <Sell />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default fame;
