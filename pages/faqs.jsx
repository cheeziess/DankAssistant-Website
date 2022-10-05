import React from "react";
import styles from "../styles/FAQs.module.css";
import { FAQs } from "../data/FAQsList.js";
import FAQsCard from "../components/FAQsCard";
import Navbar from "../components/Navbar";

const faqs = () => {
  return (
    <div className="w-full h-fit bg-[#1e1d1f] text-white p-4">
      <div>
        <Navbar />
      </div>
      <div
        className={`${
          styles.mainTitleLoad
        } ${"text-5xl font-bold pt-24 flex justify-center items-center flex-col"}`}
      >
        <h1 className={`${"text-[#4CAF50]"} ${styles.heading}`}>FAQs</h1>
        <p className="sm:text-2xl text-xl font-semibold pt-6 text-[#878995] text-center">
          Have a question about Dank Assistant? It may be answered here!
        </p>
      </div>
      <div className="p-8 w-full"></div>
      <div className="grid grid-cols-1 gap-4">
        {FAQs.map((val, key) => {
          return (
            <div key={key}>
              <FAQsCard
                className="link"
                question={val.question}
                answer={val.answer}
              />
            </div>
          );
        })}
        <div>
          <div
            className={`${
              styles.loadEffect
            } ${"bg-[#29292a] w-full rounded-md p-8 h-full text-white cursor-default"}`}
          >
            <h1 className="text-3xl font-bold">
              What should I do if I find wrong information in the bot?
            </h1>
            <p className="text-xl font-semibold text-[#878995] py-1">
              Join our{" "}
              <a
                className="text-blue-600 hover:text-blue-800"
                href="https://discord.gg/cfWrVNFhDy"
                target="_blank"
                rel="noreferrer"
              >
                support server
              </a>{" "}
              and let us know in there!
            </p>
          </div>
        </div>
        <div>
          <div
            className={`${
              styles.loadEffect
            } ${"bg-[#29292a] w-full rounded-md p-8 h-full text-white cursor-default"}`}
          >
            <h1 className="text-3xl font-bold">
              Dank Memer Trending Game is incorrect/outdated!{" "}
            </h1>
            <p className="text-xl font-semibold text-[#878995] py-1">
              If you know the new trending game of the day, please join our{" "}
              <a
                className="text-blue-600 hover:text-blue-800"
                href="https://discord.gg/cfWrVNFhDy"
                target="_blank"
                rel="noreferrer"
              >
                support server
              </a>{" "}
              and let us know in the support channel! We depend on outside
              sources for this information therefore please wait for up to an
              hour in the next day for the updated game to be displayed.
            </p>
          </div>
        </div>
        <div>
          <div
            className={`${
              styles.loadEffect
            } ${"bg-[#29292a] w-full rounded-md p-8 h-full text-white cursor-default"}`}
          >
            <h1 className="text-3xl font-bold">I want to suggest a feature!</h1>
            <p className="text-xl font-semibold text-[#878995] py-1">
              We read through all feature/improvement requests! Join our{" "}
              <a
                className="text-blue-600 hover:text-blue-800"
                href="https://discord.gg/cfWrVNFhDy"
                target="_blank"
                rel="noreferrer"
              >
                support server
              </a>{" "}
              and run -suggest [your suggestion here without the brackets] in
              any channel (in the{" "}
              <a
                className="text-blue-600 hover:text-blue-800"
                href="https://discord.gg/cfWrVNFhDy"
                target="_blank"
                rel="noreferrer"
              >
                support server
              </a>{" "}
              obv)
            </p>
          </div>
        </div>
        <div>
          <div
            className={`${
              styles.loadEffect
            } ${"bg-[#29292a] w-full rounded-md p-8 h-full text-white cursor-default"}`}
          >
            <h1 className="text-3xl font-bold">
              Bot does not remind me for my selected reminders!
            </h1>
            <p className="text-xl font-semibold text-[#878995] py-1">
              Do make sure that you have enabled the specific command reminder
              (by default, they are all disabled). If this issue still persist,
              make sure that dank assistant has the read messages and send
              messages permission. Make sure that you are also using the pls
              prefix. If this issues still persist, report this to our
              developers in our{" "}
              <a
                className="text-blue-600 hover:text-blue-800"
                href="https://discord.gg/cfWrVNFhDy"
                target="_blank"
                rel="noreferrer"
              >
                support server!
              </a>
            </p>
          </div>
        </div>
        <div>
          <div
            className={`${
              styles.loadEffect
            } ${"bg-[#29292a] w-full rounded-md p-8 h-full text-white cursor-default"}`}
          >
            <h1 className="text-3xl font-bold">
              Bot pings that I can use a command again, but it is still in
              cooldown!
            </h1>
            <p className="text-xl font-semibold text-[#878995] py-1">
              You had probably invocated the command first in a channel where
              Dank Assistant does not have read permissions to, or that bot
              cooldown and reminders are desynced. To fix this bug, make sure
              that Dank Assistant can read the channel where your command is
              invocated.You may also take a break from Discord for a while, to
              wait for cooldown from both sides to sync, before comming back!
              Alternatively, the cooldowns for this command may be outdated or
              incorrect, in this case please join our{" "}
              <a
                className="text-blue-600 hover:text-blue-800"
                href="https://discord.gg/cfWrVNFhDy"
                target="_blank"
                rel="noreferrer"
              >
                support server
              </a>{" "}
              to let our friendly developers know!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faqs;
