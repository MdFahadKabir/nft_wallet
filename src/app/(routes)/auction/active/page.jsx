"use client";

import Image from "next/image";
import Container from "@/components/shared/container";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


import { useCollapseStore, useLayoutStore } from "@/lib/ZStore/control";
import SideBar from "../sideBar"; 
import { cn } from "@/lib/utils";

const ActivePage = () => {
  
  const items = [
    {
      id: 1,
      name: "Bones by Jarritos ",
      collection: "Crystal_Mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },

    {
      id: 2,
      name: "Bones by Jarritos ",
      collection: "Crystal_Mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 3,
      name: "Bones by Jarritos ",
      collection: "Crystal_Mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 4,
      name: "Bones by Jarritos ",
      collection: "Crystal_Mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 5,
      name: "Bones by Jarritos ",
      collection: "Crystal_Mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
    {
      id: 6,
      name: "Bones by Jarritos ",
      collection: "Crystal_Mountain",
      image: "/images/card1.png",
      price: "0.5",
      best_offer: "0.3",
      last_price: "0.4",
      cost: "0.5",
      difference: "0.1",
    },
  ];

  const { layout } = useLayoutStore();
  const { collapse } = useCollapseStore();
  console.log(collapse)

  return (
    <Container>
      <div className="flex mt-5 gap-6">

     {
          collapse && (
            <div className="left sidebar w-1/5 transition-all duration-300">
            <SideBar />
          </div>
          )
     }
        
        <div className={cn("right transition-all duration-500 ", collapse ? "w-4/5" : "w-full")}>
          {/* items */}
          {layout === "grid" && (
            <div className="gridview ">
              {/* <div className="grid grid-cols-5 gap-6 mt-5 mx-auto"> */}
              <div className={cn("grid mt-5 gap-6 mx-auto", collapse ? "grid-cols-5" : "grid-cols-6")}>
                {items.map((item, index) => (
                 <div key={index} className="relative ">
                 <div className="">
                   <Image
                     src={item.image}
                     alt={item.name}
                     height={280}
                     width={280}
                     className="w-[280px] h-[350px] object-cover rounded-xl "
                   />
                 </div>
                 <div className="absolute -bottom-2 w-full px-4 py-2 bg-[#281D3A] backdrop-blur-lg rounded-b-xl space-y-2 pb-4">
                 <div className="space-y-0 py-2">
                   <p className="text-sm font-medium">{item.name}</p>
                   <p className="text-xs font-medium text-purple-500">{item.collection}</p>
                   </div>
                   <div className="flex justify-between ">
                     <div className="space-y-2">
                       <div>
                         <p className="text-xs text-[#D500E7] font-semibold">
                           {item.cost} BTC
                         </p>
                         <p className="text-xs text-gray-300 font-medium">
                           Highest Bid
                         </p>
                       </div>
                       <div>
                         <p className="text-xs text-[#D500E7] font-semibold">
                           {item.cost} BTC
                         </p>
                         <p className="text-xs text-gray-300 font-medium">
                           Last Bid
                         </p>
                       </div>
                     </div>
                     <div className="space-y-2">
                       <div>
                         <p className="text-xs text-gray-100 font-semibold">
                           {item.cost} WETH
                         </p>
                         <p className="text-xs text-gray-300 font-medium">
                           Floor Price
                         </p>
                       </div>
                       <div>
                         <p className="text-xs text-gray-100 font-semibold">
                           {item.cost} Hour
                         </p>
                         <p className="text-xs text-gray-300 font-medium">
                           Remaining
                         </p>
                       </div>
                     </div>
                   </div>

                 </div>
               </div>
                ))}
              </div>
            </div>
          )}

          {layout === "list" && (
            <div className="listview ">
              <Table className="">
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">331 Items</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Best Offer</TableHead>
                    <TableHead>Last Price</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead className="text-right">Difference</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Image
                            src={item.image}
                            alt={item.name}
                            height={73}
                            width={73}
                            className="w-[44px] h-[44px] object-cover  rounded-md"
                          />
                          <div>
                            <p>{item.name}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell>{item.best_offer}</TableCell>
                      <TableCell>{item.last_price}</TableCell>
                      <TableCell>{item.cost}</TableCell>
                      <TableCell className="text-right">
                        {item.difference}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>

    </Container>
  );
};

export default ActivePage;
