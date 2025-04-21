<script setup lang="ts">
  import animation from "../../assets/animations/loader.json";
  import { Vue3Lottie } from "vue3-lottie";
</script>

<template>
  <ClientOnly>
    <Vue3Lottie
      :animation-data="animation"
      :height="200"
      :width="200"
      :loop="true"
      :auto-play="true"
    />
  </ClientOnly>
</template>

<style scoped></style>
