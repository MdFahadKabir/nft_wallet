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

const BalanceForm = () => {
    return (
        <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl w-full">
            <CardContent>
                <div>
                <p className="text-md font-semibold text-[#fff] pt-3">
                        Balance of Address
                    </p>
                    <p className="text-sm text-[#9A9A9A] pt-1">
                    Give proper address and check wallet balance.
                    </p>
                    <div>
                        <div className="flex gap-6 mt-5">
                            <div className="grid gap-3 w-3/5">
                                <Label htmlFor="Address" className="font-bold text-sm">
                                    Address
                                </Label>
                                <Input
                                    id="Address"
                                    type="text"
                                    placeholder=""
                                    className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                                />
                                
                            </div>
                            <div className="flex justify-end w-2/5 mt-10">
                                   <p className="text-xl text-[#9A9A9A]"> 0.0000 Fame</p>
                                </div>
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>

    );
};

export default BalanceForm;
