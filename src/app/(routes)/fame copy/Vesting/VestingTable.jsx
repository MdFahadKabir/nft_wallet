"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

import Link from "next/link";
import TransferForm from "../transferForm";
import ReleaseTokenForm from "../releaseTokenForm";
import VestingSetupForm from "../vestingSetup";
import StopVestingForm from "../stopVestingForm";
import { SearchInput } from "@/components/ui/search-input";

const VestingTable = () => {
  const [isStopped, setIsStopped] = useState("0")
  return (
    <div>
      <div className="space-y-10">
        <div className="flex gap-10">
          <div className="w-1/2 space-y-10">
          <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl">
            <CardContent>
          <p className="text-md font-semibold text-[#fff] pt-3">
          Vesting Serial
          </p>
          <p className="text-sm text-[#9A9A9A] pt-1">
          Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.
          </p>
            <Accordion type="single" collapsible className="">
              <AccordionItem
                className="border-0 bg-[#16092E] rounded-lg "
                value="item-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div>
                  <p className="text-base text-fuchsia-700">53453</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 py-2 text-base">
                    {
                      isStopped == 0 && <>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Vesting Private Key</p>
                          <Link href="/" className="text-blue-600">XS0D....099999999.99</Link>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Stakeholder Type</p>
                          <p className="">099999999.99</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Start Date</p>
                          <p className="">099999999.99</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Cliff End Time</p>
                          <p className="">Zubraj</p>
                        </div>

                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Schedule End Date</p>
                          <p className="">12/12/12</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Total Amount</p>
                          <p className="">12321</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Realized Amount</p>
                          <p className="">12321</p>
                        </div>
                      </>
                    }
                    {
                      isStopped == 1 && <>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Vesting Stopped!</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">baseURL</p>
                          <Link href="/" className="text-blue-600">XS0D....099999999.99</Link>
                        </div>
                      </>
                    }

                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="">
              <AccordionItem
                className="border-0 bg-[#16092E] rounded-lg "
                value="item-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div>
                    <p className="text-base text-fuchsia-700">783456</p>
                   
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 py-2 text-base">
                    {
                      isStopped == 0 && <>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Vesting Private Key</p>
                          <Link href="/" className="text-blue-600">XS0D....099999999.99</Link>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Stakeholder Type</p>
                          <p className="">099999999.99</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Start Date</p>
                          <p className="">099999999.99</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Cliff End Time</p>
                          <p className="">Zubraj</p>
                        </div>

                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Schedule End Date</p>
                          <p className="">12/12/12</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Total Amount</p>
                          <p className="">12321</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Realized Amount</p>
                          <p className="">12321</p>
                        </div>
                      </>
                    }
                    {
                      isStopped == 1 && <>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Vesting Stopped!</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">baseURL</p>
                          <Link href="/" className="text-blue-600">XS0D....099999999.99</Link>
                        </div>
                      </>
                    }

                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible className="">
              <AccordionItem
                className="border-0 bg-[#16092E] rounded-lg "
                value="item-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div>
                  <p className="text-base text-fuchsia-700">57546</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-4 py-2 text-base">
                    {
                      isStopped == 0 && <>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Vesting Private Key</p>
                          <Link href="/" className="text-blue-600">XS0D....099999999.99</Link>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Stakeholder Type</p>
                          <p className="">099999999.99</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Start Date</p>
                          <p className="">099999999.99</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Cliff End Time</p>
                          <p className="">Zubraj</p>
                        </div>

                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Schedule End Date</p>
                          <p className="">12/12/12</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Total Amount</p>
                          <p className="">12321</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Realized Amount</p>
                          <p className="">12321</p>
                        </div>
                      </>
                    }
                    {
                      isStopped == 1 && <>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">Vesting Stopped!</p>
                        </div>
                        <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                          <p className="">baseURL</p>
                          <Link href="/" className="text-blue-600">XS0D....099999999.99</Link>
                        </div>
                      </>
                    }

                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </CardContent>
            </Card>

            <VestingSetupForm />
          </div>

          <div className="w-1/2 space-y-10">
            <ReleaseTokenForm />
            <StopVestingForm />
          </div>
        </div>

        <div className="flex w-full">
          <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl">
            <CardContent>
                <div>

                <p className="text-md font-semibold text-[#fff] pt-3">
          Set Vesting Perameters
          </p>
          <p className="text-sm text-[#9A9A9A] pt-1">
          Lorem Ipsum is simply dummy text of the printing and <br/> typesetting industry.
          </p>
                <div className="flex gap-6 mt-5">

<div className="grid gap-3 w-3/12">
    <Label htmlFor="From" className="font-bold text-sm">
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
<div className="grid gap-3 w-3/12">
    <Label htmlFor="To" className="font-bold text-sm">
        Modified Cliff Period
    </Label>
    <Input
        id="To"
        type="text"
        placeholder=""
        className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
    />

</div>

<div className="grid gap-3 w-3/12">
    <Label htmlFor="To" className="font-bold text-sm">
        Modified Vesting Period
    </Label>
    <Input
        id="To"
        type="text"
        placeholder=""
        className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
    />

</div>
<div className="grid gap-3 w-3/12">
<div className="mt-8">
<Button className="bg-[#179DFF] text-white font-semibold hover:bg-[#179DFF]/80 rounded-xl w-full">
    Set Perameters
</Button>
</div>
</div>
</div>
                
                   
                </div>

            </CardContent>
        </Card>
        </div>





        <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl">
          <CardContent>
            <p className="text-xl pt-5">Vesting Status</p>
            <p className="text-sm text-[#9A9A9A] pt-3">
              Launch your NFT collection for others to mint. Launch your NFT
              collection for.
            </p>

            <div className="mt-5">
              <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                  <TableRow className="text-[#A690CA]">
                    <TableHead className=" text-[#A690CA]">
                      Categories
                    </TableHead>
                    <TableHead className="text-[#A690CA]">
                      Cliff (Month)
                    </TableHead>
                    <TableHead className="text-[#A690CA]">
                      Vesting Months
                    </TableHead>
                    <TableHead className="text-[#A690CA]">
                      Vested Token
                    </TableHead>
                    <TableHead className="text-[#A690CA]">
                      Released Token
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Founders Fund
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Development Fund
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Advisory Fund
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Partnership
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Public Sale
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>

                  {/* <TableRow colSpan={6}>
                    <TableCell className="font-medium text-xs">
                      Investors
                    </TableCell>

                    <TableCell colSpan={6} className="font-medium text-xs">
                      <div className="flex justify-between border-b ">
                        <div className="py-3 ">Accelerator</div>
                        <div className=" text-right py-3"></div>
                      </div>
                      <div className="flex justify-between border-b ">
                        <div className="py-3 ">Seed Fund</div>
                        <div className=" text-right py-3"></div>
                      </div>
                      <div className="flex justify-between  ">
                        <div className="pt-3 ">Public Sell</div>
                        <div className=" text-right pt-3"></div>
                      </div>
                    </TableCell>
                  </TableRow> */}
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Adoption Fund
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl">
          <CardContent>
            <div className="flex justify-between items-center  pt-5">
              <p className="text-xl w-2/3">Vesting Details</p>
              <SearchInput className="w-1/3 bg-transparent ring-offset-background focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-0" placeholder="Search " />
            </div>

            <div className="mt-5">
              <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                  <TableRow className="text-[#A690CA]">
                  <TableHead className=" text-[#A690CA]">
                      Serial
                    </TableHead>
                  <TableHead className=" text-[#A690CA]">
                      Stakeholder Type
                    </TableHead>
                    
                    <TableHead className="text-[#A690CA]">
                    Address
                    </TableHead>
                    <TableHead className="text-[#A690CA]">
                    Key
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      6563456
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      6456456
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      4566576
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      8967898
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      23543523
                    </TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                    <TableCell className="font-medium text-xs"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VestingTable;
