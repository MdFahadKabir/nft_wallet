"use client";

import Container from "@/components/shared/container";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const StoryPage = () => {
  const [tab, setTab] = useState("all");
  return (
    <Container>
      <div className="flex justify-between gap-12 mx-auto my-6 px-8">
        <div className="tabs w-1/4">
          <div
            className={cn(
              "w-full mt-2 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer",
              tab === "all" && "bg-[#16092E] "
            )}
            onClick={() => setTab("all")}
          >
            All Votes
          </div>

          <div
            className={cn(
              "w-full mt-2 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer",
              tab === "ongoing" && "bg-[#16092E] "
            )}
            onClick={() => setTab("ongoing")}
          >
            Ongoing Votes
          </div>
          <div
            className={cn(
              "w-full mt-2 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer",
              tab === "complete" && "bg-[#16092E] "
            )}
            onClick={() => setTab("complete")}
          >
            Completed Voting
          </div>
        </div>
        <div className="view w-3/4">
        {tab === "all" && (
            <>
              <p className="font-semibold text-xs text-[#A690CA]">5 Items</p>
              <div className="bg-[#16092E] rounded-xl p-5 mt-5 w-2/3">
                <div className="flex gap-2">
                  <Badge className="border-2 border-[#179DFF] bg-[#179DFF]/40 hover:bg-[#179DFF]/60  text-white">
                    NFT #35456
                  </Badge>
                  <Badge className="border-2 border-[#D500E7] bg-[#D500E7]/40 hover:bg-[#D500E7]/60  text-white">
                    Ex- 12/92/1913
                  </Badge>
                </div>

                <div className="flex gap-5 mt-8">
                  <div>
                    <Image
                      src="/images/banner2.png"
                      height={60}
                      width={60}
                      className="object-cover aspect-square rounded-xl"
                    />
                  </div>
                  <div className="">
                    <p className="text-md mb-4">
                      Launch your NFT collection for others to mint. Launch your
                      NFT collection for?
                    </p>
                    <RadioGroup defaultValue="option-one" className="space-y-2">
                      <div className="flex items-center space-x-2 text-[#A690CA]">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                      </div>
                      <div className="flex items-center space-x-2 text-[#A690CA]">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                      </div>
                      <div className="flex items-center space-x-2 text-[#A690CA]">
                        <RadioGroupItem
                          value="option-three"
                          id="option-three"
                        />
                        <Label htmlFor="option-three">Option three</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <Separator className="my-5 " />
                <div className="flex justify-between">
                  <p className="font-semibold text-xs text-[#A690CA]">
                    1.2K People voted on this.
                  </p>
                  <Button className="bg-[#D500E7] hover:bg-[#D500E7]/80 text-white">
                    Submit Your Vote
                  </Button>
                </div>
              </div>

              <div className="bg-[#16092E] rounded-xl p-5 mt-5 w-2/3">
                <div className="flex gap-2">
                  <Badge className="border-2 border-[#179DFF] bg-[#179DFF]/40 hover:bg-[#179DFF]/60  text-white">
                    NFT #35456
                  </Badge>
                  <Badge className="border-2 border-[#ffa828] bg-[#ffa828] hover:border-[#ffa828] hover:bg-[#ffa828] text-white">
                    Finished
                  </Badge>
                </div>

                <div className="flex gap-5 mt-8">
                  <div>
                    <Image
                      src="/images/banner2.png"
                      height={60}
                      width={60}
                      className="object-cover aspect-square rounded-xl"
                    />
                  </div>
                  <div className="">
                    <p className="text-md mb-4">
                      Launch your NFT collection for others to mint. Launch your
                      NFT collection for?
                    </p>
                    <div>
                      <span className="text-2xl me-2">🏆</span>{" "}
                      <span className="text-[#FFA828] text-lg font-semibold">
                        Option A
                      </span>
                    </div>
                  </div>
                </div>
                <Separator className="my-5" />
                <div className="flex justify-start">
                  <p className="font-semibold text-xs text-[#A690CA]">
                    1.2K People voted on this.
                  </p>
                </div>
              </div>

             
            </>
          )}

          {tab === "ongoing" && (
            <>
              <p className="font-semibold text-xs text-[#A690CA]">5 Items</p>
              <div className="bg-[#16092E] rounded-xl p-5 mt-5 w-2/3">
                <div className="flex gap-2">
                  <Badge className="border-2 border-[#179DFF] bg-[#179DFF]/40 hover:bg-[#179DFF]/60  text-white">
                    NFT #35456
                  </Badge>
                  <Badge className="border-2 border-[#D500E7] bg-[#D500E7]/40 hover:bg-[#D500E7]/60  text-white">
                    Ex- 12/92/1913
                  </Badge>
                </div>

                <div className="flex gap-5 mt-8">
                  <div>
                    <Image
                      src="/images/banner2.png"
                      height={60}
                      width={60}
                      className="object-cover aspect-square rounded-xl"
                    />
                  </div>
                  <div className="">
                    <p className="text-md mb-4">
                      Launch your NFT collection for others to mint. Launch your
                      NFT collection for?
                    </p>
                    <RadioGroup defaultValue="option-one" className="space-y-2">
                      <div className="flex items-center space-x-2 text-[#A690CA]">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Option One</Label>
                      </div>
                      <div className="flex items-center space-x-2 text-[#A690CA]">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Option Two</Label>
                      </div>
                      <div className="flex items-center space-x-2 text-[#A690CA]">
                        <RadioGroupItem
                          value="option-three"
                          id="option-three"
                        />
                        <Label htmlFor="option-three">Option three</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <Separator className="my-5 " />
                <div className="flex justify-between">
                  <p className="font-semibold text-xs text-[#A690CA]">
                    1.2K People voted on this.
                  </p>
                  <Button className="bg-[#D500E7] hover:bg-[#D500E7]/80 text-white">
                    Submit Your Vote
                  </Button>
                </div>
              </div>

             
            </>
          )}

          {tab === "complete" && (
            <>
              <p className="font-semibold text-xs text-[#A690CA]">5 Items</p>
              
              <div className="bg-[#16092E] rounded-xl p-5 mt-5 w-2/3">
                <div className="flex gap-2">
                  <Badge className="border-2 border-[#179DFF] bg-[#179DFF]/40 hover:bg-[#179DFF]/60  text-white">
                    NFT #35456
                  </Badge>
                  <Badge className="border-2 border-[#ffa828] bg-[#ffa828] hover:border-[#ffa828] hover:bg-[#ffa828] text-white">
                    Finished
                  </Badge>
                </div>

                <div className="flex gap-5 mt-8">
                  <div>
                    <Image
                      src="/images/banner2.png"
                      height={60}
                      width={60}
                      className="object-cover aspect-square rounded-xl"
                    />
                  </div>
                  <div className="">
                    <p className="text-md mb-4">
                      Launch your NFT collection for others to mint. Launch your
                      NFT collection for?
                    </p>
                    <div>
                      <span className="text-2xl me-2">🏆</span>{" "}
                      <span className="text-[#FFA828] text-lg font-semibold">
                        Option A
                      </span>
                    </div>
                  </div>
                </div>
                <Separator className="my-5" />
                <div className="flex justify-start">
                  <p className="font-semibold text-xs text-[#A690CA]">
                    1.2K People voted on this.
                  </p>
                </div>
              </div>
   
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default StoryPage;
