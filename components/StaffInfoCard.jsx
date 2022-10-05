import Link from "next/link";
import React from "react";
import { FaGithub, FaSpotify, FaDiscord, FaReddit, FaTwitch, FaTwitter, FaInstagram, FaSteam, FaGlobe } from "react-icons/fa";

const StaffInfoCard = ({
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
    <div className="w-full h-[240px] rounded-md p-4 relative bg-[#171717] shadow-md shadow-[#373636]">
      <div className="flex flex-col">
        <div className="flex p-1">
          <div className="rounded-full">
            <img
              src={pfp}
              alt="/"
              className="rounded-full sm:w-[100px] sm:block hidden"
            />
          </div>
          <div className="px-4">
            <h1 className="font-bold sm:text-3xl text-2xl">{name}</h1>
            <h1 className="font-bold text-sm text-gray-400">{title}</h1>
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
        <div className="py-4 text-lg text-gray-300 font-semibold">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StaffInfoCard;
