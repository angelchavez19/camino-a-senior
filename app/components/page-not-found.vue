<script setup lang="ts">
import type { ButtonProps } from "#ui/types";
const { locale, t } = useI18n();
const localePath = useLocalePath();

const links = computed<ButtonProps[]>(() => {
  void locale.value;

  return [
    {
      label: t("navigation.articles"),
      to: localePath("/articles"),
      icon: "i-lucide-file-text",
    },
    {
      label: t("navigation.categories"),
      to: localePath("/categories"),
      icon: "i-lucide-folder",
    },
    {
      label: t("navigation.reading-lists"),
      to: localePath("/reading-lists"),
      icon: "i-lucide-bookmark",
    },
  ];
});
</script>

<template>
  <UPageHero
    :title="$t('pages.page-not-found.title')"
    :headline="$t('pages.page-not-found.code')"
    :links="links"
  />
</template>
