<script lang="ts" setup>
  defineProps<{
    title: string;
    breadCrumbs?: { name: string; path: string }[];
  }>();
</script>

<template>
  <div class="bg-pagetitle">
    <div class="app-container text-white py-24 mb-24">
      <h1 class="text-h2-b">Find doctors</h1>
      <div v-if="breadCrumbs" class="text-sm">
        <nuxt-link v-for="(breadCrumb, i) in breadCrumbs" :to="breadCrumb.path">
          {{ breadCrumb.name }}
          <span v-if="i < breadCrumbs.length - 1"> / &nbsp;</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
