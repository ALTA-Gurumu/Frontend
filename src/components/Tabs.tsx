import React from "react";
import { useState } from "react";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("tab1");

  const tabList = [
    {
      name: "tab1",
      label: "Tab 1",
      content: (
        <div className="tabs">
          <div className="tab-content">
            <p>Here tab1 </p>
            <p>Lorem</p>
          </div>
        </div>
      ),
    },
    {
      name: "tab2",
      label: "Tab2",
      content: (
        <div className="tabs">
          <div className="tab-content">
            <p>Here tab2 </p>
            <p>Lorem</p>
          </div>
        </div>
      ),
    },
    {
      name: "tab3",
      label: "Tab3",
      content: (
        <div className="tabs">
          <div className="tab-content">
            <p>Here tab3 </p>
            <p>Lorem</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="tab tab-bordered">
        {tabList.map((tab, i) => (
          <button
            key={i}
            onClick={() => setCurrentTab(tab.name)}
            className={tab.name === currentTab ? "tab-active" : ""}
          >
            <div className="text-black m-10">{tab.label}</div>
          </button>
        ))}
      </div>
      {tabList.map((tab, i) => {
        if (tab.name === currentTab) {
          return <div key={i}>{tab.content}</div>;
        } else {
          return null;
        }
      })}
    </>
  );
}
