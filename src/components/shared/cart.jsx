import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from 'lucide-react';
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";


export function Cart() {
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
        {
            id: 6,
            title: "Super Hero 6",
            floor_price: "2.5",
            volume_price: "1.5",
            network: "Ethereum",
            image: "/images/card1.png",
        },

        {
            id: 7,
            title: "Super Hero 7",
            floor_price: "2.5",
            volume_price: "1.5",
            network: "Ethereum",
            image: "/images/card1.png",
        },

        {
            id: 8,
            title: "Super Hero 8",
            floor_price: "2.5",
            volume_price: "1.5",
            network: "Ethereum",
            image: "/images/card1.png",
        },
    ];
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button variant="outline" size="icon"><ShoppingCart /></Button>
            </SheetTrigger>
            <SheetContent className="bg-[#181222]/80 flex flex-col justify-between">
              <div>
              <SheetHeader>
                    <SheetTitle className="flex items-center gap-4 border-b pb-4">
                        <p>Your Cart</p>
                        <Badge variant="secondary" className="bg-[#2F125F]">2 Item</Badge>
                    </SheetTitle>
                    {/* <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription> */}
                </SheetHeader>
                <ScrollArea className="h-[80vh] ">
                    <div className="grid gap-4 py-2 me-4">
                        {data.map((item, index) => (
                            <Link key={index}
                                href={`/nft/${item.title}`}
                                className="hover:bg-purple-950/80 px-2 py-3 rounded-lg transition-all duration-300">
                                <div className="flex justify-between items-center">
                                    <div className="flex justify-start items-center gap-4 me-2">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            height={50}
                                            width={50}
                                            className="w-[60px] h-[60px] object-cover rounded-xl"
                                        />
                                        <div>
                                            <p className="text-xs ">{item.title}</p>
                                            <p className="text-sm">{item.floor_price} ETH</p>
                                            <p className="text-sm">Owned by ETH</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm">{item.volume_price} ETH</p>
                                    </div>

                                </div>

                            </Link>
                        ))}
                    </div>
                </ScrollArea>
              </div>
                <div className="border-t pt-4 flex justify-between items-center">
                    <div className="text-start">
                        <p className="font-semibold">Total Price</p>
                        <div className="flex items-center gap-2">
                            <p className="text-lg">2.50 ETH</p> <span className="text-xs text-gray-300 font-medium mt-1.5">$40.34</span>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="bg-[#D500E7] hover:bg-[#D500E7]/80 text-white rounded-2xl"
                    >Confirm Purchase</Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}
