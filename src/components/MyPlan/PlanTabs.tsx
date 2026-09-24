"use client";

import { Dispatch, SetStateAction } from "react";

type PlanTab = "plan" | "saved";

interface PlanTabsProps {
  activeTab: PlanTab;
  setActiveTab: Dispatch<SetStateAction<PlanTab>>;
}

const PlanTabs = ({
  activeTab,
  setActiveTab,
}: PlanTabsProps) => {
  return (
    <div className="tabs tabs-box gap-1 rounded-xl border border-gray-800 bg-[#11141a] p-1">
      
      <input
        type="radio"
        name="my_plan_tabs"
        aria-label="Today's Plan"
        checked={activeTab === "plan"}
        onChange={() => setActiveTab("plan")}
        className={`tab rounded-lg border-0 px-5 text-sm transition-all
          ${
            activeTab === "plan"
              ? "bg-[#1c212b] font-semibold text-white shadow-sm"
              : "bg-transparent text-gray-500 hover:text-gray-300"
          }
        `}
      />

      <input
        type="radio"
        name="my_plan_tabs"
        aria-label="Saved"
        checked={activeTab === "saved"}
        onChange={() => setActiveTab("saved")}
        className={`tab rounded-lg border-0 px-5 text-sm transition-all
          ${
            activeTab === "saved"
              ? "bg-[#1c212b] font-semibold text-white shadow-sm"
              : "bg-transparent text-gray-500 hover:text-gray-300"
          }
        `}
      />

    </div>
  );
};

export default PlanTabs;