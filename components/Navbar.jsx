import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import navStyles from "../styles/Navbar.module.css";
import { signIn } from "next-auth/react";

const Navbar = ({session}) => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#1a1a1c");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`${"fixed left-0 top-0 w-full h-[80px] z-10 ease-in duration-500"} ${
        navStyles.loadAnim
      }`}
      id="navBar"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white font-bold">
        <div className="text-4xl sm:text-5xl cursor-default">
          <h1 className={`${navStyles.mainTitle}`}>Dank Assistant</h1>
        </div>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 hover:scale-105 duration-300 hover:text-blue-600">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:scale-105 duration-300 hover:text-blue-600">
            <Link href="/commands">Commands</Link>
          </li>
          <li className="p-4 hover:scale-105 duration-300 hover:text-blue-600">
            <Link href="/faqs">FAQs</Link>
          </li>
          <li className="p-4 hover:scale-105 duration-300 hover:text-blue-600">
            <Link href="https://discord.gg/cfWrVNFhDy" target="_blank">
              Support Server
            </Link>
          </li>
          <li className="p-4 hover:scale-105 duration-300 hover:text-blue-600">
            <Link
              href="https://discord.com/oauth2/authorize?client_id=815564870011453480&scope=applications.commands+bot&permissions=2684865536"
              target="_blank"
            >
              Invite Bot
            </Link>
          </li>
          <li className={`${session ? "p-4 hover:scale-105 duration-300 hover:text-blue-600" : "hidden"}`}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="sm:hidden block z-10">
          <AiOutlineMenu size={20} />
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#1e1d1f] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#1e1d1f] text-center ease-in duration-300"
          }
        >
          <ul>
            <div className="flex justify-center items-center">
              <li>
                <img
                  className="rounded-full w-[100px] py-4"
                  src="https://cdn.discordapp.com/attachments/995211985375473694/995627521297104996/dankass.png"
                  alt="/"
                />
              </li>
            </div>
            <div className="text-5xl p-10">
              <li className={navStyles.mainTitle}>Dank Assistant</li>
            </div>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500 duration-500 font-semibold"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500 duration-500 font-semibold"
            >
              <Link href="/commands">Commands</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500 duration-500 font-semibold"
            >
              <Link href="/faqs">FAQs</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500 duration-500 font-semibold"
            >
              <Link href="https://discord.gg/cfWrVNFhDy" target="_blank">
                Support Server
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-3xl hover:text-gray-500 duration-500 font-semibold"
            >
              <Link href="https://discord.com/oauth2/authorize?client_id=815564870011453480&scope=applications.commands+bot&permissions=2684865536">
                Invite Bot
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
