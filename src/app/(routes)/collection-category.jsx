import React from "react";
import Container from "@/components/shared/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CollectionCategory = () => {
  const data = [
    {
      id: 1,
      title: "Super Hero 1",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/card1.png",
    },
    {
      id: 2,
      title: "Super Hero 2",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/card1.png",
    },
    {
      id: 3,
      title: "Super Hero 3",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/card1.png",
    },
    {
      id: 4,
      title: "Super Hero 4",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/card1.png",
    },
    {
      id: 5,
      title: "Super Hero 5",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/card1.png",
    },
  ];
  return (
    <Container>
      <div className="flex justify-between mt-16 pb-4">
        <h2 className="text-2xl font-medium">Collection By Category</h2>
        <div className="flex gap-4">
          <Tabs defaultValue="all" className="w-[500px]">
            <TabsList className="grid w-full grid-cols-4 bg-[#1D1230]">
              <TabsTrigger
                className="data-[state=active]:bg-[#2F125F]"
                value="all"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#2F125F]"
                value="art"
              >
                Art
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#2F125F]"
                value="photography"
              >
                Photography
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#2F125F]"
                value="animation"
              >
                Animation
              </TabsTrigger>
            </TabsList>

            <TabsContent value="account"></TabsContent>
          </Tabs>

          <Button className="bg-[#281546] hover:bg-[#281546]/80 text-white">
            See All
          </Button>
        </div>
      </div>

      {/* trending items */}

      <div className="grid grid-cols-5 gap-6">
        {data.map((item, index) => (
          <div key={index} className="relative ">
            <div className="">
              <Image
                src={item.image}
                alt={item.title}
                height={220}
                width={243}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute bottom-0 w-full  p-2 bg-[#2F125F]/60 backdrop-blur-lg  rounded-b-xl">
              <h3 className="text-base font-medium">{item.title}</h3>
              <div className="flex justify-between me-2">
                <div>
                  <p className="text-xs text-muted-foreground">Floor Price</p>
                  <p className="text-sm">{item.floor_price} ETH</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Volume Price</p>
                  <p className="text-sm">{item.volume_price} ETH</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CollectionCategory;
