<script lang="ts" setup>
  definePageMeta({
    layout: false,
    middleware: "dashboard",
  });
</script>

<template>
  <div>
    <div class="max-w-[1920px] h-screen w-screen bg-neutral-wild-sand flex">
      <DoctorDashboardSideBar />
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped></style>
