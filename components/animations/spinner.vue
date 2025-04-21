<script setup lang="ts">
  import animation from "../../assets/animations/spinner.json";
  import { Vue3Lottie } from "vue3-lottie";
</script>

<template>
  <ClientOnly>
    <Vue3Lottie
      :animation-data="animation"
      :height="60"
      :width="60"
      :loop="true"
      :auto-play="true"
  /></ClientOnly>
</template>

<style scoped></style>
