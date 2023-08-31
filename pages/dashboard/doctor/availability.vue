<script setup lang="ts"></script>

<template>
  <div class="lg:basis-3/4 relative z-0 w-screen">
    <DoctorDashboardHeader
      title="Availability"
      subtitle="Set up your schedule"
    />
    <section
      class="py-6 px-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-24 lg:overflow-y-scroll md:px-8 xl:px-16 2xl:px-36"
    >
      <div class="py-8 sm:hidden">
        <h2 class="text-h3-b">Availability</h2>
        <p class="text-neutral-dusty-gray font-medium">Set up your schedule</p>
      </div>
      <DoctorSchedule />
    </section>
  </div>
</template>

<style scoped></style>
