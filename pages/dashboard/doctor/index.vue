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
  <div class="basis-3/4 relative z-0">
    <DoctorDashboardHeader
      title="Dashboard"
      :subtitle="`Welcome Back Dr. ${first_name}`"
    />
    <section
      class="py-8 px-16 absolute inset-x-0 bottom-0 top-16 overflow-y-scroll 2xl:px-36"
    >
      <div class="pt-12 pb-20 flex">
        <ProfileImage />
      </div>
      <section class="flex flex-col gap-12">
        <DoctorStatistics />
        <div class="flex">
          <DoctorUpcomingAppointments />
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped></style>
