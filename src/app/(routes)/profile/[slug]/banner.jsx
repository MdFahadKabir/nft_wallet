import React from 'react'
import Container from '@/components/shared/container'
import Image from "next/image";
import { BadgeCheck, LayoutGrid, List } from "lucide-react";
import { Bitcoin } from "lucide-react";

const Banner = () => {
  return (
    <div className="banner ">
      <div className="">
        <div
          className={`w-full h-[40vh] max-h-[20rem] relative  overflow-hidden block z-10 bg-[url('/images/banner2.png')]  bg-cover bg-no-repeat bg-center  before:content-['']   before:absolute    before:inset-0  before:block before:bg-gradient-to-t before:from-[#0C021D]   before:to-transparent   before:opacity-100  before:z-[-5]`}
        >
          <Container>
            <div className="h-full w-full flex flex-col ">
              <div className="absolute  bottom-0">
                <div className="flex items-center gap-5 pb-10">
                  <Image
                    src="/images/crystal.png"
                    height={100}
                    width={100}
                    className="w-[60] h-[60] object-cover  rounded-2xl "
                  />
                  <div className="flex flex-col gap-2 items-start ">
                    <div className="flex items-center gap-4">
                      <h3 className="font-semibold text-xl ">Zubraj_454</h3>{" "}
                      <BadgeCheck size={16} className="text-purple-600" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Bitcoin size={14} className="text-purple-300" />
                      <p className="font-bold text-xs text-purple-300">
                        0x1900d92104....547A4Ac8
                      </p>
                    </div>
                  </div>
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