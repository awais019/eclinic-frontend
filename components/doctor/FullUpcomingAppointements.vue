<script setup lang="ts">
  import { Appointment } from "~/types/APIResponse";

  const { upcomingAppointments } = useAppointment();

  const appointments = ref<Appointment[] | undefined>([]);

  const { data } = await upcomingAppointments();

  appointments.value = data.value?.data;

  function isDateToday(date: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const appointmentDate = new Date(date);
    appointmentDate.setHours(0, 0, 0, 0);

    return today.getDate() === appointmentDate.getDate();
  }
</script>

<template>
  <section class="py-10 flex flex-col gap-10">
    <h3 class="text-h4-sb">Upcoming Appointments</h3>
    <div class="overflow-x-auto">
      <table
        class="w-full bg-white text-left border-collapse rounded-2xl border-hidden shadow-border relative isolate m-auto"
      >
        <thead>
          <tr>
            <th class="py-6 pl-6 pr-2 whitespace-nowrap">Name</th>
            <th class="py-6 px-2 whitespace-nowrap">Date & Time</th>
            <th class="py-6 px-2 whitespace-nowrap">Type</th>
            <th class="py-6 px-2 whitespace-nowrap">Message</th>
            <th class="py-6 px-2 whitespace-nowrap">Action</th>
          </tr>
        </thead>
        <div class="absolute h-[1px] left-6 right-6 bg-neutral-gallery"></div>
        <tbody>
          <DoctorUpcomingAppointment
            v-for="appointment in appointments"
            :key="appointment.id"
            :appointment="appointment"
          />
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped></style>
