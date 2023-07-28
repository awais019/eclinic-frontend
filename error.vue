<script setup lang="ts">
  defineProps<{
    error: any;
  }>();
  function handleClearError() {
    clearError({ redirect: "/" });
  }
</script>

<template>
  <div v-if="error.statusCode == 404">
    <Animations404 :height="600" :width="600" :loop="true" :auto-play="true" />
    <h1 class="text-display-b text-primary-blue-ribbon text-center">
      {{ error.statusMessage }}
    </h1>
    <div class="my-8">
      <button
        @click="handleClearError"
        class="block m-auto text-base-sb bg-primary-blue-ribbon text-white px-6 py-3 rounded-lg"
      >
        Go back to home
      </button>
    </div>
  </div>
</template>

<style scoped></style>
