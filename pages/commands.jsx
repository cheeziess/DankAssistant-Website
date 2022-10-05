import React from "react";
import CommandsCard from "../components/CommandsCard";
import Navbar from "../components/Navbar";
import { commandData } from "../data/commandList";
import commandStyles from "../styles/Commands.module.css";

const commands = () => {
  return (
    <div className={`${commandStyles.mainBody} ${"w-full h-fit bg-[#1e1d1f] text-white p-4"}`}>
      <div>
        <Navbar />
      </div>
      
      <div
        className={`${
          commandStyles.mainTitleLoad
        } ${"text-5xl font-bold pt-24 flex justify-center items-center flex-col"}`}
      >
        <h1 className={`${"text-[#4CAF50]"} ${commandStyles.heading}`}>
          Commands
        </h1>
        <p className="sm:text-2xl text-xl font-semibold pt-6 text-[#878995] text-center">
          Check out the commands Dank Assistant offers!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-12">
        {commandData.map((val, key) => {
          return (
            <div key={key}>
              <CommandsCard
                commandName={val.commandName}
                commandDesc={val.commandDescription}
                syntax={val.commandSyntax}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default commands;
