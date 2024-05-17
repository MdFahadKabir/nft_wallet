import React from 'react'
import Container from '@/components/shared/container'
import Image from "next/image";
import { Spotlight } from './Spotlight';
import { BannerCarousel } from './bannerCarousel';

const Banner = () => {


  return (
    <div className="banner ">
      <div className="">
        <div
          className="w-full relative"
        >
          <Container>
            <div className="h-[30vh] w-full flex justify-between items-center mt-10">

              <div className="">
                <h3 className="font-bold text-3xl">Auction</h3>
                <div className="flex items-center gap-3 font-semibold">
                  <p>209 Active Item</p>
                  <span>.</span>
                  <p>675 Total Item</p>
                </div>
              </div>

              <div>
                <BannerCarousel />
              </div>
              <Spotlight fill="#ED02ED" className="absolute -bottom-60 right-96 -z-20" />
            </div>
          </Container>

        </div>
      </div>
    </div>
  )

}


export default Banner