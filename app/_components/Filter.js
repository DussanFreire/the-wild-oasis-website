"use client";

import {
  FilterTabs,
  SearchParams,
  CabinsFilterCategories,
} from "../_lib/pageConstants";
import useChangeSearchParams from "../_hooks/useChangeSearchParams";

function Filter() {
  const { handleFilter, activeSearchParam } = useChangeSearchParams({
    searchParamName: SearchParams.CAPACITY,
    defaultValue: CabinsFilterCategories.ALL,
  });

  return (
    <div className="flex border border-primary-800">
      {FilterTabs.map((tab, index) => (
        <FilterTab
          key={`${tab.tabName}-${index}`}
          active={activeSearchParam === tab.tabName}
          handleClick={() => handleFilter(tab.tabName)}
        >
          {tab.tabText}
        </FilterTab>
      ))}
    </div>
  );
}

function FilterTab({ children, handleClick, active }) {
  return (
    <button
      onClick={handleClick}
      className={`${active ? "bg-primary-700 text-primary-50" : ""} px-5 py-2 hover:bg-primary-700`}
    >
      {children}
    </button>
  );
}

export default Filter;
