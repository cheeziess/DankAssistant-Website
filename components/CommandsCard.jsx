import React from 'react'
import commandStyles from "../styles/Commands.module.css";

const CommandsCard = ({commandName, commandDesc, syntax}) => {
  return (
    <div
      className={`${
        commandStyles.loadEffect
      } ${"bg-[#29292a] w-full rounded-md p-8 max-w-[440px] h-[220px] text-white cursor-default"}`}
    >
      <h1 className="text-3xl font-bold">{commandName}</h1>
      <p className="text-2xl font-semibold text-[#878995] py-1">
        {commandDesc}
      </p>
      <p className="text-sm py-4 font-bold text-[#878995]">Syntax: {syntax}</p>
    </div>
  );
}

export default CommandsCard