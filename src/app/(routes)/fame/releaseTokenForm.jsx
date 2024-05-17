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
const ReleaseTokenForm = () => {
    return (
        <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl">
            <CardContent>
                <div>
                <p className="text-md font-semibold text-[#fff] pt-3">
          Claim Vasted Token
          </p>
          <div className="flex justify-between align-baseline pt-4">
                                   <p className="text-sm text-[#9A9A9A] "> Claimable Amount</p> <div className="space-y-2">
                                   
                                   <Select>
                    <SelectTrigger className="text-xs bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl ">
                      <SelectValue placeholder="Select Serial" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#2F125F]">
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-lg text-[#9A9A9A]"> 0.0000 Fame</p>
                                    </div>
                                </div>
          
                    <div>
                        <div className="flex gap-6 mt-5">
                            <div className="grid gap-3 w-full">
                                <Label htmlFor="Verify" className="font-bold text-sm">
                                    Verify Key
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
                      <p className="">Claim Token</p>
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
                </div>

            </CardContent>
        </Card>

    );
};

export default ReleaseTokenForm;
