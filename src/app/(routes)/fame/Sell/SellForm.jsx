"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SellForm = () => {
  return (
    <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl ">
      <CardContent>
      <p className="text-md font-semibold text-[#fff] pt-3">Buy</p>
        <p className="text-sm text-[#9A9A9A] pt-3">
              Launch your NFT collection for others to mint.
            </p>
            <p className="text-sm text-[#9A9A9A] pt-1">
              Launch your NFT collection for.
            </p>
            <div>
              <div className="flex gap-6 mt-5">
                <div className="grid gap-3 w-1/2">
                  <Label htmlFor="Selectcoin" className="font-bold text-sm">
                    Select coin
                  </Label>
                  <Select>
                    <SelectTrigger className=" bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl ">
                      <SelectValue placeholder="Select coin" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2F125F]">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3 w-1/2">
                  <Label htmlFor="Amount" className="font-bold text-sm">
                    Amount
                  </Label>
                  <Input
                    id="Amount"
                    type="text"
                    placeholder="Amount"
                    className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                  />
                </div>
              </div>
              <div className="flex gap-6 mt-5">
                <div className="grid gap-3 w-1/2">
                  <Label
                    htmlFor="ConversationRate"
                    className="font-bold text-sm "
                  >
                    Conversation Rate
                  </Label>
                  <div className="input-wrapper">
                    <Input
                      id="ConversationRate"
                      type="text"
                      className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                      placeholder="Fame/Coin = 1.4 USDT"
                      readOnly
                    />
                  </div>
                </div>
                <div className="grid gap-3 w-1/2">
                  <Label htmlFor="ReceivableFame" className="font-bold text-sm">
                    Receivable Fame
                  </Label>
                  <Input
                    id="ReceivableFame"
                    type="text"
                    placeholder=""
                    className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                  />
                </div>
              </div>
              <div className="mt-5">
                <Button className="bg-[#179DFF] text-white font-semibold hover:bg-[#179DFF]/80 rounded-xl w-full">
                  Buy Now
                </Button>
              </div>
            </div>
      </CardContent>
    </Card>

  );
};

export default SellForm;
