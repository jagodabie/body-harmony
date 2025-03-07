export type Nullable<T> = T | null | undefined;

export type ArrayOrEmpty<T> = T[] | [];

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

export interface TableRow {
  id: number;
  favorite: boolean;
  formName: string;
}
