<script setup lang="ts">
  definePageMeta({
    layout: false,
  });
</script>

<template>
  <section class="bg-white max-w-screen-3xl flex">
    <aside class="p-8 basis-1/4">
      <h1 class="text-h3-b text-primary-blue-ribbon mb-8">Messages</h1>
      <MessagesConversations />
    </aside>
    <NuxtPage />
  </section>
</template>

<style scoped></style>
