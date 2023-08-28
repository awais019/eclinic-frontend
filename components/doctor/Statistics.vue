<script setup lang="ts"></script>

<template>
  <div class="text-sm text-neutral-dusty-gray font-medium flex gap-8">
    <div class="p-6 bg-white basis-1/3 rounded-2xl flex flex-col gap-4">
      <div>
        <h5>Total Patients</h5>
        <span class="text-h4-b text-neutral-mine-shaft">1500</span>
      </div>
      <IconsPersons class="self-center" />
    </div>
    <div class="p-6 bg-white basis-1/3 rounded-2xl flex flex-col gap-4">
      <div>
        <h5>Appointments</h5>
        <span class="text-h4-b text-neutral-mine-shaft">8500</span>
      </div>
      <IconsCalendar class="self-center text-primary-blue-ribbon" />
    </div>
    <div class="p-6 bg-white basis-1/3 rounded-2xl flex flex-col gap-4">
      <div>
        <h5>Income</h5>
        <span class="text-h4-b text-neutral-mine-shaft">30,000</span>
      </div>
      <IconsDollar class="self-center" />
    </div>
  </div>
</template>

<style scoped></style>
