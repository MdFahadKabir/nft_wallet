"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/shared/container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, RefreshCcw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Progress } from "@/components/ui/progress"

import { SearchInput } from "@/components/ui/search-input";
import { ScrollArea } from "@/components/ui/scroll-area"

const OffersMadePage = () => {
  const items = [
    {
      id: 1,
      name: "Bones by Jarritos ",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },

    {
      id: 2,
      name: "Bones by Jarritos ",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 3,
      name: "Bones by Jarritos ",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 4,
      name: "Bones by Jarritos ",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 5,
      name: "Bones by Jarritos ",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 6,
      name: "Bones by Jarritos ",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 7,
      name: "Bones by Jarritos ",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 8,
      name: "Bones by Jarritos ",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 9,
      name: "Bones by Jarritos ",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 10,
      name: "Bones by Jarritos ",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    
  ];


  return (
    <Container>
      <div className="flex mt-5 gap-6">
        <div className="content w-full">
          <div className="src filter flex gap-4">
          <SearchInput className="w-full bg-transparent ring-offset-background focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-0" placeholder="Search Collections" />
          <Select className="">
              <SelectTrigger className="w-1/5 bg-[#281546] border-[#281546] focus:ring-slate-900">
                <SelectValue placeholder="Recent" />
              </SelectTrigger>

              <SelectContent className="bg-[#281546]">
                <SelectItem value="light">Recent</SelectItem>
                <SelectItem value="dark">Active</SelectItem>
                <SelectItem value="system">Expire</SelectItem>
              </SelectContent>
            </Select>
            <Select className="">
              <SelectTrigger className="w-1/5 bg-[#281546] border-[#281546] focus:ring-slate-900">
                <SelectValue placeholder="Price High to Low" />
              </SelectTrigger>

              <SelectContent className="bg-[#281546]">
                <SelectItem value="light">Price Low to High</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-[#281546] hover:bg-[#281546]/80 text-white" >
              <RefreshCcw size={22} />
            </Button>
          </div>

          {/* items */}

          <div className="listview mt-5">
            <Table className="w-full">
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader className="">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="">Items</TableHead>
                  <TableHead>Current Price</TableHead>
                  <TableHead>My Offer</TableHead>
                  <TableHead >Highest Bid</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell  className="w-full flex gap-10">
                    <Image
                          src={item.image}
                          alt={item.name}
                          height={48}
                          width={48}
                          className="w-[60px] h-[60px] object-cover  rounded-xl"
                        />
                        <div className="space-y-2">
                            <p className="text-sm font-medium">Super Hero #5656756</p>
                            <p className="text-xs text-gray-400">Crystal_mountain</p>
                        </div>

                    </TableCell>
                    <TableCell>{item.best_offer} ETH</TableCell>
                    
                    <TableCell>{item.cost} ETH</TableCell>
                    <TableCell>{item.cost} ETH</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

    </Container>
  );
};

export default OffersMadePage;
