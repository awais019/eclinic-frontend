<script setup lang="ts">
  const { appointmentRequests } = useAppointment();

  const { data } = await appointmentRequests();
</script>

<template>
  <div class="bg-white rounded-2xl">
    <h2 class="px-6 py-4 font-semibold border-b border-neutral-gallery">
      Appoitment Requests
    </h2>
    <ul v-if="data">
      <li
        v-for="(appointment, index) in data.data"
        class="px-6 py-3 flex gap-4 items-center"
        :class="{
          'border-b border-neutral-gallery': index != data.data.length - 1,
        }"
      >
        <img
          :src="appointment.image"
          :alt="appointment.patient_name"
          class="w-12 h-12 rounded-lg"
        />
        <div>
          <p class="flex flex-col gap-2 text-sm">
            <span class="font-semibold">{{ appointment.patient_name }}</span>
            <span class="text-primary-blue-ribbon font-medium">{{
              shrinkText(appointment.message, 20)
            }}</span>
            <span class="text-neutral-dusty-gray">{{
              formatDate(appointment.date)
            }}</span>
          </p>
        </div>
      </li>
    </ul>
    <p class="text-neutral-dusty-gray px-6 py-4" v-else>No new requests.</p>
  </div>
</template>

<style lang="postcss" scoped>
  img {
    @apply m-0;
  }
</style>
