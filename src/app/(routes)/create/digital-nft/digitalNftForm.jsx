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
import Dropzone from "@/components/shared/dropzone";
import { Upload } from "lucide-react";
import { Plus, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const digitalNftForm = () => {
  const [traits, setTraits] = useState([{ id: 1, type: "", value: "" }]);
  const [nextId, setNextId] = useState(2);

  const handleAddTrait = () => {
    setTraits([...traits, { id: nextId, type: "", value: "" }]);
    setNextId(nextId + 1);
  };

  const handleTraitTypeChange = (id, newValue) => {
    setTraits((prevTraits) =>
      prevTraits.map((trait) =>
        trait.id === id ? { ...trait, type: newValue } : trait
      )
    );
  };

  const handleTraitValueChange = (id, newValue) => {
    setTraits((prevTraits) =>
      prevTraits.map((trait) =>
        trait.id === id ? { ...trait, value: newValue } : trait
      )
    );
  };

  const handleDeleteTrait = (id) => {
    setTraits((prevTraits) => prevTraits.filter((trait) => trait.id !== id));
  };

  return (
    <Card className="bg-transparent rounded-2xl">
      <CardContent className="flex justify-between gap-10 px-10 py-4">

        <div className="w-full pt-6">
          <div className="flex gap-6 mb-6">

            <div className="grid gap-3 w-5/6">
              <Label htmlFor="collection" className="font-bold text-sm ">
                  Contact Token
              </Label>
              <Input
                id="collection"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
            <div className="grid gap-3 mt-8 w-2/6">
              <Button
                className="bg-[#5A477B] text-white hover:bg-[#5A477B]/30 hover:text-white duration-700 text-sm"
                variant="default"
              >
                Create new
              </Button>
            </div>
          </div>

          <div className=" gap-6 mb-6">
            <div className="grid gap-3 w-full">
              <Label htmlFor="erc" className="font-bold text-sm ">
                ERC Standard
              </Label>
              <Input
                id="erc"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>
        
          <div className="flex gap-6 mb-6">
            <div className="grid gap-3 w-1/2">
              <Label htmlFor="maxsupply" className="font-bold text-sm ">
                Max Supply
              </Label>
              <Input
                id="maxsupply"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>

            <div className="grid gap-3 w-1/2">
              <Label htmlFor="maxmintamount" className="font-bold text-sm">
                Max Mint Amount
              </Label>
              <Input
                id="maxmintamount"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
            </div>

            <div className="flex gap-6 mb-6">

            <div className="grid gap-3 w-1/2">
              <Label htmlFor="minamount" className="font-bold text-sm ">
                Token ID
              </Label>
              <Input
                id="tokenId"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>

        
            <div className="grid gap-3 w-1/2">
              <Label htmlFor="minamount" className="font-bold text-sm ">
                Mint Amount
              </Label>
              <Input
                id="minamount"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>
          <div className="flex gap-6 mb-6">

          <div className="grid gap-3 w-1/2">
              <Label htmlFor="setroyalty" className="font-bold text-sm">
               Price
              </Label>
              <Input
                id="price"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          
            
            <div className="grid gap-3 w-1/2">
              <Label htmlFor="setroyalty" className="font-bold text-sm">
                Set Royalty
              </Label>
              <Input
                id="setroyalty"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>

          <div className="mb-6">
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
                Tell Story
              </Label>
              <Textarea
                id="Story"
                type="text"
                placeholder=""
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
          </div>
          <div className="mb-6 grid gap-3 ">
            <Label htmlFor="Token" className="font-bold text-sm">
              URI
            </Label>
            <Input
              id="Token"
              type="text"
              placeholder=""
              className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
            />
          </div>
        </div>
        <div className="w-full pt-6">
         
          <div className="flex flex-col mb-6">
            <div className="grid gap-3 ">
              <div className="font-bold text-sm ">Attributes</div>
              <p className="text-[#A690CA] text-[10px]">
                Traits describe attributes of your item. They appear as filters
                inside your collection page and are also listed out inside your
                item page.
              </p>
            </div>
          </div>

          <div>
            <div className="flex gap-6 mb-6">
              <div className="grid gap-3 w-1/2">
                <Label htmlFor="TraitsType" className="font-bold text-sm ">
                  Traits Type
                </Label>
                {traits.map((trait) => (
                  <div key={trait.id} className="flex items-center">
                    <Input
                      id={`TraitsType-${trait.id}`}
                      type="text"
                      placeholder=""
                      className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl"
                      value={trait.type}
                      onChange={(e) =>
                        handleTraitTypeChange(trait.id, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
              <div className="grid gap-3 w-1/2">
                <Label htmlFor="Value" className="font-bold text-sm">
                  Value
                </Label>
                {traits.map((trait) => (
                  <div key={trait.id} className="flex items-center">
                    <Input
                      id={`Value-${trait.id}`}
                      type="text"
                      placeholder=""
                      className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl"
                      value={trait.value}
                      onChange={(e) =>
                        handleTraitValueChange(trait.id, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="ml-2 text-gray-500 hover:text-gray-900"
                      onClick={() => handleDeleteTrait(trait.id)}
                    >
                      <X />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="flex" onClick={handleAddTrait}>
                <Plus className="text-white text-xs" />{" "}
                <span className="text-white text-xs my-auto pl-2 cursor-pointer">
                  Add More Traits
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-6">
          <div className="grid gap-3 w-1/2 mb-6">
            <Label htmlFor="mint" className="font-bold text-sm">
              Mint Type
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
              Image
            </Label>
            <div className="flex justify-start items-center gap-5">
              <div className="w-full h-full relative">
                <Dropzone
                  dropMessage={<Upload />}
                  handleOnDrop={{}}
                  classNameWrapper="w-full h-52 justify-center items-center"
                />
                <div className="absolute inset-0  flex justify-center items-center">
                  <div className="space-y-2">
                    <p className="text-sm font-medium mt-10">
                      Drag or Click to Upload
                    </p>
                    <p className="font-medium text-[#5A477B] text-sm">
                      Max Size: <span className="text-[#A690CA]">50 MB</span>
                    </p>
                    <p className="font-medium text-[#5A477B] text-sm">
                      Type:{" "}
                      <span className="text-[#A690CA]">PNG, JPG, SVG</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid gap-3">
            <p className="text-[#5A477B] text-sm font-medium">OR</p>
          </div>

          <div className="mt-5 grid gap-3 ">
            <Label htmlFor="IPS" className="font-bold text-sm">
              IPFS Link for Logo
            </Label>
            <Input
              id="IPS"
              type="text"
              placeholder=""
              className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
            />
          </div>
          <div className="mt-5 grid gap-3">
            <p className="text-[#5A477B] text-sm font-medium">OR</p>
          </div>

          <div className="mt-5 flex flex-col  gap-6">
            <div className="grid gap-3 w-full">
              <Label htmlFor="ai" className="font-bold text-sm">
                Create with Ai
              </Label>
              <Input
                id="ai"
                type="text"
                placeholder="Write prompt here. . ."
                className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
              />
            </div>
            <div className="grid gap-3 w-1/6">

              <Dialog>
              <DialogTrigger className="p-2 px-6 bg-[#D500E7] text-white font-semibold hover:bg-[#D500E7]/80 rounded-lg transition-all duration-300">
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

export default digitalNftForm;
