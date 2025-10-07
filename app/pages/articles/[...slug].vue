<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";
import { format } from "date-fns";
import { enUS, es } from "date-fns/locale";

const route = useRoute();
const { locale } = useI18n();
const home = ref<ContentCollectionItem | null>();

const date = computed(() => {
  if (!home.value) return undefined;

  if (locale.value === "es")
    return format(home.value.date, "dd 'de' MMMM, yyyy", { locale: es });

  return format(home.value.date, "MMM dd, yyyy", { locale: enUS });
});

onMounted(async () => {
  const slugParam = route.params.slug;

  const slug = Array.isArray(slugParam) ? slugParam.join("/") : slugParam;

  if (!slug) {
    useSeoMeta({
      title: "Not Found Page",
      description: "Some description",
    });
    return;
  }

  home.value = await queryCollection("content")
    .path(`/${locale.value}/${slug}`)
    .first();

  if (home.value === null) {
    useSeoMeta({
      title: "Not Found Page",
      description: "Some description",
    });
    return;
  }

  useSeoMeta({
    title: home.value.title,
    description: home.value.description,
  });
});
</script>

<template>
  <UPage v-if="home" class="w-full max-w-[1400px]">
    <UPageHeader :title="home.title" :headline="date" />

    <UPageBody>
      <ContentRenderer :value="home.body" />
    </UPageBody>
  </UPage>

  <PageNotFound v-else-if="home === null" />
</template>
