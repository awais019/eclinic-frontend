<script setup lang="ts">
  import { Appointment } from "types/APIResponse";

  const props = defineProps<{
    appointment: Appointment;
  }>();

  const isDateToday = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const appointmentDate = new Date(props.appointment.date);
    appointmentDate.setHours(0, 0, 0, 0);

    return today.getDate() === appointmentDate.getDate();
  });

  const controller = useModal();
</script>

<template>
  <tr>
    <td class="py-6 pl-6 pr-2 flex items-center gap-2 whitespace-nowrap">
      <!-- <div class="h-11 w-11 bg-gradient rounded-[4px] relative">
              <img
              :src="appointment.image"
              :alt="appointment.patient_name"
              class="w-11 h-11 rounded-[4px] absolute right-1 top-0.5"
              />
            </div> -->
      <span class="font-semibold">{{ appointment.patient_name }}</span>
    </td>
    <td class="py-6 px-2 text-neutral-dusty-gray whitespace-nowrap">
      {{ formatDate(appointment.date) }} {{ appointment.time }}
    </td>
    <td class="py-6 px-2 text-primary-blue-ribbon whitespace-nowrap">
      {{ appointment.type }}
    </td>
    <td class="py-6 px-2 text-neutral-dusty-gray whitespace-nowrap">
      {{ shrinkText(appointment.message as string, 10) }}
    </td>
    <td
      class="py-6 pr-6 pl-2 text-sm flex whitespace-nowrap"
      v-if="isDateToday"
    >
      <button
        class="bg-green-haze bg-opacity-5 px-4 py-2 rounded-full flex gap-1 items-center text-green-haze font-semibold"
        @click="controller.open"
      >
        Done
      </button>
      <button
        class="bg-torch-red bg-opacity-5 px-4 py-2 rounded-full flex gap-1 items-center text-torch-red font-semibold"
      >
        Absent
      </button>
    </td>
  </tr>
  <AppModal :controller="controller">
    <Prescription @close="controller.close" />
  </AppModal>
</template>

<style scoped></style>
