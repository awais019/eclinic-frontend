<script lang="ts" setup>
  definePageMeta({
    middleware: "dashboard",
  });
</script>

<template>
  <div class="app-container">
    <DashboardProfileSection />
    <DoctorDashboard />
  </div>
</template>

<style scoped></style>
