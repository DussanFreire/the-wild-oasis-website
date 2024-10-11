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

export const PAGE_NAME = "The Wild Oasis";

export const WELCOME_PAGE_TEXT = {
  WELCOME_DESC_1: `Where nature's beauty and comfortable living blend seamlessly.
  Hidden away in the heart of the Italian Dolomites, this is your
  paradise away from home. But it's not just about the luxury
  cabins. It's about the experience of reconnecting with nature
  and enjoying simple pleasures with family.`,
  WELCOME_DESC_2: `Our luxury cabins provide a cozy base, but the real freedom and
peace you'll find in the surrounding mountains. Wander through
lush forests, breathe in the fresh air, and watch the stars twinkle
above from the warmth of a campfire or your hot tub.`,
  WELCOME_DESC_3: `This is where memorable moments are made, surrounded by
nature's splendor. It's a place to slow down, relax, and
feel the joy of being together in a beautiful setting.`,
  ABOUT_INFO_1: `Since 1962, The Wild Oasis has been a cherished family-run retreat.
Started by our grandparents, this haven has been nurtured with love
and care, passing down through our family as a testament to our
dedication to creating a warm, welcoming environment.`,
  ABOUT_INFO_2: `Over the years, we've maintained the essence of The Wild
Oasis, blending the timeless beauty of the mountains with the
personal touch only a family business can offer. Here, you're
not just a guest; you're part of our extended family. So join
us at The Wild Oasis soon, where tradition meets tranquility, and
every visit is like coming home.`,
  ABOUT_INFO_TITLE: "Managed by our family since 1962",
  ABOUT_INFO_BUTTON: "Explore our luxury cabins",
};

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

export const CabinsPageMetadataTitleText = "Cabins";
export const CabinsPageTitleText = "Our Luxury Cabins";
export const CabinsPageDescriptionText =
  "Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful mountain views, spending your days exploring the dark forests around, or just relaxing in your private hot tub under the stars. Enjoy nature's beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. \nWelcome to paradise.";

export const ProfilePageMetadataTitleText = "Update profile";
export const ProfilePageTitleText = "Update your guest profile";
export const ProfilePageDescriptionText =
  "Providing the following information will make your check-in process faster and smoother. See you soon!";
