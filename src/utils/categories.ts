"use client";

export const CATEGORY_SLUGS = {
  shoes: "shoes",
  hoodiesSweaters: "hoodies-sweaters",
  tShirts: "t-shirts",
  jackets: "jackets",
  pantsShorts: "pants-shorts",
  headwear: "headwear",
  accessories: "accessories",
  otherStuff: "other-stuff",
};

export const getCategoryTranslationKey = (slug: string) => {
  switch (slug) {
    case CATEGORY_SLUGS.shoes: return "shoes";
    case CATEGORY_SLUGS.hoodiesSweaters: return "hoodiesSweaters";
    case CATEGORY_SLUGS.tShirts: return "tShirts";
    case CATEGORY_SLUGS.jackets: return "jackets";
    case CATEGORY_SLUGS.pantsShorts: return "pantsShorts";
    case CATEGORY_SLUGS.headwear: return "headwear";
    case CATEGORY_SLUGS.accessories: return "accessories";
    case CATEGORY_SLUGS.otherStuff: return "otherStuff";
    default: return "categoryNotFound"; // Fallback
  }
};

export const ALL_CATEGORIES = [
  { slug: CATEGORY_SLUGS.shoes, translationKey: "shoes" },
  { slug: CATEGORY_SLUGS.hoodiesSweaters, translationKey: "hoodiesSweaters" },
  { slug: CATEGORY_SLUGS.tShirts, translationKey: "tShirts" },
  { slug: CATEGORY_SLUGS.jackets, translationKey: "jackets" },
  { slug: CATEGORY_SLUGS.pantsShorts, translationKey: "pantsShorts" },
  { slug: CATEGORY_SLUGS.headwear, translationKey: "headwear" },
  { slug: CATEGORY_SLUGS.accessories, translationKey: "accessories" },
  { slug: CATEGORY_SLUGS.otherStuff, translationKey: "otherStuff" },
];