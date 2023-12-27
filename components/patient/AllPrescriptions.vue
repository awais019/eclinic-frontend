<script setup lang="ts">
  import type { Prescription } from "~/types/APIResponse";

  defineProps<{
    prescriptions: Prescription[];
  }>();

  const emits = defineEmits<{
    (e: "updateCurrentPrescription", presId: string): void;
  }>();

  function handleClick(presId: string) {
    emits("updateCurrentPrescription", presId);
  }
</script>

<template>
  <section class="py-2 overflow-x-auto">
    <h2
      class="text-h3-b relative max-w-fit after:absolute after:bottom-0 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-[''] mb-12"
    >
      All Prescriptions
    </h2>
    <table
      class="w-full bg-white text-left border-collapse rounded-2xl shadow-border relative m-auto"
    >
      <thead>
        <tr>
          <th class="py-6 pl-6 pr-2 whitespace-nowrap">Doctor</th>
          <th class="py-6 px-2 whitespace-nowrap">Date</th>
          <th class="py-6 px-2 whitespace-nowrap">Appointment Type</th>
          <th class="py-6 px-2 whitespace-nowrap">Medications</th>
          <th class="py-6 px-2 whitespace-nowrap">Actions</th>
        </tr>
      </thead>
      <div class="absolute h-[1px] left-6 right-6 bg-neutral-gallery"></div>
      <tbody>
        <tr v-for="prescription in prescriptions" :key="prescription.id">
          <td class="py-6 pl-6 pr-2 whitespace-nowrap">
            <span class="font-semibold"
              >{{ prescription.doctor.first_name }}
              {{ prescription.doctor.last_name }}</span
            >
          </td>
          <td class="py-6 px-2 text-neutral-dusty-gray whitespace-nowrap">
            {{ formatDate(prescription.appointment.date) }}
          </td>
          <td class="py-6 px-2 text-primary-blue-ribbon whitespace-nowrap">
            {{ prescription.appointment.type }}
          </td>
          <td class="py-6 px-2 text-primary-blue-ribbon whitespace-nowrap">
            {{ prescription.medication.length }}
          </td>
          <td class="py-6 px-2 text-neutral-dusty-gray whitespace-nowrap">
            <button
              class="bg-[#F8FBFF] px-6 py-3 text-primary-blue-ribbon"
              @click="handleClick(prescription.id)"
            >
              View full
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped></style>
