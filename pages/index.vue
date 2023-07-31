<script lang="ts" setup>
  definePageMeta({
    middleware: ["verify-email"],
  });
</script>

<template>
  <div>
    <HeroSection />
    <SocialProof />
    <Features />
    <Categories />
  </div>
</template>

<style scoped></style>
