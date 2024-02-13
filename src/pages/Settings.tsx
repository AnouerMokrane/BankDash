import EditProfile from "@/components/EditProfile";
import Preference from "@/components/Preference";
import Security from "@/components/Security";
import { useState } from "react";

const Settings = () => {
  const [currentTab, setCurrentTab] = useState("edit-profile");

  const handleSelectedTab = (tabName: string) => {
    setCurrentTab(tabName);
  };

  return (
    <div className=" bg-white p-4 rounded-xl lg:px-6">
      <ul className="setting-links flex justify-between items-center p-1 border-b lg:justify-start lg:gap-14 lg:p-2">
        <li
          className={`text-[13px] text-wild-blue lg:text-base lg:font-medium relative cursor-pointer ${
            currentTab === "edit-profile" ? "active" : ""
          }`}
          onClick={() => handleSelectedTab("edit-profile")}
        >
          Edit Profile
        </li>
        <li
          className={`text-[13px] text-wild-blue lg:text-base lg:font-medium relative cursor-pointer ${
            currentTab === "preferences" ? "active" : ""
          }`}
          onClick={() => handleSelectedTab("preferences")}
        >
          Preferences
        </li>
        <li
          className={`text-[13px] text-wild-blue lg:text-base lg:font-medium relative cursor-pointer ${
            currentTab === "security" ? "active" : ""
          }`}
          onClick={() => handleSelectedTab("security")}
        >
          Security
        </li>
      </ul>
      <div className="pt-6 pb-2">
        {currentTab === "edit-profile" && <EditProfile />}
        {currentTab === "preferences" && <Preference />}
        {currentTab === "security" && <Security />}
      </div>
    </div>
  );
};

export default Settings;
