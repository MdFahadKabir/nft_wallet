"use client"

import React from 'react'
import { BadgeCheck, LayoutGrid, List, ListCollapse, SlidersHorizontal } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { SearchInput } from '@/components/ui/search-input';
import { useCollapseStore, useLayoutStore } from '@/lib/ZStore/control';

const ControlBar = () => {

    const { layout, toggleLayout } = useLayoutStore();
    const { collapse, toggleCollapse } = useCollapseStore();

    return (
        <div className='flex justify-between gap-6 mt-5'>
            <div className="flex gap-2 items-center justify-between w-1/5">
                <div>
                    {/* sidebar toggle */}
                    <div
                        className={` rounded-sm px-2 py-2 cursor-pointer transition-all duration-300 ${collapse === true ? "bg-[#D500E7]" : "bg-[#281546]"
                            }`}
                        onClick={() => toggleCollapse()}
                    >
                        <SlidersHorizontal size={22} />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div
                        className={` rounded-s-sm px-2 py-2 cursor-pointer transition-all duration-300 ${layout === "grid" ? "bg-[#D500E7]" : "bg-[#281546]"
                            }`}
                        onClick={() => toggleLayout("grid")}
                    >
                        <LayoutGrid size={22} />
                    </div>
                    <div
                        className={` rounded-e-sm px-2 py-2 cursor-pointer transition-all duration-300 ${layout === "list" ? "bg-[#D500E7]" : "bg-[#281546]"
                            }`}
                        onClick={() => toggleLayout("list")}
                    >
                        <List size={22} />
                    </div>
                </div>
                <Select>
                    <SelectTrigger className="w-[160px]  bg-[#281546] border-[#281546] focus:ring-slate-900">
                        <SelectValue placeholder="Network" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#281546]">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="src filter flex gap-4 w-4/5">
                <SearchInput className="w-full bg-[#180734] text-[#e0dede] hover:bg-[#180734]/80 ring-offset-background focus-within:ring-0 focus-within:ring-ring focus-within:ring-offset-0" placeholder="Search Collections" />

                <Select className="">
                    <SelectTrigger className="w-1/5 bg-[#281546] border-[#281546] focus:ring-slate-900">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#281546]">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>

                <Select className="">
                    <SelectTrigger className="w-1/5 bg-[#281546] border-[#281546] focus:ring-slate-900">
                        <SelectValue placeholder="Price High to Low" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#281546]">
                        <SelectItem value="light">Price Low to High</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default ControlBar