import React, { Suspense } from "react";

import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

import {
  CabinsFilterCategories,
  CabinsPageDescriptionText,
  CabinsPageMetadataTitleText,
  CabinsPageTitleText,
  SearchParams,
} from "../_lib/pageConstants";

export const revalidate = 3600;

export const metadata = {
  title: CabinsPageMetadataTitleText,
};

export default function Page({ searchParams }) {
  const filter =
    searchParams?.[SearchParams.CAPACITY] ?? CabinsFilterCategories.ALL;

  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        {CabinsPageTitleText}
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        {CabinsPageDescriptionText}
      </p>
      <div className="mb-8 flex justify-end">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
