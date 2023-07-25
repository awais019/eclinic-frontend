<script setup lang="ts">
  import animation from "../../assets/animations/check.json";
  import { Vue3Lottie } from "vue3-lottie";

  defineProps<{
    height: number;
    width: number;
    loop: boolean;
    autoPlay: boolean;
  }>();
</script>

<template>
  <Vue3Lottie
    :animationData="animation"
    :height="height"
    :width="width"
    :loop="loop"
    :autoPlay="autoPlay"
  ></Vue3Lottie>
</template>
