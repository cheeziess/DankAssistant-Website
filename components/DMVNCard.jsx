import React from 'react'
import styles from '../styles/DMVNCard.module.css'

const DMVNCard = () => {
  return (
    <div>
        <div className="bg-[#171717] w-fit max-w-[950px] h-fit p-4 rounded-lg shadow-md shadow-[#373636]">
          <h1 className="text-3xl font-bold">DM Vote Notifications</h1>
          <p className="text-xl font-semibold text-gray-500 py-2">
            Annoyed with the DM Vote notifications or reminders? Click the below
            buttons to enable or disable the block! Once enabled, you should not
            receive any more dms pertaining to voting. If otherwise, do report
            it to our support server!
          </p>

          <div className="cursor-pointer py-2">
            <label className={styles.switch}>
              <input type="checkbox" /> <div></div>
            </label>
          </div>
        </div>
    </div>
  );
}

export default DMVNCard