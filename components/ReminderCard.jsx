import React from 'react'
import "react-edit-text/dist/index.css";
import styles from "../styles/Remindercard.module.css";

const ReminderCard = ({reminder, reminderDesc, reminderState}) => {
  return (
    <div className="sm:w-fit w-full min-w-[370px] h-[150px] rounded-md p-4 relative bg-[#171717] shadow-md shadow-[#373636]">
      <div className="flex flex-col">
        <h1 id="reminder" className="font-bold text-2xl text-[#fbfafd]">
          {reminder}
        </h1>
        <p id="reminder-time" className="text-sm font-semibold text-gray-400">
          {reminderDesc}
        </p>

        {/* Toggle Switch */}

        <div className="py-2 absolute bottom-0">
          <label className={styles.switch}>
            <input type="checkbox" checked={reminderState} /> <div></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ReminderCard