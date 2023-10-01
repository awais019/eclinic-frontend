<script setup lang="ts">
  definePageMeta({
    layout: false,
    middleware: ["message"],
  });
</script>

<template>
  <main class="h-screen basis-3/4"></main>
</template>

<style scoped>
  main {
    background: linear-gradient(
        151deg,
        rgba(245, 245, 245, 0.35) -22.07%,
        rgba(255, 255, 255, 0.5) 81.96%
      ),
      #e7f0ff;
  }
</style>
