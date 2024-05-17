"use client"

import React from "react";
import Container from "@/components/shared/container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Line, LineChart, ResponsiveContainer } from "recharts"
import Link from 'next/link'
const Trending = () => {
  const items = [
    {
      id: 1,
      title: "Super Hero 1",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/crystal.png",
    },
    {
      id: 2,
      title: "Super Hero 2",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/crystal.png",
    },
    {
      id: 3,
      title: "Super Hero 3",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/crystal.png",
    },
    {
      id: 4,
      title: "Super Hero 4",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/crystal.png",
    },
    {
      id: 5,
      title: "Super Hero 5",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/crystal.png",
    },
    {
      id: 6,
      title: "Super Hero 6",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/crystal.png",
    },
    {
      id: 7,
      title: "Super Hero 7",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/crystal.png",
    },
    {
      id: 8,
      title: "Super Hero 8",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/crystal.png",
    },

    {
      id: 9,
      title: "Super Hero 9",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/crystal.png",
    },
    {
      id: 10,
      title: "Super Hero 10",
      floor_price: "2.5",
      volume_price: "1.5",
      network: "Ethereum",
      image: "/images/crystal.png",
    },
  ];



  const data = [
    {
      revenue: 10400,
      subscription: 240,
    },
    {
      revenue: 34405,
      subscription: 300,
    },
    {
      revenue: 9400,
      subscription: 200,
    },
    {
      revenue: 58200,
      subscription: 278,
    },
    {
      revenue: 17000,
      subscription: 189,
    },
    {
      revenue: 15600,
      subscription: 239,
    },
    {
      revenue: 11244,
      subscription: 278,
    },
    {
      revenue: 26475,
      subscription: 189,
    },
  ]


  return (
    <Container>
      <div className="flex justify-between mt-16 border-b-2 border-[#2F125F]/40 pb-4">
        <h2 className="text-2xl font-medium">Trending</h2>
        <div className="flex gap-4">
          <Select className="border-none ">
            <SelectTrigger className="w-[140px] bg-[#281546] border-[#281546] focus:ring-slate-900">
              <SelectValue placeholder="Last 24 Hours" />
            </SelectTrigger>
            <SelectContent className="bg-[#281546]">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px] bg-[#281546] border-[#281546] focus:ring-slate-900">
              <SelectValue placeholder="All Networks" />
            </SelectTrigger>
            <SelectContent className="bg-[#281546]">
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-[#281546] hover:bg-[#281546]/80 text-white">
            See All
          </Button>
        </div>
      </div>

      {/* trending items */}
      <div className="grid grid-cols-2 gap-x-40 gap-y-10  mt-6">
        {items.map((item, index) => (
          <Link href={"/collection/001"} className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-7">
              <div>{index + 1}</div>
              <div className="flex justify-center items-center gap-5">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={60}
                  width={60}
                  className="w-[60] h-[60] object-cover  rounded-full"
                />
                <div>
                  <p>Crystal Mountain</p>
                  <p className="text-gray-500 font-medium text-sm pt-2">
                    Floor Price: <span className="text-white">0.22 BTC</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="h-[30px] w-[100px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={data}
                    margin={{
                      top: 5,
                      right: 10,
                      left: 10,
                      bottom: 0,
                    }}
                  >
                    <Line
                      type="monotone"
                      color="red"
                      strokeWidth={2}
                      dataKey="revenue"
                      dot={false}
                      stroke="#ff0ff0"
                      // activeDot={{
                      //   r: 6,
                      //   style: { fill: "#D500E7", opacity: 0.25 },
                      // }}
                      // style={
                      //   {
                      //     stroke: "#D500E7)",
                      //     "#D500E7": "#D500E7",
                      //   }
                      // }
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-gray-500 font-medium text-xs pt-2">
                Volume: <span className="text-white">205 BTC</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Trending;
