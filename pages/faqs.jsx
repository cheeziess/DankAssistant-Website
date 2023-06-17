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
          Have a question about Dank Assistant? Check out the FAQs!
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
              What should I do if I find outdated or incorrect information in the bot?
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
              and open a support ticket through our custom server bot!
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
              As the trending game is manually updated by a group of volunteers, it may take some time for us to find the updated trending game. Alternatively, if you know the new trending game of the day, please join our{" "}
              <a
                className="text-blue-600 hover:text-blue-800"
                href="https://discord.gg/cfWrVNFhDy"
                target="_blank"
                rel="noreferrer"
              >
                support server
              </a>{" "}
              and ping a staff member to update the trending game!
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
              and open a suggestion ticket through our custom server bot!
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
              (by default, they are all disabled). If this issue still persists,
              make sure that Dank Assistant has the basic required permissions (especially the READ MESSAGES and SEND
              MESSAGES permission). Finally, do Make sure that you are also using the "pls"
              prefix.
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
              Bot pings that I can use a command again, but the command is still in
              cooldown!
            </h1>
            <p className="text-xl font-semibold text-[#878995] py-1">
              You had probably invocated the command first in a channel where
              Dank Assistant does not have read permissions to, or that bot
              cooldown and reminders are desynced. To fix this bug, make sure
              that Dank Assistant can read the channel where your command is
              invocated. To prevent a chain of incorrect reminders, take a short break and do something else while waiting for commands to sync up!
              For more information, you may want to join our{" "}
              <a
                className="text-blue-600 hover:text-blue-800"
                href="https://discord.gg/cfWrVNFhDy"
                target="_blank"
                rel="noreferrer"
              >
                support server
              </a>{" "}
              for advanced troubleshooting tips and support (if needed)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default faqs;
