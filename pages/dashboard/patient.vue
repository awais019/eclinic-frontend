<script lang="ts" setup>
  definePageMeta({
    middleware: "dashboard",
  });
</script>

<template>
  <div class="app-container">
    <DashboardProfileSection />
    <PatientDashboard />
  </div>
</template>

<style scoped></style>
