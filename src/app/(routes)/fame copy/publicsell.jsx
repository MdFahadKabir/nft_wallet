import React from "react";
import BuyPage from "./Buy/page";
import FameTokenPage from "./FameToken/page";
import TokenomicsPage from "./Tokenomics/page";
import SellForm from "./Sell/SellForm";
import TransferForm from "./transferForm";
import FameFrom from "./FameToken/FameFrom";
import BalanceForm from "./Vesting/balanceForm";


const publicsell = () => {
  return (
    <div className="">


      <div className="flex justify-center gap-10">
        <div className="w-1/2 space-y-10">
          <SellForm />
        </div>
      </div>


     
    </div>
  );
};

export default publicsell;
