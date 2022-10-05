import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-fit bg-[#131313] flex justify-between items-center">
      <div className="flex justify-between items-center sm:px-4  sm:pr-12">
        <img
          className="rounded-full w-[50px] sm:w-[79px] py-4"
          src="https://cdn.discordapp.com/attachments/995211985375473694/995627521297104996/dankass.png"
          alt="/"
        />
        <div className="sm:px-8 px-3">
          <h1 className="font-semibold text-gray-400 whitespace-nowrap sm:text-2xl">
            Dank Assistant <sup className="text-sm">©</sup>
          </h1>
        </div>
      </div>

      <div className="w-fit">
        <div className="text-gray-400 font-semibold text-xs sm:text-lg  text-center sm:flex">
          <div className="px-4 hover:text-blue-600">
            <Link href="https://www.patreon.com/dankassistant">Premium</Link>
          </div>
          <div className="px-4 hover:text-blue-600">
            <Link href="/staff">Staff</Link>
          </div>
          <div className="px-4 hover:text-blue-600">
            <Link href="/report">Report</Link>
          </div>
          <div className="px-4 hover:text-blue-600">
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer