"use client";
import React, { useState } from "react";
import TabButton from "../TabButton";
import SearchButton from "./SearchButton";
import SavedSearches from "./SavedSearches";


const MainFilters = () => {
  const [activeTab, setActiveTab] = useState("people");

  return (
    <div className="flex flex-col w-1/4 h-screen bg-slate-300">
      <div className="bg-gray-200 fixed top-0 w-1/4 z-10 space-x-4 flex justify-between px-4 border-b">
        <div>
          <TabButton
            isActive={activeTab === "people"}
            onClick={() => setActiveTab("people")}
          >
            People
          </TabButton>
          <TabButton
            isActive={activeTab === "companies"}
            onClick={() => setActiveTab("companies")}
          >
            Companies
          </TabButton>
        </div>
        <button
          className="py-2 px-4 text-gray-500 hover:text-blue-500"
          onClick={() => setActiveTab("")}
        >
          Clear all
        </button>
      </div>
      <main className="flex-grow overflow-y-auto mt-20 mb-12 p-4">
        <p>show 1</p>
        <p>show 2</p>
      </main>
      <div className="bg-gray-200 w-1/4 fixed bottom-0 p-4">divasdas</div>
      <div className="bg-gray-200 w-1/4 fixed bottom-0 p-4">
        <SearchButton />
        <SavedSearches />
      </div>
    </div>
  );
};

export default MainFilters;
