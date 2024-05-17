"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
const FameFrom = () => {
  return (
    <div>
      <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl">
        <CardContent>
          <div className="flex flex-row pt-5">
            <div className="my-auto">
              <Image
                src="/images/icon/fame.png"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
            </div>

            <p className="text-xl pl-3">Fame Token Details</p>
          </div>
          <p className="text-sm text-[#9A9A9A] pt-3">
            Launch your NFT collection for others to mint.
          </p>
          <p className="text-sm text-[#9A9A9A] pt-1">
            Launch your NFT collection for.
          </p>
          <div className="mt-5">
            <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
              <p className="">Token Contact</p>
              <Link href="/" className="">XS0D....099999999.99</Link>
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
            <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
              <p className="">Token Symbol</p>
              <p className="">ASD</p>
            </div>
            <div className="flex justify-between border-b border-[#5A477B] border-dashed py-2 text-sm">
              <p className="">Unlock Period</p>
              <p className="">5 Years</p>
            </div>
            <div className="flex justify-between  py-2 text-sm">
              <p className="">Chain</p>
              <div className="flex  justify-between">
                <Image
                  src="/images/icon/rootstock.png"
                  width={50}
                  height={50}
                  className="w-8 h-8 px-2 object-contain"
                />

                <Image
                  src="/images/icon/ordinals.png"
                  width={50}
                  height={50}
                  className="w-8 h-8 px-2 object-contain"
                />
                <Image
                  src="/images/icon/stacks.png"
                  width={50}
                  height={50}
                  className="w-8 h-8 px-2 object-contain"
                />
                <Image
                  src="/images/icon/thor.png"
                  width={50}
                  height={50}
                  className="w-8 h-8 px-2 object-contain"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FameFrom;
