<script setup lang="ts">
  definePageMeta({
    layout: false,
    middleware: ["message"],
  });
</script>

<template>
  <main
    class="h-screen basis-3/4 border-l-[0.5px] border-neutral-gallery flex items-center justify-center"
  >
    <p class="text-neutral-dusty-gray">
      Start a new conversation or select an existing one to continue
    </p>
  </main>
</template>

<style scoped></style>
