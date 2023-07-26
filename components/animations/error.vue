<script setup lang="ts">
  import animation from "../../assets/animations/error.json";
  import { Vue3Lottie } from "vue3-lottie";
</script>

<template>
  <Vue3Lottie
    :animation-data="animation"
    :height="200"
    :width="200"
    :loop="true"
    :auto-play="true"
  />
</template>

<style scoped></style>
