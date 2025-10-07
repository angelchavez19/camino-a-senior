<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";

const route = useRoute();
const home = ref<ContentCollectionItem | null | undefined>();

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

  home.value = await queryCollection("content").path(`/${slug}`).first();

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
  <ContentRenderer v-if="home" :value="home" />
  <PageNotFound v-else />
</template>
