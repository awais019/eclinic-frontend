<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
  useHead({
    titleTemplate: (titleChunk) =>
      titleChunk ? `${titleChunk} | Eclinic` : "Eclinic",
  });
</script>
