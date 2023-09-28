<script setup lang="ts">
  const breadCrumbs = ref([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard/patient",
    },
    {
      name: "Payments",
      path: "/dashboard/patient/payments",
    },
  ]);
</script>

<template>
  <PageTitle title="Payments" :bread-crumbs="breadCrumbs" />
  <section class="app-container">payments</section>
</template>

<style scoped></style>
