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
    <CallToAction />
    <FAQs />
    <BottomBanner />
  </div>
</template>

<style scoped></style>
