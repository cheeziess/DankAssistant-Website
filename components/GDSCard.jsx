import React from 'react'
import { mockData } from '../data/mockData';
import { useEffect } from 'react';

const GDSCard = () => { 
  const onClickGiveAwayChannel = () => {
    var e = document.getElementById("select-giveaway-channel");
    var actualValue = e.options[e.selectedIndex].text;
    console.log(actualValue);
  }
  const onClickRequestChannel = () => {
    var e = document.getElementById("select-request-channel");
    var actualValue = e.options[e.selectedIndex].text;
    console.log(actualValue);
  }
  return (
    <div>
      <div className="w-fit h-fit bg-[#171717] rounded-lg shadow-md shadow-[#373636] p-4">
        <h1 className="text-3xl font-bold">Giveaway Donation Settings</h1>
        <div className="py-4">
          <div>
            <label
              htmlFor="select-giveaway-channel"
              className="font-bold text-gray-300 text-xl"
            >
              Set Giveaway Channel
            </label>
            <select
              className="w-full h-fit bg-[#2d2d2d] rounded-lg text-gray-300 font-semibold text-xl py-1 px-2 cursor-pointer hover:bg-gray-400/40"
              name="Set Giveaway Channel"
              id="select-giveaway-channel"
              onChange={onClickGiveAwayChannel}
            >
              {mockData.map((val, key) => {
                return (
                  <option
                    className="bg-[#2d2d2d] font-semibold text-lg text-gray-500"
                    key={key}
                    value={val.id}
                  >
                    {val.ID}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="py-4">
          <div>
            <label
              htmlFor="select-giveaway-channel"
              className="font-bold text-gray-300 text-xl"
            >
              Set Request Channel
            </label>
            <select
              className="w-full h-fit bg-[#2d2d2d] rounded-lg text-gray-300 font-semibold text-xl py-1 px-2 cursor-pointer hover:bg-gray-400/40"
              name="Set Giveaway Channel"
              id="select-request-channel"
              onChange={onClickRequestChannel}
            >
              {mockData.map((val, key) => {
                return (
                  <option
                    className="bg-[#2d2d2d] font-semibold text-lg text-gray-500"
                    key={key}
                    value={val.id}
                  >
                    {val.ID}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="py-4">
          <label
            htmlFor="set-managers"
            className="font-bold text-gray-300 text-xl"
          >
            Assign Giveaway Managers
          </label>
          <input
            type="text"
            placeholder="Enter user ID"
            className="w-full h-fit bg-[#2d2d2d] rounded-lg text-gray-300 font-semibold text-xl py-1 px-2 hover:bg-gray-400/40"
            id="set-managers"
          />
        </div>
      </div>
    </div>
  );
}

export default GDSCard