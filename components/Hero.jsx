import React from 'react'
import styles from "../styles/Home.module.css";
import InfoCard from '../components/InfoCard';
import InfoCard2 from './InfoCard2';
import MobileInfoCard from './MobileInfoCard';
import Infostyles from "../styles/infoCard.module.css";
import Link from 'next/link';
import Navbar from '../components/Navbar'
import { signIn } from 'next-auth/react';

const Hero = ({session}) => {
  return (
    <div>
      <Navbar session={session} />
      {/* Fancy background animation stuff */}
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="text-white flex items-center justify-center py-[100px] relative">
          <ul className="p-4 flex flex-col items-center justify-center">
            <li>
              <img
                className="rounded-full w-[200px] sm:w-[200px] py-4"
                src="https://cdn.discordapp.com/attachments/995211985375473694/995627521297104996/dankass.png"
                alt="/"
              />
            </li>
            <li>
              <div className="text-4xl sm:text-7xl font-bold text-center">
                <h1 className={styles.textLoadAnim}>Dank Assistant</h1>
              </div>
            </li>
            <li
              className={`${"text-2xl sm:text-3xl font-semibold py-5 text-center"} ${
                styles.mainDescAnim
              }`}
            >
              Your most reliable guide to the Dank Memer universe.
            </li>
            <li className={`${session ? "bg-[#3400a5] rounded-lg text-center duration-300 font-semibold w-[200px] h-fit hover:bg-[#3400a5]/30 py-3 mt-3" : "hidden"}`}>
            <Link href="/dashboard">Dashboard</Link>
          </li>
              
          </ul>
        </div>
      </div>
      <div className="hidden sm:block w-full h-full">
        <InfoCard
          heading="Command Reminders"
          description="With Dank Assistant, you will be reminded exactly when your cooldown is over! Besides, we have over 30 different reminders to choose from, so you will never ever see the cooldown message from Dank Memer ever again!"
          imgSrc="https://cdn.discordapp.com/attachments/958646314227343432/972035710171353088/89CEE1EB-D607-4F7C-850F-E96E0294D1AB.jpeg"
        />
        <InfoCard2
          heading="Dank Memer Guides"
          description="Ever wanted to find out how to get certain pets, or the various types of possibilities in adventure? Dank Assistant has them all, and much more!"
          imgSrc="https://cdn.discordapp.com/attachments/962897295999909938/971974921712443442/FF461C31-4F56-444B-B4E0-D9CD41860AED.jpeg"
        />
        <InfoCard
          heading="Calculators"
          description="We offer Calculators for every aspect of Dank Memer, such as daily rewards, prestige, omega and much more!"
          imgSrc="https://cdn.discordapp.com/attachments/962897295999909938/971975777514033253/5E822AA5-8E49-411B-9722-EBDF0AA7C7BF.jpeg"
        />
        <div className="p-10 bg-[#1e1d1f]">
          <div className="flex justify-between items-center text-white py-4">
            <div className="mr-24">
              <ul>
                <li className={`${"text-5xl font-bold text-white"}`}>
                  Accurate Trending Game Info
                </li>
                <li
                  className={`${
                    Infostyles.floatAnim2
                  } ${"text-2xl font-semibold py-4 text-[#878995]"}`}
                >
                  We are proud to announce a partnership with{" "}
                  <a
                    href="https://discord.gg/danktrending"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Dank Memer Trending Game{" "}
                  </a>
                  server, ensuring that the trending game of the day is
                  fetched quicker and more accurately than our competitors!
                </li>
              </ul>
            </div>
            <img
              className={`${Infostyles.floatAnim}  ${"rounded-lg"}`}
              src="https://cdn.discordapp.com/attachments/958646314227343432/972035102483808276/AC1A2CE4-52B2-46E8-B453-1C14C953F990.jpeg"
              alt="/"
              width="390"
            />
          </div>
        </div>
        <InfoCard
          heading="Item Worth Calculator"
          description="Whether you are a giveaway manager trying to calculate the value of a giveaway in a server, or you are simply trying to calculate the value of the items you want to trade, this feature is for you! Easily calculate the net worth of your items with the most updated prices available!"
          imgSrc="https://cdn.discordapp.com/attachments/958646314227343432/972049395761676298/4540ECEA-B305-447F-A9B8-AF9431ECBD17.jpeg"
        />
        <InfoCard2
          heading="Infinite Reminder Customizations!"
          description="Vote for our bot and unlock custom reminder messages of your choosing!"
          imgSrc="https://cdn.discordapp.com/attachments/996083953255600231/996250704488439878/unknown.png"
        />
        <InfoCard
          heading="Server Utilities"
          description="Minigames such as auto fight tourneys (coming soon) and even giveaway-donate (request) modules are bundled with the bot! These features are also highly customizable and modular in nature"
          imgSrc="https://cdn.discordapp.com/attachments/996083953255600231/996630043507839026/unknown.png"
        />
        <InfoCard2
          heading="Auto Raffle"
          description="Want to automate raffles? Dank Assistant has you covered! Just configure where you want the raffle to be and Dank Assistant will do the everything else automatically for you!"
          imgSrc="https://cdn.discordapp.com/attachments/964770019470880781/998140108677054474/unknown.png"
        />
        <InfoCard
          heading="Singapore Busarrival Utilities"
          description="On discord but don't want to switch to an external application to check when your bus is arriving? No problem! Type in any stop code, description, road or landmark and get accurate busarrival timings! The bot will even remind u when the bus is arriving, so that you dont have to keep looking at your screen!"
          imgSrc="https://media.discordapp.net/attachments/996083953255600231/996631061029203998/unknown.png"
        />
      </div>
      <div className="block sm:hidden">
        <MobileInfoCard
          heading="Command Reminders"
          description="With Dank Assistant, you will be reminded exactly when your cooldown is over! Besides, we have over 30 different reminders to choose from, so you will never ever see the cooldown message from Dank Memer ever again!"
        />
        <div className={`${"p-10 bg-[#1e1d1f]"}`}>
          <ul className={Infostyles.floatAnim}>
            <li className="text-3xl font-bold text-white">
              Accurate Trending Game Info
            </li>
            <li className="text-2xl font-semibold py-4 text-[#878995]">
              We are proud to announce a partnership with{" "}
              <a
                href="https://discord.gg/danktrending"
                className="text-blue-600 hover:text-blue-800"
              >
                Dank Memer Trending Game{" "}
              </a>
              server, ensuring that the trending game of the day is
              fetched quicker and more accurately than our competitors!
            </li>
          </ul>
        </div>
        <MobileInfoCard
          heading="Calculators"
          description="We offer Calculators for every aspect of Dank Memer, such as daily rewards, prestige, omega and much more!"
        />
        <MobileInfoCard
          heading="Accurate Trending Game Info"
          description="Unlike our competitors that manually updates trending game which is always outdated, we fetch the trending game automatically, so the trending game is accurate at all times!"
        />
        <MobileInfoCard
          heading="Item Worth Calculator"
          description="Whether you are a giveaway manager trying to calculate the value of a giveaway in a server, or you are simply trying to calculate the value of the items you want to trade, this feature is for you! Easily calculate the net worth of your items with the most updated prices available!"
        />
        <MobileInfoCard
          heading="Infinite Reminder Customisations!"
          description="Vote for our bot and unlock custom reminder messages of your choosing!"
        />
        <MobileInfoCard
          heading="Server Utilities"
          description="Minigames such as auto fight tourneys (coming soon) and even giveaway-donate (request) modules are bundled with the bot! These features are also highly customisable and modular in nature"
        />
        <MobileInfoCard
          heading="Auto Raffle"
          description="Want to automate raffles? Dank Assistant has you covered! Just configure where you want the raffle to be and Dank Assistant will do the everything else automatically for you!"
        />
        <MobileInfoCard
          heading="Singapore Busarrival Utilities"
          description="On discord but dont want to switch to an external application to check when your bus is arriving? No problem! Type in any stop code, description, road or landmark and get accurate busarrival timings! The bot will even remind u when the bus is arriving, so that you dont have to keep looking at your screen!"
        />
      </div>
    </div>
  );
}

export default Hero