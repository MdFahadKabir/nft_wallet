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

const OffersPage = () => {
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

  const [layout, setLayout] = useState("grid");

  const handleLayout = (layout) => {
    setLayout(layout);
  };

  return (
    <Container>
      <div className="flex mt-5 gap-6">
        <div className="left sidebar w-1/5">
          <SearchInput className="w-full bg-transparent ring-offset-background focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-0" placeholder="Search Collections" />
          <div className="flex justify-between mt-4 text-gray-300 font-semibold mb-2 text-xs mx-1">
            <p>COLLECTION</p>
            <p>VALUE</p>
          </div>
          {
            items.map((item, index) => (
              <div className="flex justify-between items-center gap-5 p-3 rounded-lg hover:bg-[#2F125F]/50 duration-300 transition-all cursor-pointer">
                <div className="flex justify-center items-center  gap-5">
                  <div className="flex justify-center items-center  gap-5">
                    <Image
                      src={item.image}
                      height={30}
                      width={30}
                      className="w-[40px] h-[40px] object-cover  rounded-lg"
                    />
                    <div className="space-y-2">
                      <p>Crystal </p>
                      <p className="text-gray-500 font-medium text-xs ">
                        Price: <span className="text-white ">0.22 BTC</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-500 font-medium text-xs ">
                    Volume: <span className="text-white">1 ETH</span>
                  </p>
                  <p className="text-gray-500 font-medium text-xs ">
                    Volume: <span className="text-white">205 BTC</span>
                  </p>
                </div>
              </div>
            ))
          }


        </div>
        <div className="content w-4/5">
          <div className="src filter flex gap-4">
          <SearchInput className="w-full bg-transparent ring-offset-background focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-0" placeholder="Search Collections" />
         



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
            <Button className="bg-[#179DFF] hover:bg-[#179DFF]/80 text-white" >
              Make an Offer
            </Button>
          </div>

          {/* items */}

          <div className="listview mt-5">
            <Table className="w-full">
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader className="">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[200px]">Offer Price</TableHead>
                  <TableHead>Total volume</TableHead>
                  <TableHead>Total offers</TableHead>
                  <TableHead className="text-right">Bidders</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell  className="w-3/5">
                    <Progress className="text-red-500" value={30} />
                    </TableCell>
                    <TableCell>{item.best_offer}</TableCell>
                    <TableCell>{item.cost}</TableCell>
                    <TableCell className="flex justify-end">
                        <Image
                          src={item.image}
                          alt={item.name}
                          height={48}
                          width={48}
                          className="w-[32px] h-[32px] object-cover  rounded-full"
                        />
                       
                    </TableCell>
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

export default OffersPage;
