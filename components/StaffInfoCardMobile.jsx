import React from 'react'
import {
  FaGithub,
  FaSpotify,
  FaDiscord,
  FaReddit,
  FaTwitch,
  FaTwitter,
  FaInstagram,
  FaSteam,
  FaGlobe
} from "react-icons/fa";
import Link from "next/link";



const StaffInfoCardMobile = ({
  name,
  title,
  description,
  pfp,
  github,
  spotify,
  discordServer,
  reddit,
  twitch,
  twitter,
  instagram,
  steam,
  website
}) => {
  return (
    <div className="w-full h-[250px] rounded-md p-4 relative bg-[#171717] shadow-md shadow-[#373636]">
      <div className="flex">
        <div>
          <img src={pfp} alt="/" className="rounded-full w-[100px]" />
        </div>
        <div className="px-4">
          <h1 className="font-bold text-3xl">{name}</h1>
          <h1 className="font-semibold text-lg text-gray-400">{title}</h1>
          <div className="flex">
            <div className={github == "" ? "hidden" : "block"}>
              <div className="hover:text-gray-400 p-1 cursor-pointer">
                <Link href={github}>
                  <FaGithub size={20} />
                </Link>
              </div>
            </div>
            <div className={spotify == "" ? "hidden" : "block"}>
              <div className="hover:text-green-500 p-1 cursor-pointer">
                <Link href={spotify}>
                  <FaSpotify size={20} />
                </Link>
              </div>
            </div>
            <div className={discordServer == "" ? "hidden" : "block"}>
              <div className="hover:text-[#5865F2] p-1 cursor-pointer">
                <Link href={discordServer}>
                  <FaDiscord size={20} />
                </Link>
              </div>
            </div>
            <div className={reddit == "" ? "hidden" : "block"}>
              <div className="hover:text-[#ff4500] p-1 cursor-pointer">
                <Link href={reddit}>
                  <FaReddit size={20} />
                </Link>
              </div>
            </div>
            <div className={twitch == "" ? "hidden" : "block"}>
              <div className="hover:text-[#6441a5] p-1 cursor-pointer">
                <Link href={twitch}>
                  <FaTwitch size={20} />
                </Link>
              </div>
            </div>
            <div className={twitter == "" ? "hidden" : "block"}>
              <div className="hover:text-[#1DA1F2] p-1 cursor-pointer">
                <Link href={twitter}>
                  <FaTwitter size={20} />
                </Link>
              </div>
            </div>
            <div className={instagram == "" ? "hidden" : "block"}>
              <div className="hover:text-[#8a3ab9] p-1 cursor-pointer">
                <Link href={instagram}>
                  <FaInstagram size={20} />
                </Link>
              </div>
            </div>
            <div className={steam == "" ? "hidden" : "block"}>
              <div className="hover:text-[#143e70] p-1 cursor-pointer">
                <Link href={steam}>
                  <FaSteam size={20} />
                </Link>
              </div>
            </div>
            <div className={website == "" ? "hidden" : "block"}>
              <div className="hover:text-[#143e70] p-1 cursor-pointer">
                <Link href={website}>
                  <FaGlobe size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="py-4 text-lg text-gray-300 font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StaffInfoCardMobile