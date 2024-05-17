import React from "react";
import Container from "@/components/shared/container";
import Image from "next/image";
import { BadgeCheck, LayoutGrid, List } from "lucide-react";
import { Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="banner ">
      <div className="">
        <div
          className={`w-full h-[40vh] max-h-[20rem] relative  overflow-hidden block z-10 bg-[url('/images/banner2.png')]  bg-cover bg-no-repeat bg-center  before:content-['']   before:absolute    before:inset-0  before:block before:bg-gradient-to-t before:from-[#0C021D]   before:to-transparent   before:opacity-100  before:z-[-5]`}
        >
          <div className="absolute bottom-0 w-full  mx-auto">
            <Container>
              <div className="h-full w-full flex flex-col ">
                <div className="flex justify-between items-center  pb-10">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/images/crystal.png"
                      height={73}
                      width={73}
                      className="w-[73] h-[73] object-cover  rounded-full "
                    />
                    <div className="flex flex-col gap-2 items-start ">
                      <div className="flex items-center gap-4">
                        <h3 className="font-medium text-xl ">
                          Crystal Mountain
                        </h3>{" "}
                        <BadgeCheck size={16} className="text-purple-600" />
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-4">
                          <p className="text-base">Zubraj_454</p>
                          <p className="text-base text-purple-200">
                            0 Subscribers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className=" flex gap-10">
                      <div>
                        <p className="font-medium text-xl">205 BTC</p>
                        <p className="font-medium text-slate-400 text-sm">
                          Total Volume
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-xl">205 BTC</p>
                        <p className="font-medium text-slate-400 text-sm">
                          Floor Price
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-xl">1.654 WETH</p>
                        <p className="font-medium text-slate-400 text-sm">
                          Best Offer
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-xl">27/68</p>
                        <p className="font-medium text-slate-400 text-sm">
                          Listed
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-xl">5343 (21%)</p>
                        <p className="font-medium text-slate-400 text-sm">
                          Owners (Unique)
                        </p>
                      </div>
                      {/* <Button className="bg-[#D500E7] hover:bg-[#D500E7]/80 text-white font-semibold absolute -bottom-10 right-0 rounded-full px-2 py-0">
                        Subscribe
                      </Button> */}
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
