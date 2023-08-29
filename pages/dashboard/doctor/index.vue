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
  <div class="lg:basis-3/4 relative z-0">
    <DoctorDashboardHeader
      title="Dashboard"
      :subtitle="`Welcome Back Dr. ${first_name}`"
    />
    <section
      class="py-8 px-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-16 lg:overflow-y-scroll md:px-8 xl:px-16 2xl:px-36"
    >
      <div class="pt-8 sm:hidden">
        <h2 class="text-h3-b">Dashboard</h2>
        <span class="text-neutral-dusty-gray font-medium">
          Welcome Back Dr. {{ first_name }}
        </span>
      </div>
      <div class="pt-12 pb-20 flex">
        <ProfileImage />
      </div>
      <section class="flex flex-col gap-12">
        <DoctorStatistics />
        <div
          class="flex justify-between flex-col items-start gap-4 md:flex-row"
        >
          <DoctorUpcomingAppointments />
          <div class="flex flex-col gap-8">
            <DoctorLessReviews />
            <DoctorAppointmentRequests />
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped></style>
