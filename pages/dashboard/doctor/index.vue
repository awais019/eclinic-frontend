<script lang="ts" setup>
  import { storeToRefs } from "pinia";
  import useUserStore from "~/stores/userStore";

  definePageMeta({
    layout: false,
    middleware: "dashboard",
  });

  const userStore = useUserStore();

  const { first_name } = storeToRefs(userStore);
</script>

<template>
  <div class="basis-3/4">
    <DoctorDashboardHeader
      title="Dashboard"
      :subtitle="`Welcome Back Dr. ${first_name}`"
    />
    <section class="py-8 px-16 2xl:px-36">
      <DoctorStatistics />
    </section>
  </div>
</template>

<style scoped></style>
