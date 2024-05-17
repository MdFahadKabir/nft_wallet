import React from "react";
import SellForm from "./Sell/SellForm";


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
