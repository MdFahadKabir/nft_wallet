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

const BuyForm = () => {
  return (
    <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl ">
      <CardContent>
        <Tabs defaultValue="Mint" className="w-full mx-auto">
          <TabsList className="bg-transparent mt-4 mx-auto flex justify-start">
            {/* <TabsTrigger
              className="data-[state=active]:bg-[#2F125F] px-8 py-2 rounded-xl"
              value="Buy"
            >
              <span className=" text-md font-medium">Buy</span>
            </TabsTrigger> */}

            <TabsTrigger
              className="data-[state=active]:bg-[#2F125F] px-8 py-2 rounded-xl"
              value="Mint"
            >
              <span className="text-md font-medium">Mint Token</span>
            </TabsTrigger>

            <TabsTrigger
              className="data-[state=active]:bg-[#2F125F] px-8 py-2 rounded-xl "
              value="Burn"
            >
              <span className="text-md font-medium">Burn Token</span>
            </TabsTrigger>
          </TabsList>
          {/* <TabsContent value="Buy">
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

          </TabsContent> */}
          <TabsContent value="Mint">
          
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
                    Stockholder Type
                  </Label>
                  <Select>
                    <SelectTrigger className=" bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl ">
                      <SelectValue placeholder="Select Stakeholder" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2F125F]">
                      <SelectItem value="light">Founder</SelectItem>
                      <SelectItem value="dark">Co-founder</SelectItem>
                      <SelectItem value="develpment">Develpment</SelectItem>
                      <SelectItem value="advisory">Advisory</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="publicSell">Public Sell</SelectItem>
                      <SelectItem value="AdoptionFund">Adoption Fund</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3 w-1/2">
                  <Label htmlFor="Amount" className="font-bold text-sm">
                    Address
                  </Label>
                  <Input
                    id="Amount"
                    type="text"
                    placeholder=""
                    className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                  />
                </div>
              </div>
              <div className="flex gap-6 mt-5">
                <div className="grid gap-3 w-1/2">
                  <Label htmlFor="ReceivableFame" className="font-bold text-sm">
                    Amount
                  </Label>
                  <Input
                    id="ReceivableFame"
                    type="text"
                    placeholder=""
                    className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                  />
                </div>
                <div className="grid gap-3 w-1/2">
                  <Label htmlFor="ReceivableFame" className="font-bold text-sm">
                    Mint Token
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
                  Mint
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Burn">
            <p className="text-sm text-[#9A9A9A] pt-3">
              Launch your NFT collection for others to mint.
            </p>
            <p className="text-sm text-[#9A9A9A] pt-1">
              Launch your NFT collection for.
            </p>
            <div className="mt-5">
              <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                <p className="">Connected Wallet</p>
                <Link href="/" className="">XS0D....099999999.99</Link>
              </div>
              <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                <p className="">Wallet Balance</p>
                <Link href="/" className="">099999999.99</Link>
              </div>
             
              <div className="mt-2">
                  <Label htmlFor="ReceivableFame" className="font-bold text-sm">
                    Burn Token
                  </Label>
                  <Input
                    id="ReceivableFame"
                    type="text"
                    placeholder=""
                    className="bg-[#16092E] ring-1 ring-[#2F125F] mt-2 p-2 rounded-xl "
                  />
                </div>
            </div>
            <div className="mt-5">
              <Button className="bg-[#179DFF] text-white font-semibold hover:bg-[#179DFF]/80 rounded-xl w-full">
                Burn
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>

  );
};

export default BuyForm;
