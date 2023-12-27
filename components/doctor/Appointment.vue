<script setup lang="ts">
  import type { Appointment } from "~/types/APIResponse";

  defineEmits<{
    (e: "removeAppointment", id: string): void;
  }>();

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
    <td
      class="py-6 px-2 text-neutral-dusty-gray whitespace-nowrap"
      v-if="!appointment.completed"
    >
      {{ shrinkText(appointment.message as string, 10) }}
    </td>
    <td
      class="py-6 px-2 text-neutral-dusty-gray whitespace-nowrap"
      v-else="!appointment.completed"
    >
      {{ appointment.charges }}
    </td>
    <td
      class="py-6 pr-6 pl-2 text-sm flex whitespace-nowrap"
      v-if="isDateToday && !appointment.completed"
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
      <nuxt-link
        :to="`/messages/${appointment.userId}`"
        class="bg-primary-blue-ribbon bg-opacity-5 px-4 py-2 rounded-full flex gap-1 items-center text-primary-blue-ribbon font-semibold"
      >
        Message
      </nuxt-link>
    </td>
    <td
      class="py-6 pr-6 pl-2 text-sm flex whitespace-nowrap"
      v-else-if="appointment.completed"
    >
      <button
        class="bg-primary-blue-ribbon px-4 py-2 rounded-full flex gap-1 items-center text-white font-semibold"
        @click="controller.open"
      >
        Prescribe
      </button>
      <nuxt-link
        :to="`/messages/${appointment.userId}`"
        class="bg-primary-blue-ribbon bg-opacity-5 px-4 py-2 rounded-full flex gap-1 items-center text-primary-blue-ribbon font-semibold"
      >
        Message
      </nuxt-link>
    </td>
  </tr>
  <AppModal :controller="controller">
    <Prescription
      :appointment-id="appointment.id"
      @close="controller.close"
      @remove-appointment="$emit('removeAppointment', appointment.id)"
    />
  </AppModal>
</template>

<style scoped></style>
