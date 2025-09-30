<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const githubRepository: string =
  "https://github.com/angelchavez19/camino-a-senior";

const year = new Date().getFullYear();

const items = computed<NavigationMenuItem[]>(() => [
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

defineShortcuts({
  ".": () => {
    window.open(githubRepository, "_blank");
  },
});

useSeoMeta({
  title: "Camino a Senior",
});
</script>

<template>
  <UHeader mode="drawer">
    <template #title>
      <h1>Camino a Senior</h1>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['.']">
        <UButton
          color="neutral"
          variant="ghost"
          :to="githubRepository"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>

  <UMain>
    <slot></slot>
  </UMain>

  <footer class="border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
    <UContainer
      class="flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <UText size="sm" class="text-gray-500 dark:text-gray-400">
        © {{ year }} Camino a Senior.
      </UText>

      <UButton
        variant="ghost"
        size="sm"
        icon="i-simple-icons-github"
        to="https://github.com/your-org/your-repo"
        target="_blank"
      >
        Contribute on GitHub
      </UButton>
    </UContainer>
  </footer>
</template>
