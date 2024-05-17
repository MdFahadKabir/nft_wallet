"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
// import CartSheet from './cart/cart-sheet'

import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

import fameguild from "../../../public/images/icon/fameguild.png";
import metaMask from "../../../public/images/icon/metaMask.png";
import uniSat from "../../../public/images/icon/unisat.png";
import xverse from "../../../public/images/icon/xverse.png";
import { Cart } from "./cart";

const NavbarActions = () => {
  //local storage safety
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Cart />
      <Button className="bg-[#D500E7] text-white font-semibold hover:bg-[#D500E7]/80">
        <Link href="/profile/asd">Login Wallet</Link>
      </Button>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="bg-[#180734] w-[380px] border-0"
          style={{ borderRadius: "20px" }}
        >
          <div className="flex flex-col justify-center items-center gap-5 my-10 ">
            <Image
              src={fameguild}
              alt="Super Hero 3"
              height={64}
              width={64}
              className="w-[64px] h-[64px] aspect-square object-cover rounded-xl"
            />
            <h3 className="text-2xl font-medium text-[#A690CA]">
              Connect to Fame Guild
            </h3>

            <div className="flex justify-start items-center gap-6 px-7 py-3 border-2 border-solid border-[#372a4c]  hover:bg-[#5A477B]/40 hover:cursor-pointer hover:border-muted-foreground/50 rounded-xl transition-all duration-300 w-11/12">
              <Image
                src={metaMask}
                alt="Super Hero 3"
                height={64}
                width={64}
                className="w-[40px] h-[40px] aspect-square object-cover rounded-xl"
              />
              <p>Metamask Wallet</p>
            </div>
            <div className="flex justify-start items-center gap-6 px-7 py-3 border-2 border-solid border-[#372a4c]  hover:bg-[#5A477B]/40 hover:cursor-pointer hover:border-muted-foreground/50 rounded-xl transition-all duration-300 w-11/12">
              <Image
                src={uniSat}
                alt="Super Hero 3"
                height={64}
                width={64}
                className="w-[40px] h-[40px] aspect-square object-cover rounded-xl"
              />
              <p>UniSat Wallet</p>
            </div>
            <div className="flex justify-start items-center gap-6 px-7 py-3 border-2 border-solid border-[#372a4c]  hover:bg-[#5A477B]/40 hover:cursor-pointer hover:border-muted-foreground/50 rounded-xl transition-all duration-300 w-11/12">
              <Image
                src={xverse}
                alt="Super Hero 3"
                height={64}
                width={64}
                className="w-[40px] h-[40px] aspect-square object-cover rounded-xl"
              />
              <p>Xverse Wallet</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* <CartSheet /> */}
    </div>
  );
};

export default NavbarActions;
