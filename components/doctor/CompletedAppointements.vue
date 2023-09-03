<script setup lang="ts">
  import { Appointment } from "~/types/APIResponse";

  const { completedAppointments } = useAppointment();

  const appointments = ref<Appointment[] | undefined>([]);

  const { data } = await completedAppointments();

  appointments.value = data.value?.data;
</script>

<template>
  <section class="py-10 flex flex-col gap-10">
    <h3 class="text-h4-sb">Appointment History</h3>
    <div class="overflow-x-auto">
      <table
        class="w-full bg-white text-left border-collapse rounded-2xl border-hidden shadow-border relative isolate m-auto"
      >
        <thead>
          <tr>
            <th class="py-6 pl-6 pr-2 whitespace-nowrap">Name</th>
            <th class="py-6 px-2 whitespace-nowrap">Date & Time</th>
            <th class="py-6 px-2 whitespace-nowrap">Type</th>
            <th class="py-6 px-2 whitespace-nowrap">Amount</th>
          </tr>
        </thead>
        <div class="absolute h-[1px] left-6 right-6 bg-neutral-gallery"></div>
        <tbody>
          <tr v-for="appointment in appointments" :key="appointment.id">
            <td
              class="py-6 pl-6 pr-2 flex items-center gap-2 whitespace-nowrap"
            >
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
              {{ appointment.charges }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped></style>
