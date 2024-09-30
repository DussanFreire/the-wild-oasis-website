export const CabinsFilterCategories = Object.freeze({
  ALL: "all",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
});

export const CabinsCapacitiesPerCategory = Object.freeze({
  SMALL_CABIN_MIN_CAP: 1,
  SMALL_CABIN_MAX_CAP: 3,
  MEDIUM_CABIN_MIN_CAP: 4,
  MEDIUM_CABIN_MAX_CAP: 7,
  LARGE_CABIN_MIN_CAP: 8,
  LARGE_CABIN_MAX_CAP: 12,
});

export const FilterTabs = Object.freeze([
  {
    tabName: CabinsFilterCategories.ALL,
    tabText: "All cabins",
  },
  {
    tabName: CabinsFilterCategories.SMALL,
    tabText: `${CabinsCapacitiesPerCategory.SMALL_CABIN_MIN_CAP}—${CabinsCapacitiesPerCategory.SMALL_CABIN_MAX_CAP} guests`,
  },
  {
    tabName: CabinsFilterCategories.MEDIUM,
    tabText: `${CabinsCapacitiesPerCategory.MEDIUM_CABIN_MIN_CAP}—${CabinsCapacitiesPerCategory.MEDIUM_CABIN_MAX_CAP} guests`,
  },
  {
    tabName: CabinsFilterCategories.LARGE,
    tabText: `${CabinsCapacitiesPerCategory.LARGE_CABIN_MIN_CAP}—${CabinsCapacitiesPerCategory.LARGE_CABIN_MAX_CAP} guests`,
  },
]);

export const SearchParams = Object.freeze({
  CAPACITY: "capacity",
});
