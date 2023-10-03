<script setup lang="ts">
  import { useToast } from "vue-toastification";
  import { Appointment } from "~/types/APIResponse";

  const { upcomingPatientAppointments, cancelAppointment } = useAppointment();

  const appointments = ref<Appointment[]>([]);

  const { data } = await upcomingPatientAppointments();
  const toast = useToast();

  if (data.value && data.value.data) {
    appointments.value = data.value.data;
  }

  async function handleCancelAppointment(id: string) {
    const { error } = await cancelAppointment(id);
    if (error.value) {
      toast.error(error.value.data);
      return;
    }
    toast.success("Appointment cancelled successfully");
    appointments.value = appointments.value.filter(
      (appointment) => appointment.id !== id
    );
  }
</script>

<template>
  <div class="flex flex-col gap-4 tablet:gap-6 desktop:gap-8">
    <h1
      class="text-h3-b relative max-w-fit after:absolute after:bottom-0 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-['']"
    >
      Manage Appointments
    </h1>
    <table
      class="w-full bg-white text-left border-collapse rounded-2xl shadow-border relative m-auto"
    >
      <thead>
        <tr>
          <th class="py-6 pl-6 pr-2 whitespace-nowrap">Doctor</th>
          <th class="py-6 px-2 whitespace-nowrap">Date & Time</th>
          <th class="py-6 px-2 whitespace-nowrap">Type</th>
          <th class="py-6 px-2 whitespace-nowrap">Message</th>
          <th class="py-6 pr-6 pl-2 whitespace-nowrap">Action</th>
        </tr>
      </thead>
      <div class="absolute h-[1px] left-6 right-6 bg-neutral-gallery"></div>
      <tbody v-if="appointments">
        <tr v-for="appointment in appointments" :key="appointment.id">
          <td class="py-6 pl-6 pr-2 flex items-center gap-2 whitespace-nowrap">
            <!-- <div class="h-11 w-11 bg-gradient rounded-[4px] relative">
              <img
                :src="appointment.image"
                :alt="appointment.patient_name"
                class="w-11 h-11 rounded-[4px] absolute right-1 top-0.5"
              />
            </div> -->
            <span class="font-semibold"
              >{{ appointment.doctor?.first_name }}
              {{ appointment.doctor?.last_name }}</span
            >
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
          <td class="py-6 pr-6 pl-2 text-sm flex whitespace-nowrap">
            <button
              class="bg-torch-red bg-opacity-5 px-4 py-2 rounded-full flex gap-1 items-center text-torch-red font-semibold"
              @click="handleCancelAppointment(appointment.id)"
            >
              Cancel <IconsReject />
            </button>
            <nuxt-link
              :to="`/messages/${appointment.doctor?.userId}`"
              class="bg-primary-blue-ribbon bg-opacity-5 px-4 py-2 rounded-full flex gap-1 items-center text-primary-blue-ribbon font-semibold cursor-pointer"
            >
              Message
              <IconsMessageBlue class="w-6 h-6" />
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
