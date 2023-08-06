<script lang="ts" setup>
  const breadCrumbs = ref<{ name: string; path: string }[]>([
    { name: "Home", path: "/" },
    { name: "Find doctors", path: "/doctors" },
  ]);
</script>

<template>
  <PageTitle title="Find doctors" :bread-crumbs="breadCrumbs" />
  <div class="app-container"></div>
</template>

<style scoped></style>
