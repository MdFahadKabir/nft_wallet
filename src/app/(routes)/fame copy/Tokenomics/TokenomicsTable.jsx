"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const TokenomicsTable = () => {
  return (
    <div>
      <div>
        <Card className="bg-[#16092E] border-[#2F125F] p-2 rounded-xl">
          <CardContent>
            <p className="text-xl pt-5">Tokenomics</p>
            <p className="text-sm text-[#9A9A9A] pt-3">
              Launch your NFT collection for others to mint. Launch your NFT
              collection for.
            </p>

            <div className="mt-5">
              <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                  <TableRow className="text-[#A690CA]">
                    <TableHead className=" text-[#A690CA]">
                      Categories
                    </TableHead>
                
                    <TableHead className="text-[#A690CA]">
                      Distribution %
                    </TableHead>
                    <TableHead className="text-[#A690CA]">
                      Distribution %
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Founders Fund
                    </TableCell>
                    <TableCell className="font-medium text-xs">19%</TableCell>
                    <TableCell className="font-medium text-xs">
                      19,999,999.99
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Development Fund
                    </TableCell>
                    <TableCell className="font-medium text-xs">19%</TableCell>
                    <TableCell className="font-medium text-xs">
                      19,999,999.99
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Advisory Fund
                    </TableCell>
                    <TableCell className="font-medium text-xs">19%</TableCell>
                    <TableCell className="font-medium text-xs">
                      19,999,999.99
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Partnership
                    </TableCell>
                    <TableCell className="font-medium text-xs">19%</TableCell>
                    <TableCell className="font-medium text-xs">
                      19,999,999.99
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Public Sale
                    </TableCell>
                    <TableCell className="font-medium text-xs">25%</TableCell>
                    <TableCell className="font-medium text-xs">
                      19,999,999.99
                    </TableCell>
                  </TableRow>

                  {/* <TableRow>
                    <TableCell className="font-medium text-xs">
                      Investors
                    </TableCell>
                    <TableCell className="font-medium text-xs">
                      <div className="flex justify-between border-b ">
                        <div className="py-3 ">Accelerator</div>
                        <div className=" text-right py-3">2.9%</div>
                      </div>
                      <div className="flex justify-between border-b ">
                        <div className="py-3 ">Seed Fund</div>
                        <div className=" text-right py-3">2.9%</div>
                      </div>
                      <div className="flex justify-between  ">
                        <div className="pt-3 ">Public Sell</div>
                        <div className=" text-right pt-3">2.9%</div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-xs">19%</TableCell>
                    <TableCell className="font-medium text-xs">
                      19,999,999.99
                    </TableCell>
                  </TableRow> */}
                  <TableRow>
                    <TableCell className="font-medium text-xs ">
                      Adoption Fund
                    </TableCell>
                    <TableCell className="font-medium text-xs">19%</TableCell>
                    <TableCell className="font-medium text-xs">
                      19,999,999.99
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TokenomicsTable;
