"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/shared/container";
import { BadgeCheck, LayoutGrid, List, ListPlus, ShoppingCart, SlidersHorizontal } from "lucide-react";
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/search-input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useCollapseStore, useLayoutStore } from '@/lib/ZStore/control';
import { cn } from "@/lib/utils";

const CollectionPage = () => {
  const items = [
    {
      id: 1,
      name: "Jarritos_78643 ",
      collection: "Crystal_mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },

    {
      id: 2,
      name: "Jarritos_78643 ",
      collection: "Crystal_mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 3,
      name: "Jarritos_78643 ",
      collection: "Crystal_mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 4,
      name: "Jarritos_78643 ",
      collection: "Crystal_mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 5,
      name: "Jarritos_78643 ",
      collection: "Crystal_mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 6,
      name: "Jarritos_78643 ",
      collection: "Crystal_mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
  ];


  const { layout, toggleLayout } = useLayoutStore();
  const { collapse, toggleCollapse } = useCollapseStore();
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleLayout = (layout) => {
    setLayout(layout);
  };

  return (
    <Container>
      <div className="flex mt-5 gap-6">
        <div className="left sidebar w-1/5">
        <div className="flex gap-2 items-center justify-between ">
        <div>
                   {/* sidebar toggle */}
                    <div
                        className={` rounded-sm px-2 py-2 cursor-pointer transition-all duration-300 ${collapse === true ? "bg-[#D500E7]" : "bg-[#281546]"
                            }`}
                        onClick={() => toggleCollapse()}
                    >
                        <SlidersHorizontal size={22} />
                    </div>
                </div>
            <div className="flex justify-center items-center">
              <div
                className={` rounded-s-sm px-2 py-2 cursor-pointer transition-all duration-300 ${
                  layout === "grid" ? "bg-[#D500E7]" : "bg-[#281546]"
                }`}
                onClick={() => toggleLayout("grid")}
              >
                <LayoutGrid size={22} />
              </div>
              <div
                className={` rounded-e-sm px-2 py-2 cursor-pointer transition-all duration-300 ${
                  layout === "list" ? "bg-[#D500E7]" : "bg-[#281546]"
                }`}
                onClick={() => toggleLayout("list")}
              >
                <List size={22} />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[160px]  bg-[#281546] border-[#281546] focus:ring-slate-900">
                <SelectValue placeholder="Network" />
              </SelectTrigger>
              <SelectContent className="bg-[#281546]">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

      
        <div className="src filter flex gap-4 w-4/5">
        <SearchInput className="w-full bg-[#180734] text-[#e0dede] hover:bg-[#180734]/80 ring-offset-background focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-0" placeholder="Search Collections" />


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

            <Button className="bg-[#281546] hover:bg-[#281546]/80 text-white">
              <RefreshCcw size={22} />
            </Button>
            <Button className="bg-[#179DFF] hover:bg-[#179DFF]/80 text-white">
              Make an Offer
            </Button>
          </div>
        
</div>
<div className="flex gap-6">
{
          collapse && (
        <div className="left sidebar w-1/5 transition-all duration-300">
          <div className="bg-[#170C29]/70  rounded-tl-xl rounded-tr-xl mt-5">
            <div className="bg-[#1D0F35] flex justify-between  px-5 py-3 rounded-tl-xl rounded-tr-xl font-bold">
              <span className="my-auto text-md">Filter</span>{" "}
              <span className="bg-[#281546] rounded-lg text-sm text-[#8B8B8B] px-5 py-2">
                Reset All
              </span>
            </div>
            <Accordion type="single" collapsible className="w-full mt-2">
              <AccordionItem
                className="border-0 px-4 rounded-lg "
                value="Collections"
              >
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-sm">
                    Collections
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs ">
                  <SearchInput
                    className="w-full bg-transparent ring-offset-background focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-0"
                    placeholder="Search Collections"
                  />
                  <div className="flex justify-between mt-2 text-gray-300 font-semibold my-2">
                    <p>COLLECTION</p>
                    <p>VALUE</p>
                  </div>
                  {items.map((item, index) => (
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
                              Price:{" "}
                              <span className="text-white ">0.22 BTC</span>
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
                  ))}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                className="border-0  px-4 rounded-lg "
                value="Price"
              >
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-sm">Price</div>
                </AccordionTrigger>
                <AccordionContent className="text-xs p-1">
                  <div className="">
                    <Input
                      id="collection"
                      type="text"
                      placeholder=""
                      className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                    />
                  </div>
                  <div className="mt-4 flex justify-center items-center gap-2">
                    <Input
                      id="collection"
                      type="text"
                      placeholder=""
                      className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                    />
                    <p className="text-base"> to </p>
                    <Input
                      id="collection"
                      type="text"
                      placeholder=""
                      className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                    />
                  </div>
                  <Button className="w-full mt-4">Apply</Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                className="border-0  px-4 rounded-lg "
                value="Currency"
              >
                <AccordionTrigger>
                  <div className="flex items-center gap-2 text-sm">
                    Currency
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs">
                  <SearchInput
                    className="w-full bg-transparent ring-offset-background focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-0"
                    placeholder="Search Collections"
                  />
                  <div className="grid gap-3 ">
                    <RadioGroup
                      defaultValue="comfortable"
                      className="flex flex-col mt-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="default"
                          id="r1"
                          className="text-[#D500E7] w-6 h-6  border-4 border-[#2F125F] my-2"
                        />
                        <Label htmlFor="r1" className=" text-sm font-semibold">
                          ETH
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="comfortable"
                          id="r2"
                          className="text-[#D500E7] w-6 h-6  border-4 border-[#2F125F]"
                        />
                        <Label htmlFor="r2" className=" text-sm font-semibold">
                          ETH
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
          )
          }

        <div className={cn("right content transition-all duration-500 ", collapse ? "w-4/5" : "w-full")}>
          

          {/* items */}
          {layout === "grid" && (
            <div className="gridview ">
              <div className={cn("grid mt-5 gap-6 mx-auto", collapse ? "grid-cols-5" : "grid-cols-6")}>
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{ transition: "opacity 1s ease" }}
                  >
                    <div className="">
                      <Image
                        src={item.image}
                        alt={item.name}
                        height={280}
                        width={280}
                        className="w-[280px] h-[280px] object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute -bottom-2 w-full  pt-2 bg-[#281D3A] backdrop-blur-lg rounded-b-xl">
                      <p className="text-sm font-semibold px-3  pb-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400 font-semibold px-3  pb-3">
                        {item.collection}
                      </p>
                      {hoveredItem !== index && (
                        <div>
                          <p className="text-xs text-[#D500E7] px-3 mb-2 font-semibold">
                            {item.cost} BTC
                          </p>

                          <p className="text-xs text-[#B6B6B6] px-3 mb-2 font-semibold">
                            Last sell: {item.last_price} WETH
                          </p>
                        </div>
                      )}
                      {/* add to cart button */}
                      {hoveredItem === index && (
                        <button className="flex justify-center items-center gap-2 bg-[#D500E7] w-full rounded-b-xl px-2 py-3.5">
                            <ListPlus size={20} />
                          <p className="text-sm text-semibold"> Add to List</p>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {layout === "list" && (
            <div className="listview ">
              <Table className="">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">331 Items</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Best Offer</TableHead>
                    <TableHead>Last Price</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead className="text-right">Difference</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Image
                            src={item.image}
                            alt={item.name}
                            height={73}
                            width={73}
                            className="w-[44px] h-[44px] object-cover  rounded-md"
                          />
                          <div>
                            <p>{item.name}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.best_offer}</TableCell>
                      <TableCell>{item.last_price}</TableCell>
                      <TableCell>{item.cost}</TableCell>
                      <TableCell className="text-right">
                        {item.difference}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CollectionPage;
