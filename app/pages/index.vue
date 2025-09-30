<script setup lang="ts">
import type { ButtonProps } from "#ui/types";
const { t } = useI18n();

const links: ButtonProps[] = [
  {
    label: t("navigation.articles"),
    to: "/articles",
    icon: "i-lucide-file-text",
  },
  {
    label: t("navigation.categories"),
    to: "/categories",
    icon: "i-lucide-folder",
  },
  {
    label: t("navigation.reading-lists"),
    to: "/reading-lists",
    icon: "i-lucide-bookmark",
  },
];
</script>

<template>
  <UPageHero
    title="Camino a Senior"
    :description="$t('pages.index.hero.description')"
    :links="links"
  />
</template>
