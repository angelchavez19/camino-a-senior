import type { ContentCollectionItem } from "@nuxt/content";
import type { LocaleT } from "~/types";
import type { SlugT } from "~/types/slug";

export const getOnePostBySlug = async (
  slugParam: SlugT,
  locale: LocaleT
): Promise<ContentCollectionItem | undefined> => {
  const slug = Array.isArray(slugParam) ? slugParam.join("/") : slugParam;

  if (!slug) return;

  const post = await queryCollection("content")
    .path(`/${locale}/${slug}`)
    .first();

  if (post === null) return;

  return post;
};

export const getAllInfoPosts = (locale: LocaleT) => {
  return queryCollection("content")
    .where("locale", "=", locale)
    .where("draft", "=", false)
    .select("id", "title", "date", "description", "path", "image")
    .order("date", "DESC")
    .all();
};
