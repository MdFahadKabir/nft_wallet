"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const TransferForm = () => {
    return (
        <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl">
            <CardContent>
                <div>
                    <div className="pt-4">
                   
                    <p className="text-[20px]">💰 Balance</p>
                    <p className="text-[40px]">200 Fame</p>
                        
                    </div>



                    <Accordion type="single" collapsible className="">
              <AccordionItem
                className="border-0 bg-[#16092E] rounded-lg "
                value="item-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="text-start">
                  <p className="text-xl font-semibold text-[#fff]">
                        Transfer
                    </p>
                    <p className="text-sm text-[#9A9A9A] pt-1">
                        Transfer your token to another address.
                    </p>
                   
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  
                <div>
                        <div className="flex gap-6">

                            <div className="grid gap-3 w-3/5">
                                <Label htmlFor="From" className="font-bold text-sm">
                                    Address
                                </Label>
                                <Input
                                    id="From"
                                    type="text"
                                    placeholder=""
                                    className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                                />
                            </div>
                            <div className="grid gap-3 w-1/5">
                                <Label htmlFor="To" className="font-bold text-sm">
                                    Amount
                                </Label>
                                <Input
                                    id="To"
                                    type="text"
                                    placeholder=""
                                    className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                                />

                            </div>
                            <div className="grid gap-3 w-1/5">
                            <div className="mt-8">
                            <Button className="bg-[#179DFF] text-white font-semibold hover:bg-[#179DFF]/80 rounded-xl w-full">
                                Transfer
                            </Button>
                            </div>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
                
                   
                </div>

            </CardContent>
        </Card>

    );
};

export default TransferForm;
