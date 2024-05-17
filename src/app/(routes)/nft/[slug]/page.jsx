"use client"
import Container from "@/components/shared/container";
import React from "react";
import {
  BadgeCheck,
  SquareArrowOutUpRight,
  Heart,
  ShoppingCart,
  Tag,
  LineChart,
  TrendingUp,
  ScrollText,
  ListTodo,
  CircleAlert,
  User,
  Share2,
  Copy,
  Twitter,
  ArrowRightLeft,
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  ListPlus,
  Squirrel,
  BookOpenText,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Bitcoin from "../../../../../public/images/icon/bitcoin.png";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"

import { PriceHistory } from "./history";
import { ScrollArea } from "@/components/ui/scroll-area";
import SimilarNFT from "./similar";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const NFTViewPage = () => {
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

  const [type, setType] = React.useState("one");
  console.log(type)
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(isOpen)
  return (
    <Container>
      <div className="p-6">
        <div className="flex justify-end gap-32 ">
          {/* first content */}
          <div className="w-4/12 fixed top-20 left-10">
            <div className="flex justify-between items-end">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <p className="text-base">Super Hero</p>
                  <BadgeCheck size={16} className="text-blue-500" />
                </div>

                <p className="text-xl font-semibold mb-2 ">Super Hero #44657</p>

                <div className="flex items-center gap-2 mb-2">
                  <User size={16} className="text-purple-400" />
                  <p className="text-xs text-purple-400">Zubraj433</p>

                </div>
              </div>
              <div className="space-x-4">
                <Dialog>
                  <DialogTrigger>
                    <ArrowRightLeft size={20} />
                  </DialogTrigger>
                  <DialogContent
                  showCloseButton={true}
                  className="bg-[#180734] border-0"
                  style={{ borderRadius: "20px" }}>
                    <div className="">
                      <p className="text-2xl font-bold mb-3">Transfer</p>
                      <Image
                              src="/images/card.jpg"
                              alt="Super Hero 3"
                              height={100}
                              width={100}
                              className="w-auto h-[150px] aspect-square object-cover rounded-xl"
                            />

<div className="mt-6 my-3">
            <div className="grid gap-3 w-full mb-4">
              <Label htmlFor="Name" className="font-bold text-sm ">
                Quantity
              </Label>
              <Input
                id="qty"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                
              />
            </div>
            <div className="grid gap-3 w-full">
              <Label htmlFor="Token" className="font-bold text-sm">
                Transfer To
              </Label>
              <Input
                id="transfert0"
                type="text"
                placeholder="e.g. 0x5667ET..."
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>
          <div className="mt-5">
            <Button className="bg-[#179DFF] text-white font-semibold hover:bg-[#179DFF]/80 rounded-xl w-full">
              Trasfer Item
            </Button>
          </div>

                    </div>
                  </DialogContent>
                </Dialog>
                <Popover>
                  <PopoverTrigger>
                    <Share2 size={20} />
                  </PopoverTrigger>
                  <PopoverContent className="w-fit">
                    <div className="flex items-center gap-2 hover:bg-slate-800 px-4 py-2 rounded-md transition-all duration-300 cursor-pointer">
                      <Copy size={16} /> <span>Copy Link</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-slate-800 px-4 py-2 rounded-md transition-all duration-300 cursor-pointer">
                      <Twitter size={16} /> <span>Share to twitter</span>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className=" image  mt-3">
              <div className="relative w-full">
                <Image
                  src="/images/card.jpg"
                  alt="Super Hero 3"
                  height={500}
                  width={500}
                  className="w-auto aspect-square w-full object-cover rounded-xl"
                />{" "}
                <div className="absolute bottom-0 w-full p-4 bg-[#2F125F]/60 backdrop-blur-lg  rounded-b-xl">
                  <div className="flex justify-between me-2">
                    <div className="flex gap-2">
                      <Image
                        src={Bitcoin}
                        alt="Super Hero 3"
                        height={15}
                        width={15}
                        className="w-auto h-auto rounded-xl object-contain"
                      />
                      <p className="text-xs my-auto">Bitcoin</p>
                    </div>
                    <div className="flex gap-3 my-auto">
                      <Link href="newtab" target="_blank">
                        <SquareArrowOutUpRight
                          size={16}
                        />
                      </Link>

                      <Heart size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#281D3A] rounded-xl mt-3">
              <div className="px-4 py-5">
                <p className="text-xs font-bold mb-1">Current price</p>
                <div className="flex flex-row">
                  <p className="text-base font-medium me-2">1.3496 ETH</p>
                  <p className="text-[9px] font-medium text-[#B6B6B6] mb-0 pb-0 pt-2">
                    $5,299.85
                  </p>
                </div>

                <div className="flex justify-between mt-2 ">

                  <Dialog>
                    <DialogTrigger className="w-full bg-[#D500E7] text-white hover:bg-[#D500E7]/30 duration-700 flex items-center rounded-md py-2">
                      <div className="flex w-full justify-between gap-2">
                        <div className="flex w-10/12 border-end px-3 items-center">
                      <ShoppingBag/>
                      <p className="text-sm ms-2 font-semibold">Buy Now</p>
                      </div>
                      <div className="w-2/12 border-l-2 border-white px-2">
                      <ShoppingCart/>
                      </div>
                      </div>
                    </DialogTrigger>

                    <DialogContent
                      showCloseButton={true}
                      className="bg-[#180734] border-0"
                      style={{ borderRadius: "20px" }}
                    >
                      <div className="">
                        <p className="text-lg font-semibold mb-2"> This is an unrenewed collection</p>
                        <p className="text-gray-400 font-medium text-sm">Review this information to ensure its what you want to buy</p>
                      </div>

                      <div className="border-2 px-4 py-3 rounded-lg space-y-4">
                        <div className="flex justify-start  text-sm">
                          <div className="w-1/2">
                            <p className="text-gray-400">Collection name</p>
                          </div>
                          <div className="w-1/2">
                            <Link className="text-blue-600" href="/">Collect XYZ</Link>
                          </div>
                        </div>
                        <div className="flex justify-start items-start text-sm">
                          <div className="w-1/2">
                            <p className="text-gray-400">Creator</p>
                          </div>
                          <div className="w-1/2">
                            <Link className="text-blue-600" href="/">091239</Link>
                            <p className="text-gray-400 text-xs">Member since 2013</p>
                          </div>
                        </div>
                        <div className="flex justify-start  text-sm">
                          <div className="w-1/2">
                            <p className="text-gray-400">Total sales</p>
                          </div>
                          <div className="w-1/2">
                            <Link className="text-blue-600" href="/">Collect XYZ</Link>
                          </div>
                        </div>
                        <div className="flex justify-start  text-sm">
                          <div className="w-1/2">
                            <p className="text-gray-400">Total sales</p>
                          </div>
                          <div className="w-1/2">
                            <Link className="text-blue-600" href="/">Collect XYZ</Link>
                          </div>
                        </div>
                        <div className="flex justify-start  text-sm">
                          <div className="w-1/2">
                            <p className="text-gray-400">Total Volume</p>
                          </div>
                          <div className="w-1/2">
                            <p className="" href="/">- -</p>
                          </div>
                        </div>
                        <div className="flex justify-start  text-sm">
                          <div className="w-1/2">
                            <p className="text-gray-400">Social Links</p>
                          </div>
                          <div className="w-1/2">
                            <p className="" href="/">- -</p>
                          </div>
                        </div>
                        <div className="flex justify-start  text-sm">
                          <div className="w-1/2">
                            <p className="text-gray-400">Contract Address</p>
                          </div>
                          <div className="w-1/2">
                            <Link className="text-blue-600" href="/">Collect XYZ</Link>
                          </div>
                        </div>
                        <div className="flex justify-start  text-sm">
                          <div className="w-1/2">
                            <p className="text-gray-400">Total Items</p>
                          </div>
                          <div className="w-1/2">
                            <p className="" href="/">1 item</p>
                          </div>
                        </div>
                        <div className="flex justify-start  text-sm">
                          <div className="w-1/2">
                            <p className="text-gray-400">Create Date</p>
                          </div>
                          <div className="w-1/2">
                            <p className="" href="/">2 years ago</p>
                          </div>
                        </div>

                      </div>
                      <div className="flex gap-2">
                        <Checkbox
                          id="terms"
                          onCheckedChange={(checked) => setIsOpen(checked)}
                          className="pt-3"
                          
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I understand that Fame Guild has not reviewed this collection<br/>
                          and blockchain transactions are irreversible.
                        </label>

                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="mx-2"></div>

                  {/* second modal on checkbox */}
                  <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger className="hidden" >
                      <Tag />
                      <div className="mx-1"></div>
                      <p className="text-xs">checkbox</p>
                    </DialogTrigger>

                    <DialogContent
                      showCloseButton={true}
                      className="bg-[#180734] border-0"
                      style={{ borderRadius: "20px" }}
                    >
                      <div className="pb-4">
                        <p className="text-lg font-semibold">Approved purchase</p>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <div className="flex gap-4">
                          <div>
                            {/* image */}
                            <Image
                              src="/images/card.jpg"
                              alt="Super Hero 3"
                              height={100}
                              width={100}
                              className="w-auto h-[80px] aspect-square object-cover rounded-xl"
                            />
                          </div>
                          <div>
                            <p className="text-base font-medium mb-2">Super Hero #6756776</p>
                            <p className="text-gray-400 text-xs mb-1">Crystal_mountain</p>
                            <p className="text-gray-400 text-xs">Chain: Rootstock</p>
                          </div>
                        </div>
                        <div className="text-end">
                          <Link className="" href="/">091239 MTC</Link>
                          <p className="text-gray-300 text-xs">$123</p>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <p>Go to your wallet</p>
                        <p className="text-gray-300 text-xs">You'll be asked to approve this purchase from your wallet.</p>

                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog>
                    <DialogTrigger className="w-full bg-[#179DFF] text-white hover:bg-[#179DFF]/30 duration-700 flex justify-center items-center rounded-md py-2">
                      <Tag />
                      
                      <p className="text-sm ms-2 font-semibold">Make Offer</p>

                     
                    </DialogTrigger>

                    <DialogContent
                      showCloseButton={true}
                      className="bg-[#180734] w-[600px] border-0"
                      style={{ borderRadius: "20px" }}
                    >
                      <div className="pb-4">
                        <p className="text-lg font-semibold">Make an Offer</p>
                      </div>
                      <div className="flex justify-between mb-4">
                        <div className="flex gap-4">
                          <Image
                            src="/images/card.jpg"
                            alt="Super Hero 3"
                            height={100}
                            width={100}
                            className="w-auto h-[80px] aspect-square object-cover rounded-xl"
                          />
                          <div>
                          <p className="text-base font-medium mb-2">Super Hero #6756776</p>
                            <p className="text-gray-400 text-xs">Crystal_mountain</p>
                          </div>
                        </div>
                        <div>0.14 ETH</div>
                      </div>
                      <div className="bg-[#2F125F] px-4 py-3 rounded-lg space-y-2">
                        <div className="flex justify-between">
                          <p className="text-gray-300 font-medium text-sm">Wallet Balance</p> <p className="text-gray-300 font-medium text-sm">1.34 ETH</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-gray-300 font-medium text-sm">Floor Price</p> <p className="text-gray-300 font-medium text-sm">1.34 ETH</p>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-gray-300 font-medium text-sm">Best Offer</p> <p className="text-gray-300 font-medium text-sm">1.34 ETH</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="w-3/5 space-y-3">
                          <Label htmlFor="collection" className="font-bold text-sm ">
                            Price
                          </Label>
                          <Input
                            id="collection"
                            type="text"
                            placeholder=""
                            className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                          />
                        </div>
                        <div className="w-2/5 mt-9">
                        
                          <Select className="">
                            <SelectTrigger className=" bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl ">
                              <SelectValue placeholder="Token" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#16092E]">
                              <SelectItem value="RBTC">RBTC</SelectItem>
                              <SelectItem value="DLLA">DLLA</SelectItem>
                             
                            </SelectContent>
                          </Select>
                        </div>
                        </div>
                        <div className="flex gap-4">
                        <div className="w-2/5 space-y-3">
                          <Label htmlFor="mint" className="font-bold text-sm">
                            Duration
                          </Label>
                          <Select>
                            <SelectTrigger className=" bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl ">
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#16092E]">
                              <SelectItem value="12h">12 Hour</SelectItem>
                              <SelectItem value="1d">1 Day</SelectItem>
                              <SelectItem value="3d">3 Day</SelectItem>
                              <SelectItem value="7d">7 Day</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="w-3/5 mt-9">
                          
                          <Input
                            id="collection"
                            type="text"
                            placeholder=""
                            className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                          />
                        </div>

                      </div>
                      <div className="mt-5">
                        <Button className="w-full bg-[#179DFF] text-white hover:bg-[#179DFF]/30 duration-700">
                          <p className="text-sm font-semibold">Make Offer</p>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>


                </div>

                {/* list for sale modal */}
                <div className="mt-4">
                  <Dialog>
                    <DialogTrigger className=" bg-[#8845a0] text-white hover:bg-[#8845a0]/30 duration-700 flex justify-center gap-2 items-center rounded-md py-2 w-full">
                      <ListPlus />
                      <p className="text-sm ms-2 font-semibold">List For Sale</p>
                    </DialogTrigger>

                    <DialogContent
                      showCloseButton={true}
                      className="bg-[#180734] border max-w-3xl sm:rounded-3xl"
                    >
                      <ScrollArea className="h-[520px]">

                        <div className="">
                          <h2 className="text-lg ms-2 mb-3 font-medium">List for sale</h2>
                        </div>
                        <div className="flex justify-center gap-10">
                          <div className="w-1/2">
                            <div className="">
                              <Label htmlFor="collection" className="font-bold text-sm ">
                                Choose a type of sale
                              </Label>
                              <RadioGroup
                                className="grid gap-0 "
                                defaultValue="one" onValueChange={setType}>

                                <div className="mt-4 border-2 border-slate-700 rounded-xl rounded-b-none p-2">
                                  <div className="flex justify-between items-center gap-20">
                                    <div className="">
                                      <p className="text-xs font-medium mb-1">Fixed Price</p>
                                      <p className="text-xs font-medium text-gray-400 text-nowrap">The item is listed at the price you set</p>
                                    </div>
                                    <div className="">
                                      <RadioGroupItem value="one" id="one" />
                                    </div>
                                  </div>
                                </div>
                                <div className="border-2 border-t-0 border-slate-700 rounded-xl rounded-t-none p-2">
                                  <div className="flex justify-between items-center gap-20">
                                    <div className="">
                                      <p className="text-xs font-medium mb-1">Sell to hightest bidder</p>
                                      <p className="text-xs font-medium text-gray-400 text-nowrap">The item is listed at the price you set</p>
                                    </div>
                                    <div className="">
                                      <RadioGroupItem value="two" id="two" />
                                    </div>
                                  </div>
                                </div>
                              </RadioGroup>

                            </div>
                            <div className="mt-5">
                              <Label htmlFor="collection" className="font-bold text-sm">
                                Set a Price
                              </Label>
                              <div className="flex w-full mt-3">
                                <Input
                                  id="collection"
                                  type="text"
                                  placeholder=""
                                  className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl rounded-e-none"
                                />
                                <Select>
                                  <SelectTrigger className=" bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl rounded-s-none w-1/4 gap-1 ">
                                    <SelectValue placeholder="Wallet" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-[#16092E]">
                                    <SelectItem value="ETH">ETH</SelectItem>
                                    <SelectItem value="WETH">WETH</SelectItem>
                                  
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="mt-5">
                              <Label htmlFor="collection" className="font-bold text-sm ">
                                Duration
                              </Label>

                              <div className="mt-3">
                                <Select >
                                  <SelectTrigger className=" bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl">
                                    <SelectValue placeholder="Select Duration" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-[#16092E]">
                                    <SelectItem value="1m">1 month</SelectItem>
                                    <SelectItem value="7d">7 Days </SelectItem>
                                    <SelectItem value="1d">1 Day </SelectItem>
                                    
                                  </SelectContent>
                                </Select>
                              </div>

                            </div>
                            <div className="mt-5">
                              <Accordion type="single" collapsible className="w-full">
                                <AccordionItem
                                  className="border-0 rounded-lg mb-5"
                                  value="item-1"
                                >
                                  <AccordionTrigger className="hover:no-underline">
                                    <div className="flex items-center gap-2 text-sm">
                                      More Options
                                    </div>
                                  </AccordionTrigger>
                                  <AccordionContent className="text-xs">
                                    {/* changeable */}

                                    {
                                      type === "one" ?
                                        <div>
                                          <div className="flex flex-row items-start justify-between ">
                                            <div className="space-y-0.5">
                                              <Label className="text-base">
                                                Reserve for specific buyer
                                              </Label>
                                              <p className="text-xs text-gray-300">
                                                Receive emails about new products, features, and more.
                                              </p>
                                            </div>
                                            <div>
                                              <Switch
                                              />
                                            </div>
                                          </div>
                                          <div className="mt-4 mx-1">
                                            <Input
                                              id="collection"
                                              type="text"
                                              placeholder=""
                                              className="bg-[#16092E] ring-1 ring-[#2F125F] rounded-xl"
                                            />
                                          </div>
                                        </div> :

                                        <div>
                                          <div className="flex flex-row items-start justify-between ">
                                            <div className="space-y-0.5">
                                              <Label className="text-base">
                                                Include reserve price
                                              </Label>
                                              {/* <p className="text-xs text-gray-300">
                                                Receive emails about new products, features, and more.
                                              </p> */}
                                            </div>
                                            <div>
                                              <Switch
                                              />
                                            </div>
                                          </div>
                                          <div className="mt-4 mx-1">
                                            <Input
                                              id="collection"
                                              type="text"
                                              placeholder=""
                                              className="bg-[#16092E] ring-1 ring-[#2F125F] rounded-xl"
                                            />
                                          </div>
                                        </div>

                                    }


                                    
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                              <div className="mt-5">
                                      <p className="font-semibold text-base">Summary</p>
                                      <div className="flex justify-between border-b border-[#5A477B] py-2 text-sm">
                                        <p className="">Listing Price</p>
                                        <p className="">1ETH</p>
                                      </div>
                                      <div className="flex justify-between border-b border-[#5A477B] py-2 text-sm">
                                        <p className="">Listing Price</p>
                                        <p className="">1ETH</p>
                                      </div>
                                      <div className="flex justify-between border-b border-[#5A477B] py-2 text-sm">
                                        <p className="">Listing Price</p>
                                        <p className="">1ETH</p>
                                      </div>
                                      <div className="flex justify-between py-3 text-sm">
                                        <p className="text-base font-semibold text-nowrap">Total potential earnings</p>
                                        <div className="text-end">
                                          <p className="text-base font-semibold">0.232 ETH</p>
                                          <p className="text-xs text-gray-300 font-semibold">$234USD</p>
                                        </div>
                                      </div>
                                    </div>
                            </div>

                            <div className="mt-5">
                              <Button className="w-full bg-[#D500E7] text-white hover:bg-[#D500E7]/30 duration-700">
                                <p className="text-xs">Complete Listing</p>
                              </Button>
                            </div>

                          </div>

                          <div className="">
                            <Image
                              src="/images/card.jpg"
                              alt="Super Hero 3"
                              height={300}
                              width={300}
                              className="w-[300px] h-[300px]  rounded-xl"
                            />
                            <div className="mt-4">
                            <p className="text-base font-medium mb-2">Super Hero #6756776</p>
                            <p className="text-gray-400 text-xs">Crystal_mountain</p>
                            </div>
                          </div>
                        </div>

                      </ScrollArea>

                    </DialogContent>
                  </Dialog>
                </div>

              </div>
            </div>
          </div>
          <div className="w-4/12"></div>
          {/* second content */}
          <div className="w-8/12 relative">
            <div className="">
              <div className="px-7 py-5 flex justify-between bg-[#281D3A] rounded-xl mb-6">
                <div>
                  <p className="text-sm font-bold mb-3">Current price</p>
                  <span className="text-xl font-medium me-2">1.3496 ETH</span>
                </div>
                <div>
                  <p className="text-sm font-bold mb-3">Last Price</p>
                  <span className="text-xl font-medium me-2">1.3496 ETH</span>
                </div>
                <div>
                  <p className="text-sm font-bold mb-3">Top Bid</p>
                  <span className="text-xl font-medium me-2">1.3496 ETH</span>
                </div>
                <div>
                  <p className="text-sm font-bold mb-3">Own by</p>
                  <span className="text-xl font-medium me-2">10</span>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  className="border-0 bg-[#16092E] px-4 rounded-lg mb-5"
                  value="item-1"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2 text-sm">
                      <LineChart size={16} /> Price History
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs">
                    <PriceHistory />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  className="border-0 bg-[#16092E] px-4 rounded-lg  mb-5"
                  value="item-2"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2 text-sm">
                      <ListPlus size={16} /> Listing
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs">
                    <div className="listview ">
                      <Table className="w-full">
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader className="">
                          <TableRow className="hover:bg-transparent">
                            <TableHead className="">Price</TableHead>
                            <TableHead>USD Price</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Expiration</TableHead>
                            <TableHead>From</TableHead>
                            <TableHead className="text-right"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {items.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell className="">
                                {item.best_offer}
                              </TableCell>
                              <TableCell>{item.best_offer}</TableCell>
                              <TableCell>{item.cost}</TableCell>
                              <TableCell>{item.cost}</TableCell>
                              <TableCell>{item.cost}</TableCell>
                              <TableCell className="text-right">
                                <Button className="bg-blue-500 hover:bg-blue-500/80 text-white font-semibold">Buy</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="border-0 bg-[#16092E] px-4 rounded-lg  mb-5"
                  value="item-3"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2 text-sm">
                      <Tag size={16} /> Offers
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-xs">
                    <div className="listview ">
                      <Table className="w-full">
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader className="">
                          <TableRow className="hover:bg-transparent">
                            <TableHead className="">Price</TableHead>
                            <TableHead>USD Price</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Floor Difference</TableHead>
                            <TableHead>Expiration</TableHead>
                            <TableHead className="text-right">From</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {items.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell className="">
                                {item.best_offer}
                              </TableCell>
                              <TableCell>{item.best_offer}</TableCell>
                              <TableCell>{item.cost}</TableCell>
                              <TableCell>{item.cost}</TableCell>
                              <TableCell>{item.cost}</TableCell>
                              <TableCell className="text-right">
                                <Link href="/" className="text-blue-600 font-semibold">asdASDsadsaasds</Link>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  className="border-0 bg-[#16092E] px-4 rounded-lg "
                  value="item-4"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp size={16} /> Activity
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col border-b  border-[#2F125F] py-3">
                      <div className="border border-[#D500E7] bg-[#D500E7]/20 text-white rounded-full max-w-min px-5 py-1 text-xs ">
                        Listing
                      </div>
                      <div className="flex justify-between  pt-3">
                        <div className=" w-full">
                          <p className="text-[#7D7D7D] ">
                            From{" "}
                            <span className="text-white pl-2 font-bold">
                              Zubraj53453
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-row justify-end w-full">
                          <div>
                            <p className="">9.61 ETH</p>
                          </div>
                          <div className="mx-5"></div>
                          <div>
                            <p className="text-[#7D7D7D] pb-0 mb-0">
                              2 months ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col border-b  border-[#2F125F] py-3">
                      <div className="border border-[#179DFF] bg-[#179DFF]/20 text-white rounded-full max-w-min px-5 py-1 text-xs">
                        Sell
                      </div>
                      <div className="flex justify-between  pt-3">
                        <div className=" w-full">
                          <p className="text-[#7D7D7D] text-xs">
                            From{" "}
                            <span className="text-white pl-2 font-bold text-sm">
                              Zubraj53453
                            </span>
                          </p>
                        </div>
                        <div className=" w-full">
                          <p className="text-[#7D7D7D] text-xs">
                            To{" "}
                            <span className="text-white pl-2 font-bold text-sm">
                              Zubraj53453
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-row justify-end w-full">
                          <div>
                            <p className="">9.61 ETH</p>
                          </div>
                          <div className="mx-5"></div>
                          <div>
                            <p className="text-[#7D7D7D] pb-0 mb-0 ">
                              2 months ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col border-b  border-[#2F125F] py-3">
                      <div className="border border-[#17FF8F] bg-[#17FF8F]/20 text-white rounded-full max-w-min px-5 py-1 text-xs">
                        Transfer
                      </div>
                      <div className="flex justify-between  pt-3">
                        <div className=" w-full">
                          <p className="text-[#7D7D7D] text-xs">
                            From{" "}
                            <span className="text-white pl-2 font-bold text-sm">
                              Zubraj53453
                            </span>
                          </p>
                        </div>
                        <div className=" w-full">
                          <p className="text-[#7D7D7D] text-xs">
                            To{" "}
                            <span className="text-white pl-2 font-bold text-sm">
                              Zubraj53453
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-row justify-end w-full">
                          <div>
                            <p className="">9.61 ETH</p>
                          </div>
                          <div className="mx-5"></div>
                          <div>
                            <p className="text-[#7D7D7D] pb-0 mb-0 ">
                              2 months ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-5"></div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="bg-[#16092E] rounded-xl mt-6">
                <div>
                  <div>
                    <Tabs defaultValue="Description">
                      <TabsList className="grid w-full grid-cols-4 bg-transparent">
                      <TabsTrigger
                          className="data-[state=active]:text-[#179DFF] data-[state=active]:bg-transparent data-[state=active]:border-b-4 pb-1 border-[#179DFF] rounded-none "
                          value="Traits"
                        >
                          <div className="flex items-center gap-2 ">
                            <ListTodo size={18} />
                            <span className="text-md font-medium">Traits</span>
                          </div>
                        </TabsTrigger>
                        <TabsTrigger
                          className="data-[state=active]:text-[#179DFF] data-[state=active]:bg-transparent data-[state=active]:border-b-4 pb-1 border-[#179DFF] rounded-none "
                          value="Description"
                        >
                          <div className="flex items-center gap-2 ">
                            <ScrollText size={18} />
                            <span className="text-md font-medium">
                              Description
                            </span>
                          </div>
                        </TabsTrigger>

                        <TabsTrigger
                          className="data-[state=active]:text-[#179DFF] data-[state=active]:bg-transparent data-[state=active]:border-b-4 pb-1 border-[#179DFF] rounded-none "
                          value="Story"
                        >
                          <div className="flex items-center gap-2 ">
                            <BookOpenText size={18} />
                            <span className="text-md font-medium">
                              Story
                            </span>
                          </div>
                        </TabsTrigger>
                        
                        <TabsTrigger
                          className="data-[state=active]:text-[#179DFF] data-[state=active]:bg-transparent data-[state=active]:border-b-4 pb-1 border-[#179DFF] rounded-none "
                          value="Details"
                        >
                          <div className="flex items-center gap-2 ">
                            <CircleAlert size={18} />
                            <span className="text-md font-medium">Details</span>
                          </div>
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="Traits">
                        <div className="p-4 text-xs grid grid-cols-3 gap-5">
                          <div className="bg-[#56359080] text-center px-2 py-3 rounded-xl ">
                            <p>Background</p>
                            <p><span className="font-semibold">Beige</span> 14%</p>
                            <p>Floor: 1.231ETH</p>
                          </div>
                          <div className="bg-[#56359080] text-center px-2 py-3 rounded-xl ">
                            <p>Background</p>
                            <p><span className="font-semibold">Beige</span> 14%</p>
                            <p>Floor: 1.231ETH</p>
                          </div>
                          <div className="bg-[#56359080] text-center px-2 py-3 rounded-xl ">
                            <p>Background</p>
                            <p><span className="font-semibold">Beige</span> 14%</p>
                            <p>Floor: 1.231ETH</p>
                          </div>
                          <div className="bg-[#56359080] text-center px-2 py-3 rounded-xl ">
                            <p>Background</p>
                            <p><span className="font-semibold">Beige</span> 14%</p>
                            <p>Floor: 1.231ETH</p>
                          </div>
                          <div className="bg-[#56359080] text-center px-2 py-3 rounded-xl ">
                            <p>Background</p>
                            <p><span className="font-semibold">Beige</span> 14%</p>
                            <p>Floor: 1.231ETH</p>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="Description">
                        <div className="px-4 pt-2 pb-4 ">
                          <p className="leading-5 text-sm text-gray-400">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate the
                          visual form of a document or a typeface without
                          relying on meaningful content. Lorem ipsum may be used
                          as a placeholder before the final copy is available.
                          </p>
                          
                        </div>
                      </TabsContent>
                      <TabsContent value="Story">
                        <div className="px-4 pt-2 pb-4 ">
                          <p className="leading-5 text-sm text-gray-400">
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text commonly used to demonstrate the
                          visual form of a document or a typeface without
                          relying on meaningful content. Lorem ipsum may be used
                          as a placeholder before the final copy is available.
                          </p>
                          
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="Details" className="">
                        <div className="px-4 py-2 text-base">
                          <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                            <p className="">Token Contact</p>
                            <Link href="/" className="text-blue-600">XS0D....099999999.99</Link>
                          </div>
                          <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                            <p className="">Max Supply</p>
                            <p className="">099999999.99</p>
                          </div>
                          <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                            <p className="">Token Supply</p>
                            <p className="">099999999.99</p>
                          </div>
                          <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                            <p className="">Token Name</p>
                            <p className="">Zubraj</p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>

              <div className="bg-[#16092E] rounded-xl p-4 mt-6">
                <div className="flex justify-between mb-4">
                  <p className="text-md font-semibold">More From This Collection</p>
                  <div className="flex gap-2">
                    <ArrowLeft size={20} />
                    <ArrowRight size={20} />
                  </div>
                </div>
                <SimilarNFT data={items} />
              </div>

            </div>

            {/* <Button className="w-auto bg-[#D500E7] text-white hover:bg-[#179DFF]/30 duration-700  fixed bottom-10 right-48">
              <ShoppingCart />
              <div className="mx-1"></div>
              <span>My Cart</span>
            </Button> */}
          </div>
        </div>

      </div>
    </Container>
  );
};

export default NFTViewPage;
