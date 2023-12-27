<script setup lang="ts">
  import type { Appointment } from "~/types/APIResponse";

  defineProps<{
    appointment: Appointment;
  }>();
</script>

<template>
  <div
    class="rounded-2xl shadow-variant2 divide-y divide-neutral-gallery p-6 bg-white min-w-[242px] basis-1/4"
  >
    <div class="pb-3">
      <h4 class="text-h4-b">{{ appointment.patient_name }}</h4>
      <p class="text-primary-blue-ribbon font-medium text-base">
        {{ appointment.doctor?.specialization }}
      </p>
      <p class="font-medium">Date: {{ formatDate(appointment.date) }}</p>
      <p class="font-medium">Time: {{ appointment.time }}</p>
    </div>
    <div class="pt-4 flex justify-between items-center">
      <div class="flex gap-3 items-center">
        <div class="max-w-[44px] max-h-[44px] aspect-1 bg-gradient rounded">
          <img
            :src="appointment.image"
            :alt="appointment.doctor?.first_name"
            class="relative right-1 top-1 rounded object-cover w-full h-full"
          />
        </div>
        <h4 class="font-medium">Dr. {{ appointment.doctor?.last_name }}</h4>
      </div>
      <div class="flex gap-3">
        <IconsPeople
          class="text-primary-blue-ribbon"
          v-if="appointment.type == 'PHYSICAL'"
        />
        <IconsCall v-else />
        <nuxt-link :to="`/messages/${appointment.doctor?.userId}`">
          <IconsMessageBlue />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
