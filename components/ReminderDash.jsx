import React from 'react'
import DashboardNavbar from './DashboardNavbar';
import ReminderCard from './ReminderCard';
import { reminderData } from "../data/reminderData.js";
import styles from '../styles/Reminder.module.css'

const DashboardMain = ({reminderState}) => {
  return (
    <div>
      {/* Desktop View */}

      <div className="hidden sm:block">
        <div className="h-screen flex">
          {/* Dashboard Navbar */}

          <div className="w-56">
            <DashboardNavbar />
          </div>

          {/* Dashboard Content */}

          <div className="flex-1 flex overflow-hidden">
            {/* Main title and description */}

            <div className="flex-1 overflow-y-scroll">
              <div className="p-4">
                <h1
                  className={`${
                    styles.heading
                  } ${"text-6xl font-bold text-[#4CAF50]"}`}
                >
                  Reminders
                </h1>
                <p className="text-2xl font-semibold text-[#878995] py-1">
                  Manage your Dank Assistant reminders here
                </p>
              </div>

              {/* Reminders */}

              <div className="p-4 w-full grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {reminderData.map((val, key) => {
                  return (
                    <div key={key}>
                      <ReminderCard
                        reminder={val.reminderName}
                        reminderDesc={val.reminderDesc}
                        reminderState={reminderState}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}

      <div className="block sm:hidden">
        <div className="h-screen flex">
          {/* Dashboard Navbar */}

          <div className="w-12 z-10">
            <DashboardNavbar />
          </div>

          {/* Dashboard Content */}

          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-y-scroll">
              {/* Main title and description */}
              <div className="p-4">
                <h1
                  className={`${styles.heading} ${"text-4xl font-bold text-[#4CAF50]"}`}
                >
                  Reminders
                </h1>
                <p className="text-xl font-semibold text-[#878995] py-1">
                  Manage your Dank Assistant reminders here
                </p>
              </div>

              {/* Reminders */}

              <div className="p-4 w-full grid grid-cols-1 gap-4">
                {reminderData.map((val, key) => {
                  return (
                    <div key={key}>
                      <ReminderCard
                        reminder={val.reminderName}
                        reminderDesc={val.reminderDesc}
                        reminderState={reminderState}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMain