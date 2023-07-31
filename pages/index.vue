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
  </div>
</template>

<style scoped></style>
