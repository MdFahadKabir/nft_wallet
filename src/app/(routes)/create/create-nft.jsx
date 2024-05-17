"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/shared/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import rootstock from "../../../../public/images/icon/rootstock.png";
import ordinals from "../../../../public/images/icon/ordinals.png";
import stacks from "../../../../public/images/icon/stacks.png";
import thor from "../../../../public/images/icon/thor.png";
import image from "../../../../public/images/icon/image.png";
import collection from "../../../../public/images/icon/collection.png";
import { Apple } from "lucide-react";

import Link from "next/link";

const DotButton = ({ onClick, isSelected }) => (
  <button
    onClick={onClick}
    className={`w-2.5 h-2.5 bg-gray-400 rounded-full inline-block mx-0.5 ${isSelected ? "" : "bg-gray-800"
      }`}
  />
);

const CreateNFT = () => {
  const items = [
    {
      title: "Create Your NFT World",
      image: "/images/card.jpg",
    },
    {
      title: "Create Your NFT World",
      image: "/images/card4.jpg",
    },
    {
      title: "Create Your NFT World",
      image: "/images/card5.jpg",
    },
  ];

  const plugin = useRef(Autoplay({ delay: 1500, stopOnInteraction: false }));

  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const onDotButtonClick = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <Container>
      <div className="p-16 mt-20">
        <div className="flex justify-center gap-20">
          <div className="w-1/2">
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              className="w-full max-w-[600px] "
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className>
                {items.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="rounded-3xl">
                      <Card className="rounded-3xl">
                        <CardContent className="flex aspect-square items-center justify-center m-0 p-0 ">
                          <Image
                            src={item.image}
                            alt={item.title}
                            height={243}
                            width={243}
                            className="w-full h-full object-cover  rounded-3xl"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="py-2 text-center text-sm text-muted-foreground space-x-5">
                {items.map((_, index) => (
                  <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    isSelected={index === current - 1}
                  />
                ))}
              </div>
            </Carousel>
          </div>
          <div className="w-1/2">
            <h2 className="text-5xl font-medium">Create Your NFT World</h2>
            <Tabs defaultValue="RootStock" className="w-full ">
              <TabsList className="bg-[#0C021D] mt-12 mb-5">
                <TabsTrigger
                  className="data-[state=active]:bg-[#2F125F] me-4 px-4 rounded-lg"
                  value="RootStock"
                >
                  <Image
                    src={rootstock}
                    height={15}
                    width={15}
                    className="w-auto h-auto"
                  />
                  <span className="ms-3 text-base font-medium">RootStock</span>
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-[#2F125F] me-4 px-4 rounded-lg"
                  value="Ordinals"
                >
                  <Image
                    src={ordinals}
                    height={18}
                    width={18}
                    className="w-[22px] h-[22px]"
                  />
                  <span className="ms-3 text-base font-medium">Ordinals</span>
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-[#2F125F] me-4 px-4 rounded-lg"
                  value="Stack"
                >
                  <Image
                    src={stacks}
                    height={18}
                    width={18}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="ms-3 text-base font-medium">Stack</span>
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-[#2F125F] me-4 px-4 rounded-lg"
                  value="ThorChain"
                >
                  <Image
                    src={thor}
                    height={18}
                    width={18}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="ms-3 text-base font-medium">Thor Chain</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent className="" value="RootStock">
                <div className="flex flex-col mb-5">
                  <Link
                    href="/create/root-stock"
                    className="flex gap-6 bg-[#1D0F35] hover:bg-[#180734] duration-300 p-11 rounded-2xl"
                  >
                    <Image
                      src={collection}
                      height={60}
                      width={60}
                      className="w-auto h-auto"
                    />
                    {/* <Apple size={80} /> */}
                    <div className="my-auto">
                      <p className="text-xl font-medium">Drop a collection</p>
                      <p className="text-sm font-medium text-gray-500">
                        Launch your NFT collection for others to mint.
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="flex gap-6">


                  <Link
                    href="/create/digital-nft"
                    className="flex flex-col items-center text-center gap-2 bg-[#1D0F35] hover:bg-[#180734] duration-300 p-6 py-8 basis-1/2 rounded-2xl"
                  >
                    <Image
                      src={image}
                      height={30}
                      width={30}
                      className="w-auto h-auto pt-1"
                    />
                    <div>
                      <p className="text-lg font-medium">
                        Mint a Digital NFT
                      </p>
                      <p className="text-xs font-medium text-gray-500 pt-1">
                        Launch your NFT collection for others to mint.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/create/physical-nft"
                    className="flex flex-col items-center text-center gap-2 bg-[#1D0F35] hover:bg-[#180734] duration-300 p-6 py-8 basis-1/2 rounded-2xl"
                  >
                    <Image
                      src={image}
                      height={30}
                      width={30}
                      className="w-auto h-auto pt-1"
                    />
                    <div>
                      <p className="text-lg font-medium">
                        Mint a Physical NFT{" "}
                      </p>
                      <p className="text-xs font-medium text-gray-500 pt-1">
                        Launch your NFT collection for others to mint.
                      </p>
                    </div>
                  </Link>
                </div>

              </TabsContent>
              <TabsContent value="Ordinals">
                Ordinals
              </TabsContent>
              <TabsContent value="Stack">
                Stack
              </TabsContent>
              <TabsContent value="ThorChain">
                Thor Chain
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateNFT;
