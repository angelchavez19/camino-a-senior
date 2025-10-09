<script setup lang="ts">
const { locale } = useI18n();

const stripLocale = (path: string): string => {
  return path.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?\//, "/");
};

const { data } = await useAsyncData(
  "posts",
  () => getAllInfoPosts(locale.value),
  { watch: [locale] }
);
</script>

<template>
  <UPage class="w-full max-w-[1400px] py-8">
    <UBlogPosts>
      <UBlogPost
        v-for="post in data"
        :key="post.id"
        :title="post.title"
        :description="post.description"
        :date="post.date"
        :to="$localePath(`/articles${stripLocale(post.path)}`)"
        orientation="vertical"
        class="px-4 flex-1 w-full"
      />
    </UBlogPosts>
  </UPage>
</template>
