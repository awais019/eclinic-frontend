<script lang="ts" setup>
  definePageMeta({
    middleware: ["verify-email"],
  });
</script>

<template>
  <div>
    <HeroSection />
  </div>
</template>

<style scoped></style>
