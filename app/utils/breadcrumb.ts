import type { LocaleT } from "~/types";
import type { SlugT } from "~/types/slug";

interface Item {
  label: string;
  icon?: string;
  to: string;
}

const capitalize = (value: string) =>
  value.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

export const getBreadcrumbItems = (
  slugParam: SlugT,
  locale: LocaleT
): Item[] | undefined => {
  const pre = locale === "en" ? "/articles" : `/${locale}/articles`;

  if (!slugParam) return;

  const slug = Array.isArray(slugParam) ? slugParam : slugParam.split("/");

  return [
    {
      label: "Articles",
      to: pre,
    },
    ...slug.map((it, idx) => {
      const to = `${pre}/${slug.slice(0, idx + 1).join("/")}`;

      return {
        label: capitalize(it),
        to,
      };
    }),
  ];
};
