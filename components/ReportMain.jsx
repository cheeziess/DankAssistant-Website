import React from "react";
import { useState } from "react";
import styles from "../styles/Report.module.css";

const ReportMain = () => {
  const sendReport = async(event) => {
    event.preventDefault();

        const sender = document
          .getElementById('user').value;
        const report = document
          .getElementById('report').value;

        const webhookBody = {
          embeds: [{
            title: 'Contact Form Submitted',
            fields: [
              { name: 'Sender', value: sender },
              { name: 'Message', value: report }
            ]
          }],
        };

        const webhookUrl =
          "https://discord.com/api/webhooks/996674661515526264/1qiArcec6H_v5JHPRhPESguMFPLDU6-1Am5ZhLcveP_QiRP0vS7E703nrY5dgtOr85Yw";

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookBody),
        });
        if (response) {
          setAlertStateSubmitted(true)
          setTimeout(() => {
            setAlertStateSubmitted(false)
          }, 3000)

        } else {
          setAlertStateError(true);
          setTimeout(() => {
            setAlertStateError(false);
          }, 3000);
        }

      }
      const [alertStateSubmitted, setAlertStateSubmitted] = useState(false);
      const [alertStateError, setAlertStateError] = useState(false);
      
  return (
    <div className="w-full h-screen bg-[#1e1d1f]">
      <div
        className={`${
          styles.mainTitleLoad
        } ${"text-5xl font-bold pt-24 flex justify-center items-center flex-col"}`}
      >
        <h1 className={`${"text-[#4CAF50]"} ${styles.heading}`}>Report</h1>
        <p className="sm:text-2xl text-xl font-semibold pt-6 text-[#878995] text-center">
          Report any bugs you found or any user that is breaking the rules here
        </p>
      </div>
      <div
        name="contact"
        className="w-full h-fit text-white flex justify-center items-center p-4"
      >
        <form
          onSubmit={sendReport}
          className="flex flex-col w-full max-w-[600px]"
        >
          <input
            id="user"
            type="text"
            placeholder="Discord username"
            name="name"
            className="my-4 p-2 rounded-lg text-white font-semibold bg-[#171717] shadow-black shadow-lg"
            required
          />
          <textarea
            id="report"
            name="message"
            rows="10"
            placeholder="Describe the problem"
            className="my-1 p-2 rounded-lg text-white font-semibold bg-[#171717] shadow-black shadow-lg resize-none"
            required
          ></textarea>
          <button
            className="bg-[#3400a5] rounded-md hover:bg-[#3400a5]/30 px-6 py-1 text-center duration-300 my-2 "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full h-fit flex justify-center">
        <div>
          <div
            id="form-submission-success"
            className={alertStateSubmitted ? "block" : "hidden"}
          >
            <div className="w-[250px] h-[50px] bg-green-600 rounded-lg flex justify-center items-center">
              <h1 className="font-bold text-gray-200">
                Report Submitted Successfully!
              </h1>
            </div>
          </div>
          <div
            id="form-submission-fail"
            className={alertStateError ? "block" : "hidden"}
          >
            <div className="w-[250px] h-[50px] bg-red-600 rounded-lg flex justify-center items-center">
              <h1 className="font-bold text-gray-200">
                Failed to submit try again
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportMain;
