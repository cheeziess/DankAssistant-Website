import React from 'react'
import styles from '../styles/DMPCServerCard.module.css'

const DMPCServerCard = () => {
  return (
    <div>
      <div className="bg-[#171717] w-fit h-fit p-4 rounded-lg shadow-md shadow-[#373636]">
        <h1 className="text-3xl font-bold">Dank Memer Premium Cooldown</h1>
        <p className="text-xl font-semibold text-gray-500 py-2">
          Enable Dank Memer premium cooldowns for the whole guild to get
          reminders which use premium cooldowns
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

export default DMPCServerCard