import React from "react";
import BuyPage from "./Buy/page";
import FameTokenPage from "./FameToken/page";
import TokenomicsPage from "./Tokenomics/page";
import BuyForm from "./Buy/BuyForm";
import TransferForm from "./transferForm";
import FameFrom from "./FameToken/FameFrom";
import BalanceForm from "./Vesting/balanceForm";


const assets = () => {
  return (
    <div className="">
      <div className="flex justify-center gap-10">
        <div className="w-full mb-10">
        <TransferForm />
        </div>
      </div>

      <div className="flex justify-center gap-10">
        <div className="w-1/2 space-y-10">
          <BuyForm />
        </div>
        <div className="w-1/2  space-y-10">
          <FameFrom />
        </div>
      </div>

      <div className="flex justify-center gap-10 mt-10">
        <div className="w-full space-y-10">
        <BalanceForm/>
        </div>
      </div>

      <div className="mt-10">
        <TokenomicsPage />
      </div>
     
    </div>
  );
};

export default assets;
