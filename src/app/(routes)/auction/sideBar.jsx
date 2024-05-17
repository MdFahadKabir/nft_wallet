import React from 'react'
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

  import { Button } from "@/components/ui/button";
  import Image from "next/image";
const SideBar = () => {
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
      ];
    
    return (
        <div>
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
                        <SearchInput className="w-full bg-transparent ring-offset-background focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-0" placeholder="Search Collections" />
                        <div className="flex justify-between mt-4 text-gray-300 font-semibold my-2">
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
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    className="border-0  px-4 rounded-lg "
                    value="Price"
                >
                    <AccordionTrigger>
                        <div className="flex items-center gap-2 text-sm">
                            Price
                        </div>
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
                        <Button className="w-full mt-4 bg-[#D500E7] hover:bg-[#D500E7]/80 text-white">Apply</Button>
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
                        <SearchInput className="w-full bg-transparent ring-offset-background focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-0" placeholder="Search Collections" />
                        <div className="grid gap-3 ">

                            <RadioGroup defaultValue="comfortable" className="flex flex-col mt-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="default"
                                        id="r1"
                                        className="text-[#D500E7] w-6 h-6  border-4 border-[#2F125F] my-2"
                                    />
                                    <Label
                                        htmlFor="r1"
                                        className=" text-sm font-semibold"
                                    >
                                        ETH
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="comfortable"
                                        id="r2"
                                        className="text-[#D500E7] w-6 h-6  border-4 border-[#2F125F]"
                                    />
                                    <Label
                                        htmlFor="r2"
                                        className=" text-sm font-semibold"
                                    >
                                        ETH
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    )
}

export default SideBar