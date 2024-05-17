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
const StopVestingForm = () => {
  return (
    <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl">
      <CardContent>
        <div>
        <p className="text-md font-semibold text-[#fff] pt-3">
          Stop Vesting
          </p>
          <p className="text-sm text-[#9A9A9A] pt-1">
          Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.
          </p>
          <div className="flex gap-6 mt-5">
            <div className="grid gap-3 w-full">
              <Label htmlFor="Key" className="font-bold text-sm">
                Vesting Key
              </Label>
              <Input
                id="Key"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>
          <div className="flex gap-6 mt-5">
            <div className="grid gap-3 w-full">
              <Label htmlFor="URL" className="font-bold text-sm">
                Base URL
              </Label>
              <Input
                id="URL"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>
          <div className="mt-5">
            <Dialog>
              <DialogTrigger className="w-full bg-[#179DFF] text-white hover:bg-[#179DFF]/30 duration-700 flex justify-center items-center rounded-md py-2">
                <div className="mx-1"></div>
                <p className="">Stop Vesting</p>
              </DialogTrigger>

              <DialogContent
                showCloseButton={true}
                className="bg-[#180734] w-[680px] border-0"
                style={{ borderRadius: "20px" }}
              >
                <div className="py-7">
                    <p>
                    Vesting schedule does not exist</p>
                    </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

      </CardContent>
    </Card>

  );
};

export default StopVestingForm;
