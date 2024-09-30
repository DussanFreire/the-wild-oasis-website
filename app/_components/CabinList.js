import React from "react";
import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";
import {
  CabinsCapacitiesPerCategory,
  CabinsFilterCategories,
} from "../_lib/pageConstants";
// import { unstable_noStore as noStore } from "next/cache";

async function CabinList({ filter }) {
  // noStore();
  const cabins = await getCabins();

  const displayedCabins = getFilteredCabins(cabins, filter);

  return (
    cabins.length > 0 && (
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
        {displayedCabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    )
  );
}

function getFilteredCabins(cabins, filter) {
  switch (filter) {
    case CabinsFilterCategories.ALL:
      return cabins;
    case CabinsFilterCategories.SMALL:
      return cabins.filter(
        (cabin) =>
          cabin.maxCapacity >=
            CabinsCapacitiesPerCategory.SMALL_CABIN_MIN_CAP &&
          cabin.maxCapacity <= CabinsCapacitiesPerCategory.SMALL_CABIN_MAX_CAP
      );
    case CabinsFilterCategories.MEDIUM:
      return cabins.filter(
        (cabin) =>
          cabin.maxCapacity >=
            CabinsCapacitiesPerCategory.MEDIUM_CABIN_MIN_CAP &&
          cabin.maxCapacity <= CabinsCapacitiesPerCategory.MEDIUM_CABIN_MAX_CAP
      );
    case CabinsFilterCategories.LARGE:
      return cabins.filter(
        (cabin) =>
          cabin.maxCapacity >= CabinsCapacitiesPerCategory.LARGE_CABIN_MIN_CAP
      );
    default:
      return cabins;
  }
}

export default CabinList;
