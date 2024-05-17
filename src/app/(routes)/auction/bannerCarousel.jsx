"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export function BannerCarousel() {

  const cardItems = [
    {
      id: 1,
      name: "Inner Me",
      image: "/images/card0.png",
      highest_bid: 0.5,
      last_bid: 0.3,
      floor_price: 0.1,
      remaining_time: "2d 3h 5m",
    },
    {
      id: 2,
      name: "Cat King",
      image: "/images/card.jpg",
      highest_bid: 0.5,
      last_bid: 0.3,
      floor_price: 0.1,
      remaining_time: "2d 3h 5m",
    },
    {
      id: 3,
      name: "Super Body",
      image: "/images/card1.png",
      highest_bid: 0.5,
      last_bid: 0.3,
      floor_price: 0.1,
      remaining_time: "2d 3h 5m",
    },
    {
      id: 4,
      name: "Samurai X",
      image: "/images/card.jpg",
      highest_bid: 0.5,
      last_bid: 0.3,
      floor_price: 0.1,
      remaining_time: "2d 3h 5m",
    },
    {
      id: 5,
      name: "Swag Cat",
      image: "/images/card4.jpg",
      highest_bid: 0.5,
      last_bid: 0.3,
      floor_price: 0.1,
      remaining_time: "2d 3h 5m",
    },
  ];



  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [emblaApi, setEmblaApi] = React.useState(null);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="flex items-center">
      <div className="additional-info bg-[#281D3A] rounded-2xl rounded-e-none w-[200px] h-[200px] px-4 py-6">
        {cardItems[selectedIndex] && (
          <div className="">
            <div className="space-y-0 py-2">
              <p className="text-sm font-medium">   {cardItems[selectedIndex].name}</p>
              <p className="text-xs font-medium text-purple-500">   {cardItems[selectedIndex].highest_bid}</p>
            </div>
            <div className="flex justify-between ">
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-[#D500E7] font-semibold">
                    {cardItems[selectedIndex].highest_bid} BTC
                  </p>
                  <p className="text-xs text-gray-300 font-medium">
                    Highest Bid
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#D500E7] font-semibold">
                    {cardItems[selectedIndex].highest_bid} BTC
                  </p>
                  <p className="text-xs text-gray-300 font-medium">
                    Last Bid
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-gray-100 font-semibold">
                    {cardItems[selectedIndex].highest_bid} WETH
                  </p>
                  <p className="text-xs text-gray-300 font-medium">
                    Floor Price
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-100 font-semibold">
                    {cardItems[selectedIndex].highest_bid} Hour
                  </p>
                  <p className="text-xs text-gray-300 font-medium">
                    Remaining
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Carousel
        setApi={setEmblaApi}
        plugins={[plugin.current]}
        className="w-full max-w-xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {cardItems.map((item, index) => (
            <CarouselItem
              key={index}
              className={`pl-1 md:basis-1/2 lg:basis-1/3 `}
            >
              <div className="p-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={300}
                  width={300}
                  className={`w-[200px] h-[200px] object-cover rounded-2xl ${index === selectedIndex - 1? 'rounded-l-none' : ''}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
