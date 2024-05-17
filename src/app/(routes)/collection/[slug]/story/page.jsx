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

import VideoPlayer from "@/components/shared/VideoPlayer";

const StoryPage = () => {
  const meetTeam = [
    {
      id: 1,
      image: "/images/crystal.png",
    },

    {
      id: 2,
      image: "/images/crystal.png",
    },
    {
      id: 3,
      image: "/images/crystal.png",
    },
    {
      id: 4,
      image: "/images/crystal.png",
    },
    {
      id: 5,
      image: "/images/crystal.png",
    },
    {
      id: 6,
      image: "/images/crystal.png",
    },
  ];
  const [tab, setTab] = useState("introduction");
  return (
    <Container>
      <div className="flex justify-between gap-12 mx-auto my-6 px-8">
        <div className="tabs w-1/4">
          <div
            className={cn(
              "w-full mt-2 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer",
              tab === "introduction" && "bg-[#16092E] "
            )}
            onClick={() => setTab("introduction")}
          >
            Introduction
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full mt-2 rounded-lg data-[state=open]:bg-[#2F125F]"
          >
            <AccordionItem
              className="border-0  px-4 rounded-lg "
              value="Currency"
            >
              <AccordionTrigger className="">
                <div className="flex items-center gap-2 text-md ">
                  Characters
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                <div
                  className={cn(
                    "w-full mb-2 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer",
                    tab === "crystal" && "bg-[#16092E]"
                  )}
                  onClick={() => setTab("crystal")}
                >
                  Crystal Mountain #890
                </div>

                <div
                  className={cn(
                    "w-full mb-2 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer",
                    tab === "crystal2" && "bg-[#16092E]"
                  )}
                  onClick={() => setTab("crystal2")}
                >
                  Crystal Mountain #990
                </div>

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="view w-3/4">
          {tab === "introduction" && (
            <div className="">
              <div className="my-4">
                <h1 className="font-semibold text-2xl text-[#D500E7]">
                  Crystal Mountain
                </h1>
                <p className="text-sm font-medium my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div>
                  <VideoPlayer />
                </div>
                <p className="text-sm font-medium my-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="my-16">
                <h1 className="font-semibold text-2xl text-[#D500E7]">
                  Meet the Characters
                </h1>
                <p className="text-xs text-[#5A477B] font-medium">
                  Check all recent activities, post & stories of this collection
                  by a single scroll. Also you can see only filtered items as
                  your demand.
                </p>

                <div className='grid grid-cols-4 gap-10 mt-5 mx-auto"'>
                  {meetTeam.map((item, index) => (
                    <div>
                      <Image
                        src={item.image}
                        height={280}
                        width={280}
                        className="aspect-square object-cover rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "crystal" && (
            <div className="flex gap-5 space-y-4">
              <div className="space-y-4 w-4/6">
                <h1 className="font-semibold text-2xl text-[#D500E7]">
                  Crystal Mountain #990
                </h1>
                <p className="text-sm font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
                <p className="text-sm font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="image w-2/6">
                <div className="relative ">
                  <div className="">
                    <Image
                      src="/images/crystal.png"
                      height={280}
                      width={280}
                      className="w-[280px] h-[280px] object-cover rounded-tl-xl rounded-tr-xl"
                    />
                  </div>
                  <div className="  w-[280px] px-4 py-2 bg-[#281D3A] backdrop-blur-lg rounded-b-xl">
                    <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                      <p className="">Color</p>
                      <p className="">Blue</p>
                    </div>
                    <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                      <p className="">Color</p>
                      <p className="">Blue</p>
                    </div>
                    <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                      <p className="">Color</p>
                      <p className="">Blue</p>
                    </div>
                    <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                      <p className="">Color</p>
                      <p className="">Blue</p>
                    </div>
                    <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                      <p className="">Color</p>
                      <p className="">Blue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


{tab === "crystal2" && (
            <div className="flex gap-5 space-y-4">
              <div className="space-y-4 w-4/6">
                <h1 className="font-semibold text-2xl text-[#D500E7]">
                  Crystal Mountain #990
                </h1>
                <p className="text-sm font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
                <p className="text-sm font-medium">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="image w-2/6">
                <div className="relative ">
                  <div className="">
                    <Image
                      src="/images/crystal.png"
                      height={280}
                      width={280}
                      className="w-[280px] h-[280px] object-cover rounded-tl-xl rounded-tr-xl"
                    />
                  </div>
                  <div className="  w-[280px] px-4 py-2 bg-[#281D3A] backdrop-blur-lg rounded-b-xl">
                    <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                      <p className="">Color</p>
                      <p className="">Blue</p>
                    </div>
                    <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                      <p className="">Color</p>
                      <p className="">Blue</p>
                    </div>
                    <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                      <p className="">Color</p>
                      <p className="">Blue</p>
                    </div>
                    <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                      <p className="">Color</p>
                      <p className="">Blue</p>
                    </div>
                    <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
                      <p className="">Color</p>
                      <p className="">Blue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default StoryPage;
