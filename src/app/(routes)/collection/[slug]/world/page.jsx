import React from "react";
import Container from "@/components/shared/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const WorldPage = () => {
  return (
    <Container>
      <div className="flex justify-between max-w-7xl gap-12 mx-auto my-6 ">
        <div className="w-2/3 ">
          <div className="mb-4 w-1/2">
            <div className="flex gap-3">
              <h1 className="font-semibold text-2xl text-[#D500E7]  my-auto">
                Collection Feed For You Star{" "}
              </h1>
              <Image
                src="/images/icon/star.png"
                height={10}
                width={40}
                className="w-10 h-auto"
              />
              {/* <BadgeCheck /> */}
            </div>
            <p className="text-xs text-[#5A477B] font-medium pt-2">
              Check all recent activities, post & stories of this collection by
              a single scroll. Also you can see only filtered items as your
              demand.
            </p>
          </div>
          <div>
            <div className="bg-[#16092E]/70 p-6 rounded-xl">
              <div className="flex items-center gap-5 mb-4">
                <Image
                  src="/images/crystal.png"
                  height={73}
                  width={73}
                  className="w-[73] h-[73] object-cover  rounded-full "
                />
                <div className="flex flex-col gap-2 items-start ">
                  <div className="flex items-center gap-4">
                    <h3 className="font-medium text-lg ">Crystal Mountain</h3>{" "}
                    <BadgeCheck size={16} className="text-purple-600" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#5A477B]">4 Days ago</span>
                    <Badge className="border-2 border-[#179DFF] bg-[#179DFF]/40 hover:bg-[#179DFF]/60  text-white">
                      Feed
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
              <div>
                <Image
                  src="/images/banner2.png"
                  height={1000}
                  width={1000}
                  className=" object-cover rounded-xl "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="w-2/3 space-y-2">
            <h1 className="font-semibold text-xl">Recently Added </h1>
            <p className="text-xs text-[#5A477B] font-medium">
              Check all recent activities, post & stories of this collection by
              a single scroll. Also you can see only filtered items as your
              demand.
            </p>
            <p className="text-xs text-[#D500E7] font-semibold">Click Here</p>
          </div>
          <div className='grid grid-cols-1 gap-6 mt-5 mx-auto"'>
            <div className="relative">
              <div className="">
                <Image
                  src="/images/crystal.png"
                  height={280}
                  width={280}
                  className="w-[280px] h-[280px] object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-2 w-[280px] px-4 py-2 bg-[#281D3A] backdrop-blur-lg rounded-b-xl space-y-2">
                <p className="text-sm font-medium">Mr. Twist #5353</p>
                <p className="text-xs text-[#D500E7]  font-semibold">123 BTC</p>
                <p className="text-xs text-gray-400">Last Sale: 123 WETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WorldPage;
