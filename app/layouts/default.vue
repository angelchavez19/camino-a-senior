<script setup lang="ts">
import type { Locale, NavigationMenuItem, SelectItem } from "@nuxt/ui";

const githubRepository: string =
  "https://github.com/angelchavez19/camino-a-senior";

const year = new Date().getFullYear();

const { locale, setLocale, t } = useI18n();

const locales: SelectItem[] = [
  { label: "English", value: "en" },
  { label: "Español", value: "es" },
];

const items: NavigationMenuItem[] = [
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
      <USelect
        v-model="locale"
        :items="locales"
        icon="i-heroicons-language"
        @update:model-value="setLocale(($event as 'en' | 'es') || 'en')"
        class="hidden sm:flex"
      />

      <UColorModeButton />

      <UTooltip :text="$t('layouts.default.header.github')" :kbds="['.']">
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

      <USelect
        v-model="locale"
        :items="locales"
        icon="i-heroicons-language"
        @update:model-value="setLocale(($event as 'en' | 'es') || 'en')"
        class="mt-4 w-full"
      />
    </template>
  </UHeader>

  <UMain>
    <slot></slot>
  </UMain>

  <footer class="border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
    <UContainer
      class="flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <p class="text-gray-500 dark:text-gray-400">
        © {{ year }} Camino a Senior.
      </p>

      <UButton
        variant="ghost"
        size="sm"
        icon="i-simple-icons-github"
        to="https://github.com/your-org/your-repo"
        target="_blank"
      >
        {{ $t("layouts.default.footer.contribute") }}
      </UButton>
    </UContainer>
  </footer>
</template>
