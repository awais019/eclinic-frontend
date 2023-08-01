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
    <Testimonials />
    <CallToAction />
    <FAQs />
    <BottomBanner />
  </div>
</template>

<style scoped></style>
