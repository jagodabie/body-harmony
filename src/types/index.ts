export interface Metadata {
  title: string;
  description: string;
}

export const Theme = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type NavItem = {
  label: string;
  href: string;
};
