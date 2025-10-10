<script setup lang="ts">
import type { ContentCollectionItem } from "@nuxt/content";

const route = useRoute();
const { locale } = useI18n();
const post = ref<ContentCollectionItem | null>();

const loadPost = async () => {
  const slugParam = route.params.slug;
  const result = await getOnePostBySlug(slugParam, locale.value);

  if (!result) {
    useSeoMeta({
      title: "Not Found Page",
      description: "Some description",
    });
    post.value = null;
    return;
  }

  post.value = result;

  useSeoMeta({
    title: post.value.title,
    description: post.value.description,
  });
};

onMounted(loadPost);

// 🔁 Re-fetch al cambiar el idioma
watch(locale, loadPost);

const breadcrumb = computed(() => {
  return getBreadcrumbItems(route.params.slug, locale.value);
});

const date = computed(() => {
  if (!post.value) return undefined;
  return formatDate(post.value.date, locale.value);
});
</script>

<template>
  <UPage v-if="post" class="w-full max-w-[1400px] py-8">
    <UBreadcrumb :items="breadcrumb" />

    <UPageHeader :title="post.title" :headline="date" />

    <UPageBody>
      <ContentRenderer
        :value="post.body"
        class="prose dark:prose-invert max-w-none"
      />
    </UPageBody>
  </UPage>

  <PageNotFound v-else-if="post === null" />
</template>
