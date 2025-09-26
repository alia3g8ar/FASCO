export interface NavItem {
  name: string;
  path: string;
}

export const navMenu: NavItem[] = [
  { name: "خانه", path: "/" },
  { name: "فروشگاه", path: "/deals" },
  { name: "درباره ما", path: "/new-arrivals" },
  { name: "وبلاگ", path: "/packages" },
];
