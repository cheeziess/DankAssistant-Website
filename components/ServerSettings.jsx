import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import styles from '../styles/ServerSettings.module.css'
import ServerSettingsDesktopView from "./ServerSettingsDesktopView";
import DMPCServerCard from "./DMPCServerCard";
import GDSCard from "./GDSCard";

const ServerSettings = () => {
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
                  Server Settings
                </h1>
                <p className="text-2xl font-semibold text-[#878995] py-1">
                  Customise Dank Assistant settings on your servers
                </p>
              </div>

              <div className="p-4">
                <ServerSettingsDesktopView />
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
                  Server Settings
                </h1>
                <p className="text-xl font-semibold text-[#878995] py-1">
                  Customise Dank Assistant settings on your servers
                </p>
              </div>

              <div className="p-4 w-full grid grid-cols-1 gap-4">
                <DMPCServerCard />
                <GDSCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerSettings;
