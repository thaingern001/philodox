export type Locale = "en" | "th";
export type PageKey = "home" | "services" | "approach" | "ventures" | "about" | "contact";
export const locales: Locale[] = ["en", "th"];
export const pages: PageKey[] = ["home", "services", "approach", "ventures", "about", "contact"];
export const site = {
  name: "Philodox",
  tagline: "From Thought to Impact.",
  // Set NEXT_PUBLIC_SITE_URL to the verified production URL before deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  social: {} as Record<string, string>,
  founders: [
    { id: "founder-1", name: null, role: null, bio: null, image: null, links: {} },
    { id: "founder-2", name: null, role: null, bio: null, image: null, links: {} },
  ],
};

export const pathFor = (locale: Locale, page: PageKey = "home") => `/${locale}/${page === "home" ? "" : `${page}/`}`;
