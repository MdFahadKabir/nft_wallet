"use client";

import React, { useState } from "react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Dropzone from "@/components/shared/dropzone";
import { Upload } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const RootStockFrom = () => {
  const [value, setValue] = useState("Digital");

  console.log(value)

  return (
    <Card className="bg-transparent rounded-2xl">
      <CardContent className="flex justify-between gap-10 px-10 py-4">
        <div className="left w-1/2">
          <div className="my-6 w-5/6">
            <h3 className="text-xl font-semibold">
              First, you’ll need to deploy a contract
            </h3>
            <p className="text-xs py-2">
              You’ll need to deploy an ERC-721 contract onto the blockchain
              before you can create a drop. What is a contract?
            </p>
          </div>
          {/* <div className="flex justify-between gap-6 items-center mb-6">
            <div className="flex gap-3 w-4/6">
              <Button
                className="bg-[#281546] text-white hover:bg-[#281546]/30 hover:text-white duration-700 text-sm"
                variant="default"
              >
                ERC 610
              </Button> 
              <Button variant="ghost" className="text-sm">
                ERC 404
              </Button>
            </div>
            <Select>
              <SelectTrigger className="w-3/6 bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-[#281546]">
                <SelectItem value="light">Art</SelectItem>
                <SelectItem value="dark">Photography</SelectItem>
                <SelectItem value="system">Gaming</SelectItem>
              </SelectContent>
            </Select>
          </div> */}

          <div className="flex gap-6 mb-6">
            <div className="grid gap-3 w-1/2">
              <Label htmlFor="Name" className="font-bold text-sm">
                Origin
              </Label>
              <Select onValueChange={setValue}>
                <SelectTrigger className=" bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl ">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-[#2F125F]">
                  <SelectItem value="Digital">Digital Artwork</SelectItem>
                  <SelectItem value="Physical">Physical Artwork</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3 w-1/2">
              <Label htmlFor="Name" className="font-bold text-sm">
                ERC Type
              </Label>
              <Select>
                <SelectTrigger className=" bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl ">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-[#2F125F]">
                  {
                    value === "Digital" &&
                    <>
                      <SelectItem value="1155">ERC 1155</SelectItem>
                      <SelectItem value="404">ERC 404</SelectItem>
                    </>
                  }
                  {
                    value === "Physical" &&
                    <SelectItem value="721">ERC 721</SelectItem>
                  }

                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-6 mb-6">
            <div className="grid gap-3 w-1/2">
              <Label htmlFor="Name" className="font-bold text-sm ">
                Name
              </Label>
              <Input
                id="Name"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "

              />
            </div>
            <div className="grid gap-3 w-1/2">
              <Label htmlFor="Token" className="font-bold text-sm">
                Token Symbol
              </Label>
              <Input
                id="Token"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>

          <div className="mb-5">
            <div className="grid gap-3 ">
              <Label htmlFor="Description" className="font-bold text-sm">
                Description
              </Label>
              <Textarea
                id="Description"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="grid gap-3 ">
              <Label htmlFor="Description" className="font-bold text-sm">
                Tell Collection Story
              </Label>
              <Textarea
                id="Story"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>

          {/* org royal */}

          <div className="flex gap-6 mb-6">
            <div className="grid gap-3 w-1/2">
              <Label htmlFor="Name" className="font-bold text-sm">
                Category
              </Label>
              <Select>
                <SelectTrigger className=" bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl ">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-[#2F125F]">
                  <SelectItem value="light">Art</SelectItem>
                  <SelectItem value="dark">Photography</SelectItem>
                  <SelectItem value="system">Game</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3 w-1/2">
              <Label htmlFor="Token" className="font-bold text-sm">
                Royalty
              </Label>
              <Input
                id="Token"
                type="text"
                placeholder="Recommended 5%"
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>

          {/* <div className="mb-6">
            <div className="grid gap-3 ">
              <Label htmlFor="Description" className="font-bold text-sm">
                Collection Logo Type
              </Label>
              <RadioGroup defaultValue="comfortable" className="flex gap-28">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="default"
                    id="r1"
                    className="text-[#D500E7] w-6 h-6  border-4 border-[#2F125F]"
                  />
                  <Label
                    htmlFor="r1"
                    className="text-[#5A477B] text-sm font-semibold"
                  >
                    Upload
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
                    className="text-[#5A477B] text-sm font-semibold"
                  >
                    URI Link
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="compact"
                    id="r3"
                    className="text-[#D500E7] w-6 h-6  border-4 border-[#2F125F]"
                  />
                  <Label
                    htmlFor="r3"
                    className="text-[#5A477B] text-sm font-semibold"
                  >
                    Ai Generated
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div> */}
        </div>

        <div className="right w-1/2">

          <div className="grid gap-3 w-1/2 mb-6">
            <Label htmlFor="mint" className="font-bold text-sm">
              Logo Image Type
            </Label>
            <Select>
              <SelectTrigger className=" bg-[#16092E] ring-1 ring-[#2F125F] ps-4 font-medium rounded-xl ">
                <SelectValue placeholder="Select Mint Type" />
              </SelectTrigger>
              <SelectContent className="bg-[#16092E]">
                <SelectItem value="Upload">Upload</SelectItem>
                <SelectItem value="IPFS">IPFS URI</SelectItem>
                <SelectItem value="AI">AI Generated</SelectItem>
                <SelectItem value="Draw">Draw</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="my-6 grid gap-3">
            <Label htmlFor="Name" className="font-bold text-sm">
              Logo Image
            </Label>
            <div className="flex justify-start items-center gap-5">
              <div>
                <Dropzone
                  dropMessage={<Upload />}
                  handleOnDrop={{}}
                  classNameWrapper="w-28 h-28 justify-center items-center"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Drag of Click to Upload</p>
                <p className="font-medium text-[#5A477B] text-sm">
                  Recommended Size:{" "}
                  <span className="text-[#A690CA]">249px x 249px</span>
                </p>
                <p className="font-medium text-[#5A477B] text-sm">
                  Recommended Type:{" "}
                  <span className="text-[#A690CA]">JPG, PNG, GIF</span>
                </p>
              </div>
            </div>
          </div>

          <div className=" grid gap-3">
            <p className="text-[#5A477B] text-sm font-medium">OR</p>
          </div>

          <div className="mt-5 grid gap-3 ">
            <Label htmlFor="Token" className="font-bold text-sm">
              Base URI (IPFS Link)
            </Label>
            <Input
              id="Token"
              type="text"
              placeholder=""
              className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
            />
          </div>

          <div className="mt-5 grid gap-3">
            <p className="text-[#5A477B] text-sm font-medium">OR</p>
          </div>

          <div className="mt-5 flex items-end gap-6">
            <div className="grid gap-3 w-5/6">
              <Label htmlFor="Name" className="font-bold text-sm">
                Generate With Ai
              </Label>
              <Input
                id="Name"
                type="text"
                placeholder="Write Prompt Here. . ."
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
            <div className="grid gap-3 w-1/6">
            <Dialog>
              <DialogTrigger className="p-2 px-6 bg-[#D500E7] text-white font-semibold hover:bg-[#D500E7]/80 transition-all duration-300 rounded-lg">
                <div className="mx-1"></div>
                <p className="">Generate</p>
              </DialogTrigger>

              <DialogContent
                showCloseButton={true}
                className="bg-[#180734] w-[680px] border-0"
                style={{ borderRadius: "20px" }}
              >
                <div className="pt-4 space-y-4">
                  <p className="text-gray-400 text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sint facilis ut nostrum non odit? Quisquam culpa libero similique in aliquid voluptatem nisi, esse molestias sint accusamus quod animi amet.
                  </p>
                  <Image
                    src="/images/card1.png"
                    alt="asds"
                    height={248}
                    width={248}
                    className="w-full h-[300px] object-cover  rounded-xl"
                  />

                  <div className="flex justify-end gap-3 w-full">
                  <Button className="bg-[#5a477b] text-white font-semibold hover:bg-[#d500e7]/80 rounded-l ">
                      Regenerate
                    </Button>
                    <Button className="bg-[#179DFF] text-white font-semibold hover:bg-[#179DFF]/80 rounded-l ">
                      Continue
                    </Button>
                    
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            </div>
          </div>

          <div className="mt-5">
            <div className="grid gap-3 ">
              <Textarea
                id="Story"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
                rows="10"
              />
            </div>
          </div>

          <div className="mt-5">

            <Dialog>
              <DialogTrigger className="p-2 bg-[#179DFF] text-white font-semibold hover:bg-[#179DFF]/80 transition-all duration-300 rounded-xl w-full">
                <div className="mx-1"></div>
                <p className="">Continue to Proceed</p>
              </DialogTrigger>

              <DialogContent
                showCloseButton={true}
                className="border-0 blur-bg"
                style={{ borderRadius: "20px", width:"600px", height:"400px" }}
              >
                <div className="py-10 space-y-4 mx-auto">
                  
                  <Image
                    src="/images/card1.png"
                    alt="asds"
                    height={200}
                    width={200}
                    className="w-[200px] h-[200px] object-cover mx-auto rounded-xl"
                  />

<p className="text-white text-2xl">
                   Your contract has been deployed </p>

                  <div className="flex justify-center my-4 w-full">

                    <Button className="bg-[#179DFF] text-white font-semibold hover:bg-[#179DFF]/80 rounded-l ">
                      Go to Collection
                    </Button>
                    
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default RootStockFrom;
