import React from 'react'

const CRMCard = () => {
  return (
    <div>
      <div>
        <div className="bg-[#171717] w-fit max-w-[950px] h-fit p-4 rounded-lg shadow-md shadow-[#373636]">
          <h1 className="text-3xl font-bold">Custom Reminder Message</h1>
          <p className="text-xl font-semibold text-gray-500 py-2">
            Show your creative flair and set your own custom reminder messages
            here for free!
          </p>
          <form>
            <h1 className="text-lg font-bold text-gray-300">
              Enter Your Custom Item Reminder Here!
            </h1>
            <textarea
              className="w-full resize-none h-[50px] rounded-lg bg-gray-500 p-3 text-white font-semibold text-xs sm:text-base"
              id="customItemRem"
              rows="10"
              placeholder="Sheeshhhh {ping}, you can now use the ${invocation} command ${emoji} again!"
            ></textarea>
            <button className="bg-blue-800 px-4 py-1 hover:bg-blue-800/40 rounded-lg">
              Submit
            </button>
            <h1 className="text-lg font-bold text-gray-300">
              Enter Your Custom Command Reminder Here!
            </h1>
            <textarea
              className="w-full resize-none h-[50px] rounded-lg bg-gray-500 p-3 text-white font-semibold text-xs sm:text-base"
              id="customCmdRem"
              rows="10"
              placeholder="Sheeshhhh {ping}, you can now use the ${invocation} command ${emoji} again!"
            ></textarea>
            <button className="bg-blue-800 px-4 py-1 hover:bg-blue-800/40 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CRMCard