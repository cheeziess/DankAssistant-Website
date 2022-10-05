import React from 'react'
import commandStyles from "../styles/Commands.module.css";

const privacy = () => {
  return (
    <div className="w-full sm:h-screen bg-[#1e1d1f] text-white p-4">
      <div
        className={`${
          commandStyles.mainTitleLoad
        } ${"text-5xl font-bold pt-24 flex justify-center items-center flex-col"}`}
      >
        <h1 className={`${"text-[#4CAF50]"} ${commandStyles.heading}`}>
          Privacy Policy
        </h1>
        <p className="sm:text-2xl text-xl font-semibold pt-6 text-[#878995] text-center">
          Last updated and effective: April 29, 2022
        </p>
      </div>
      <div className='font-semibold text-xl text-center py-12'>
        <ul className='flex flex-col'>
            <li className='py-4'>
            This privacy policy applies to the Discord bot Dank Assistant#3118,
            Dank Assistant 2#2192 and Dank Assistant 3#7794
            </li>
            <li className='py-4'>
            Your privacy is important to us. The developers of Dank Assistant know
            that you care about your personal information and we take your privacy
            seriously. Please read the following to learn more about our Privacy
            Policy
            </li>
            <li className='py-4'>
            Server IDs, Channel IDs and User IDs, which are Discord
            automatically-generated identifiers are stored in our encrypted
            servers for reminders, bot settings and debugging purposes and no any
            other purposes. No other data is stored. Data can be removed from our
            servers by reaching out to our developers in Dank Assistant Studio
            </li>
            <li className='py-4'>
            If you have a privacy related inquiry, please email chris@dankassistant.xyz.
            </li>
            <li className='py-4'>Thank you for using Dank Assistant</li>
        </ul>
      </div>
    </div>
  );
}

export default privacy