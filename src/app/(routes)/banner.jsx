import React from "react";
import Image from "next/image";
import { Boxes, Bitcoin } from "lucide-react";
import Container from "@/components/shared/container";


const Banner = () => {

  const cardItems = [
    {
      id: 1,
      name: "Inner Me",
      image: "/images/card0.png",
    },
    {
      id: 2,
      name: "Cat King",
      image: "/images/card.jpg",
    },
    {
      id: 3,
      name: "Super Body",
      image: "/images/card1.png",
    },
    {
      id: 4,
      name: "Samurai X",
      image: "/images/card3.png",
    },
    {
      id: 5,
      name: "Swag Cat",
      image: "/images/card4.jpg",
    },
  ];
  return (
    <div>
      <div className="banner">
        <div className="">
          <div
            className=" relative aspect-video md:aspect-[2.4/1] overflow-hidden bg-cover "
            style={{ backgroundImage: `url(/images/banner1.png)` }}
          >
            <div className="h-full w-full flex flex-col justify-end items-center text-center ">
              <div className="bg-gradient-to-t from-[#0C021D] to-transparent w-full">
                <div className="flex flex-col gap-2 items-start mb-6 mx-auto max-w-[1536px]:px-12 max-[1750px]:px-10  min-[1800px]:max-w-7xl">
                  <h3 className="font-medium text-2xl">Recent Sell</h3>
                  <div className="flex items-center gap-12">
                    <p className="font-normal text-sm text-gray-400">
                      Last Hour
                    </p>
                    <p className="font-bold text-base text-white">1.25 ETH</p>
                  </div>
                </div>
                <div className="flex justify-between gap-10 items-center mb-10  max-w-[1536px]:px-12 max-[1750px]:px-10  min-[1800px]:max-w-7xl  mx-auto">
                  {cardItems.map((item) => (
                    <div
                      key={item.id}
                      className="w-[271px] h-[187px] rounded-lg overflow-hidden relative "
                    >
                      <Image
                        src={item.image}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl "
                      />
                      <div className="text-white  absolute  bg-gradient-to-t from-[#0C021D]  to-transparent w-full bottom-0 top-20 rounded-lg">
                        <p className="absolute bottom-4 left-4  font-medium">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
