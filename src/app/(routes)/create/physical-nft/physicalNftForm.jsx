"use client";

import React, { useState } from "react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Dropzone from "@/components/shared/dropzone";
import { Upload } from "lucide-react";
import { Plus, X } from "lucide-react";

const physicalNftForm = () => {
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
                Create New
              </Button>
            </div>
          </div>
          <div className="flex gap-6 mb-6">
            <div className="grid gap-3 w-1/2">
              <Label htmlFor="origin" className="font-bold text-sm">
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
              <Label htmlFor="royelty" className="font-bold text-sm">
                Royelty
              </Label>
              <Input
                id="royelty"
                type="text"
                placeholder="Recommended 5%"
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
              <div className="font-bold text-sm ">KYC Status</div>
              <Button
                className="bg-[#179DFF] text-white hover:bg-[#179DFF]/30 hover:text-white duration-700 text-sm w-1/2"
                variant="default"
              >
                Verified
              </Button>
            </div>
          </div>
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
                <span className="text-white text-xs my-auto pl-2">
                  Add More Traits
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full pt-6">
        
          <div className="mb-6 grid gap-3">
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

          <div className="mb-6 grid gap-3 ">
            <Label htmlFor="IPS" className="font-bold text-sm">
              IPFS (URI Link)
            </Label>
            <Input
              id="IPS"
              type="text"
              placeholder=""
              className="bg-[#16092E] ring-1 ring-[#2F125F] p-2 rounded-xl "
            />
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

export default physicalNftForm;
