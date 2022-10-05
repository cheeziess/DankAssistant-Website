import React, { useState } from "react";
import DMPCServerCard from "./DMPCServerCard";
import GDSCard from "./GDSCard";

const ServerSettingsDesktopView = () => {
    const [e1, setE1] = useState(true);
    const [e2, setE2] = useState(false);
    const [colorE1, setColorE1] = useState("#2d2dc7");
    const [colorE2, setColorE2] = useState("#d7d7d7");

    const handle_e1 = () => {
      setE1(true);
      setE2(false);
      setColorE1("#2d2dc7");
      setColorE2("#d7d7d7");  
    };
    const handle_e2 = () => {
      setE1(false);
      setE2(true);
      setColorE1("#d7d7d7");
      setColorE2("#2d2dc7");
    };
  return (
    <div>
      <div className="hidden sm:block w-fit shadow-md shadow-[#373636]">
        <div className="flex lg:text-xl font-bold bg-[#171717] p-4 rounded-lg w-fit lg:whitespace-nowrap">
          <div className="cursor-pointer" onClick={handle_e1}>
            <h1
              style={{ color: `${colorE1}` }}
              className="px-4 cursor-pointer text-[#d7d7d7]"
            >
              Dank Memer Premium Cooldown
            </h1>
          </div>
          <div className="cursor-pointer" onClick={handle_e2}>
            <h1
              style={{ color: `${colorE2}` }}
              className="px-4 cursor-pointer text-[#d7d7d7]"
            >
              Giveaway Donation Settings
            </h1>
          </div>
        </div>
      </div>
      <div className="py-4 hidden sm:block">
        <div className={e1 ? "block" : "hidden"}>
          <DMPCServerCard />
        </div>
        <div className={e2 ? "block" : "hidden"}>
          <GDSCard />
        </div>
      </div>
    </div>
  );
};

export default ServerSettingsDesktopView;
