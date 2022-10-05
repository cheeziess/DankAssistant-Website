import React, { useState } from "react";
import styles from "../styles/Dashboard.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const DashboardNavbar = () => {
  const [nav, setNav] = useState(false);
  const session = useSession();

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed top-0 left-0 h-screen m-0">
      {/* Desktop Menu */}
      <div
        className={`${
          styles.loadAnim
        } ${"hidden sm:block w-fit h-screen bg-[#272627]"}`}
      >
        <Link href="/">
          <div className="p-4 font-bold text-2xl flex-col whitespace-nowrap">
            <div className={styles.mainTitle}>
              <h1 className="p-4 cursor-pointer">Dank Assistant</h1>
            </div>
          </div>
        </Link>

        {/* General Components */}

        <div>
          <div className="font-bold text-xs p-4 text-[#878995]">
            <h1 className="uppercase">General</h1>
            <Link href="/dashboard">
              <div className="text-base font-semibold p-1 cursor-pointer hover:bg-[#606169] hover:text-white w-full h-fit rounded-md flex items-center text-[#3e53c7] duration-300">
                <h1>Reminders</h1>
              </div>
            </Link>
            <Link href="/usersettings">
              <div className="text-base font-semibold p-1 cursor-pointer hover:bg-[#606169] hover:text-white w-full h-fit rounded-md flex items-center text-[#3e53c7] duration-300">
                <h1>User Settings</h1>
              </div>
            </Link>
            <Link href="/serversettings">
              <div className="text-base font-semibold p-1 cursor-pointer hover:bg-[#606169] hover:text-white w-full h-fit rounded-md flex items-center text-[#3e53c7] duration-300">
                <h1>Server Settings</h1>
              </div>
            </Link>
          </div>
        </div>

        {/* Logout Button */}

        <div className="absolute bottom-0 p-2 flex items-center justify-center flex-col">
          <div className="w-16 rounded-full">
            <img
              src={session.data.user.image}
              alt="/"
              className="rounded-full"
            />
          </div>
          <div
            onClick={() =>
              signOut({
                callbackUrl: "http://localhost:3000/",
              })
            }
          >
            <h1 className="font-semibold text-left text-red-600 cursor-pointer hover:bg-[#606169] rounded-md px-4 py-1 duration-300 hover:text-white">
              Logout
            </h1>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      {/* Mobile Menu Button */}

      <div
        className={`${
          styles.loadAnim
        } ${"sm:hidden block w-fit h-screen bg-[#272627] p-4"}`}
      >
        <div onClick={handleNav} className="block z-10">
          <AiOutlineMenu size={20} />
        </div>

        <div className={nav ? "block" : "hidden"}>
          <div>
            <Link href="/">
              <div className="text-3xl font-bold">
                <div className={styles.mainTitle}>
                  <h1 className="p-4">Dank Assistant</h1>
                </div>
              </div>
            </Link>

            {/* General Components */}

            <div>
              <div className="font-bold text-base p-4 text-[#878995]">
                <h1 className="uppercase">General</h1>
                <Link href="/dashboard">
                  <div className="text-lg font-semibold p-1 cursor-pointer hover:bg-[#606169] hover:text-white w-full h-fit rounded-md flex items-center text-[#3e53c7] duration-300">
                    <h1>Reminders</h1>
                  </div>
                </Link>
                <Link href="/usersettings">
                  <div className="text-lg font-semibold p-1 cursor-pointer hover:bg-[#606169] hover:text-white w-full h-fit rounded-md flex items-center text-[#3e53c7] duration-300">
                    <h1>User Settings</h1>
                  </div>
                </Link>
                <Link href="/serversettings">
                  <div className="text-lg font-semibold p-1 cursor-pointer hover:bg-[#606169] hover:text-white w-full h-fit rounded-md flex items-center text-[#3e53c7] duration-300">
                    <h1>Server Settings</h1>
                  </div>
                </Link>
              </div>
            </div>

            {/* Logout Button */}

            <div className="absolute bottom-0 py-2 flex items-center justify-center flex-col">
            <div className="w-12 rounded-full">
            <img
              src={session.data.user.image}
              alt="/"
              className="rounded-full"
            />
          </div>
              <div
                onClick={() =>
                  signOut({
                    callbackUrl: "http://localhost:3000/",
                  })
                }
              >
                <h1 className="font-semibold text-left text-red-600 cursor-pointer hover:bg-[#606169] rounded-md px-4 py-1 duration-300 hover:text-white">
                  Logout
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
