export type Locale = "en" | "th";
export type PageKey = "home" | "services" | "approach" | "ventures" | "about" | "contact";
export const locales: Locale[] = ["en", "th"];
export const pages: PageKey[] = ["home", "services", "approach", "about", "ventures", "contact"];
export const showcaseImages = [
  { id: "software", image: "/images/hero/software.webp", serviceIndex: 0 },
  { id: "ai", image: "/images/hero/ai.webp", serviceIndex: 1 },
  { id: "data", image: "/images/hero/data.webp", serviceIndex: 2 },
  { id: "consulting", image: "/images/hero/consulting.webp", serviceIndex: 3 },
] as const;
export const site = {
  name: "Philodox",
  tagline: "From Thought to Impact.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://philodox.site",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@philodox.site",
  social: {} as Record<string, string>,
  founders: [
    { id: "punnawit", name: "Punnawit Silapasert", initials: "PS", image: null, github: "https://github.com/chokoon123", education: { en: "Data Science and Innovation · College of Innovation, Thammasat University", th: "วิทยาศาสตร์ข้อมูลและนวัตกรรม · วิทยาลัยนวัตกรรม มหาวิทยาลัยธรรมศาสตร์" } },
    { id: "thaingern", name: "Thaingern Pinta", initials: "TP", image: "/images/founders/thaingern.png", github: "https://github.com/thaingern001", education: { en: "Computer Engineering · Kasetsart University, Bangkhen Campus", th: "วิศวกรรมคอมพิวเตอร์ · มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตบางเขน" } },
  ],
};

export const pathFor = (locale: Locale, page: PageKey = "home") => `/${locale}/${page === "home" ? "" : `${page}/`}`;
export const sectionFor = (locale: Locale, page: PageKey = "home") => `/${locale}/#${page}`;
