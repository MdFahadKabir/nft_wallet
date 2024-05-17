import React from 'react'
import Link from "next/link";
import Image from "next/image";
const SimilarNFT = ({data}) => {
  return (
      <div className="grid grid-cols-4 gap-6">
        {data.slice(0,4).map((item, index) => (
          <Link key={index} 
          href={`/nft/${item.title}`}
          className="relative ">
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
          </Link>
        ))}
      </div>
  )
}

export default SimilarNFT