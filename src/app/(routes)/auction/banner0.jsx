import React from 'react'
import Container from '@/components/shared/container'
import Image from "next/image";

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
    <div className="banner ">
      <div className="">
        <div
          className={`w-full h-[60vh] max-h-[25rem] relative  overflow-hidden block z-10 bg-[url('/images/banner2.png')]  bg-cover bg-no-repeat bg-center  before:content-['']   before:absolute    before:inset-0  before:block before:bg-gradient-to-t before:from-[#0C021D]   before:to-transparent   before:opacity-100  before:z-[-5]`}
        >
          <Container>
            <div className="h-full w-full flex flex-col mt-20">
              <div className="">
                <div className="flex flex-col gap-2 items-start mb-6 mx-auto max-w-[1536px]:px-12  min-[1800px]:max-w-7xl">
                  <h3 className="font-medium text-2xl">Auction</h3>
                  <div className="flex items-center gap-3">
                      <p>209 Active Item</p>
                      <span>.</span>
                      <p>675 Total Item</p>
                    </div>
                </div>
                <div className="flex justify-between gap-6 items-center mb-10  max-w-[1536px]:px-12  min-[1800px]:max-w-7xl  mx-auto">
                  {cardItems.map((item) => (
                    <div
                      key={item.id}
                      className="w-2/6 h-[200px] rounded-lg overflow-hidden relative "
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
          </Container>

        </div>
      </div>
    </div>
  )

}


export default Banner