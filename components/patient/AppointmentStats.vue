<template>
  <section class="flex flex-col gap-12">
    <div class="text-center flex flex-col gap-6">
      <h2 class="text-h2-b">Booking Details</h2>
      <p class="text-neutral-dusty-gray max-w-[60ch] m-auto">
        Review your upcoming appointments at a glance. View the doctor's name,
        appointment date, time, and location for easy planning
      </p>
    </div>
    <div class="flex flex-wrap gap-4 justify-around">
      <div
        class="bg-white shadow-variant3 py-12 px-6 flex flex-col items-center gap-9 tablet:flex-row rounded-2xl"
      >
        <IconsCalendar2 />
        <div>
          <h3 class="text-h3-sb">24+</h3>
          <p class="text-sm font-medium w-[20ch]">Total Bookings</p>
        </div>
      </div>
      <div
        class="bg-white shadow-variant3 py-12 px-6 flex flex-col items-center gap-9 tablet:flex-row rounded-2xl"
      >
        <IconsCalendarGreen />
        <div>
          <h3 class="text-h3-sb">256+</h3>
          <p class="text-sm font-medium w-[20ch]">Completed</p>
        </div>
      </div>
      <div
        class="bg-white shadow-variant3 py-12 px-6 flex flex-col items-center gap-9 tablet:flex-row rounded-2xl"
      >
        <IconsDollar />
        <div>
          <h3 class="text-h3-sb">$160</h3>
          <p class="text-sm font-medium w-[20ch]">Paid Amount</p>
        </div>
      </div>
      <div
        class="bg-white shadow-variant3 py-12 px-6 flex flex-col items-center gap-9 tablet:flex-row rounded-2xl"
      >
        <IconsCalendarRed />
        <div>
          <h3 class="text-h3-sb">100+</h3>
          <p class="text-sm font-medium w-[20ch]">Canceled</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
