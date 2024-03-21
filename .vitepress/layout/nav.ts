import { DefaultTheme } from "vitepress";

const ruleNames = ["base", "react", "vue", "typescript"];

export const nav: DefaultTheme.NavItem[] = ruleNames.map((key) => ({
  text: key === "base" ? "javascript" : key,
  link: `/rules/${key}/`,
}));
