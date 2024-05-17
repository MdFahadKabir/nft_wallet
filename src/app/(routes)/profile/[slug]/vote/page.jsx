"use client";

import Container from "@/components/shared/container";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const UserVote = () => {
  const [tab, setTab] = useState("createVote");
  const [date, setDate] = useState("");

  const [inputs, setInputs] = useState([
    { id: 1, value: "" }, // Initial input
  ]);

  // Function to handle adding a new input
  const handleAddInput = () => {
    const newInput = { id: inputs.length + 1, value: "" };
    setInputs([...inputs, newInput]);
  };

  // Function to handle changing input value
  const handleInputChange = (id, value) => {
    const newInputs = inputs.map((input) =>
      input.id === id ? { ...input, value } : input
    );
    setInputs(newInputs);
  };

  return (
    <Container>
      <div className="flex justify-between gap-12 mx-auto my-6 px-8">
        <div className="tabs w-1/4">
          <div
            className={cn(
              "w-full mt-2 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer",
              tab === "createVote" && "bg-[#16092E] "
            )}
            onClick={() => setTab("createVote")}
          >
            Create Vote
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
          {tab === "createVote" && (
            <>
              <p className="font-semibold text-xl text-white">
                Create New Vote
              </p>
              <div className="bg-[#16092E] rounded-xl p-5 mt-5 w-2/3">
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-[200px] bg-[#2F125F]">
                      <SelectValue placeholder="Vote For" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[200px] justify-start border-0 bg-[#2F125F] text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span>Pick Expiary date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex my-5">
                  <Input
                    id="royelty"
                    type="text"
                    placeholder="Write question here. . ."
                    className="bg-[#16092E] rounded-none py-2 px-0 border-b "
                  />
                </div>
                <div className="my-5">
                  <p className="text-sm font-semibold">Write Options</p>
                  <div className="mt-4">
                    {inputs.map((input) => (
                      <div key={input.id} className="mb-3 w-1/3">
                        <Input
                          id={`input-${input.id}`}
                          type="text"
                          placeholder="Write question here..."
                          className="bg-[#16092E] rounded-none py-2 px-0 border-b"
                          value={input.value}
                          onChange={(e) =>
                            handleInputChange(input.id, e.target.value)
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button onClick={handleAddInput} className="text-sm text-sky-300">+ Add More</button>

                <Separator className="my-5 " />
                <div className="flex justify-end">
                  <Button className="bg-[#D500E7] hover:bg-[#D500E7]/80 text-white">
                    Create Vote
                  </Button>
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

export default UserVote;
