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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const VestingSetupForm = () => {
  return (
    <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl">
      <CardContent>
        <div>
          <p className="text-md font-semibold text-[#fff] pt-3">
          Vesting Setup
          </p>
          <p className="text-sm text-[#9A9A9A] pt-1">
          Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.
          </p>
            <div className="flex gap-6 mt-5">
              <div className="grid gap-3 w-full">
                <Label htmlFor="Verify" className="font-bold text-sm">
                  Stakeholder Type
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
            </div>
            <div className="flex gap-6 mt-5">
              <div className="grid gap-3 w-full">
                <Label htmlFor="Address" className="font-bold text-sm">
                  Stakeholder Address
                </Label>
                <Input
                  id="Address"
                  type="text"
                  placeholder=""
                  className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                />
              </div>
            </div>
            <div className="flex gap-6 mt-5">
              <div className="grid gap-3 w-full">
                <Label htmlFor="Amount" className="font-bold text-sm">
                  Total Amount
                </Label>
                <Input
                  id="Verify"
                  type="text"
                  placeholder=""
                  className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                />
              </div>
            </div>
            <div className="mt-5">
              {/* <Button className="bg-[#179DFF] text-white font-semibold hover:bg-[#179DFF]/80 rounded-xl w-full">
                                Release Token
                            </Button> */}
              <Dialog>
                <DialogTrigger className="w-full bg-[#179DFF] text-white hover:bg-[#179DFF]/30 duration-700 flex justify-center items-center rounded-md py-2">
                  <div className="mx-1"></div>
                  <p className="">Setup Vesting Schedule</p>
                </DialogTrigger>

                <DialogContent
                  showCloseButton={true}
                  className="bg-[#180734] w-[680px] border-0"
                  style={{ borderRadius: "20px" }}
                >
                  <div className="py-7">
                    <p>
                    Stakeholder type not found</p>
                    </div>
                </DialogContent>
              </Dialog>
            </div>
        </div>

      </CardContent>
    </Card>

  );
};

export default VestingSetupForm;
