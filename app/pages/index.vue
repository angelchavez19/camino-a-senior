<script setup lang="ts">
import type { ButtonProps } from "#ui/types";

const links = ref<ButtonProps[]>([
  {
    label: "Articles",
    to: "/articles",
    icon: "i-lucide-file-text",
  },
  {
    label: "Categories",
    to: "/categories",
    icon: "i-lucide-folder",
  },
  {
    label: "Reading Lists",
    to: "/reading-lists",
    icon: "i-lucide-bookmark",
  },
]);
</script>

<template>
  <UPageHero
    title="Camino a Senior"
    description="Guides, tips, and tutorials to improve your programming skills and grow as a developer."
    :links="links"
  />
</template>
