<script setup lang="ts">
  import type { Appointment } from "~/types/APIResponse";

  const { upcomingPatientAppointments } = useAppointment();

  const appointments = ref<Appointment[]>([]);

  const { data } = await upcomingPatientAppointments(new Date());

  if (data.value && data.value.data) {
    appointments.value = data.value.data;
  }
</script>

<template>
  <div class="flex flex-col gap-24">
    <h1
      class="text-h3-b relative max-w-fit after:absolute after:bottom-0 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-['']"
    >
      Upcoming Appointments
    </h1>
    <section class="flex gap-8 tablet:gap-16">
      <PatientAppointment
        v-for="appointment in appointments"
        :key="appointment.id"
        :appointment="appointment"
      />
      <p
        v-if="appointments.length == 0"
        class="text-neutral-dusty-gray text-xl"
      >
        No upcoming appointments
      </p>
    </section>
  </div>
</template>

<style scoped></style>
