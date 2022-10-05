import React, { useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import styles from "../styles/UserSettings.module.css";
import UserSettingsDesktopView from "./UserSettingsDesktopView";
import DMPCCard from "./DMPCCard";
import CRMCard from "./CRMCard";
import DMVNCard from "./DMVNCard";


const UserSettings = () => {
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

          <div className="flex-1 flex overflow-hidden invisible sm:visible">
            {/* Main title and description */}

            <div className="flex-1 overflow-y-scroll">
              <div className="p-4">
                <h1
                  className={`${
                    styles.heading
                  } ${"text-6xl font-bold text-[#4CAF50]"}`}
                >
                  User Settings
                </h1>
                <p className="text-2xl font-semibold text-[#878995] py-1">
                  Personalise your Dank Assistant settings here
                </p>
              </div>

              {/* Reminders */}

              <div className="p-4">
                <UserSettingsDesktopView />
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
                  className={`${
                    styles.heading
                  } ${"text-4xl font-bold text-[#4CAF50]"}`}
                >
                  User Settings
                </h1>
                <p className="text-xl font-semibold text-[#878995] py-1">
                  Personalise your Dank Assistant settings here
                </p>
              </div>

              <div className="p-4">
                <div className="block sm:hidden">
                  <div className="py-2">
                    <DMPCCard />
                  </div>
                  <div className="py-2">
                    <DMVNCard />
                  </div>
                  <div className="py-2">
                    <CRMCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
