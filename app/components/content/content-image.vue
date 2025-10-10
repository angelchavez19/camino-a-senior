<script setup lang="ts">
defineProps<{
  alt: string;
  src: string;
}>();
</script>

<template>
  <div class="flex w-full justify-center">
    <figure>
      <NuxtImg :src="src" :alt="alt" class="max-w-[600px]" />
      <figcaption>{{ alt }}</figcaption>
    </figure>
  </div>
</template>
