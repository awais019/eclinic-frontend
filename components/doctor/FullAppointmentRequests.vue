<script setup lang="ts">
  import { useToast } from "vue-toastification";
  import { Appointment } from "~/types/APIResponse";

  const { appointmentRequests, acceptAppointment, rejectAppointment } =
    useAppointment();
  const toast = useToast();

  const appointments = ref<Appointment[] | undefined>([]);
  const { data } = await appointmentRequests();
  appointments.value = data.value?.data;

  async function handleAppointmentAccept(appointmentId: string) {
    const { error } = await acceptAppointment(appointmentId);
    if (error.value) {
      toast.error(error.value.data);
    } else {
      toast.success("Appointment Accepted");
      appointments.value = appointments.value?.filter(
        (appointment) => appointment.id != appointmentId
      );
    }
  }

  async function handleAppointmentReject(appointmentId: string) {
    const { error } = await rejectAppointment(appointmentId);
    if (error.value) {
      toast.error(error.value.data);
    } else {
      toast.success("Appointment Rejected");
      appointments.value = appointments.value?.filter(
        (appointment) => appointment.id != appointmentId
      );
    }
  }
</script>

<template>
  <section class="py-10 flex flex-col gap-10">
    <h3 class="text-h4-sb">Appointment Requests</h3>
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
            <th class="py-6 pr-6 pl-2 whitespace-nowrap">Action</th>
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
              {{ shrinkText(appointment.message as string, 10) }}
            </td>
            <td class="py-6 pr-6 pl-2 text-sm flex whitespace-nowrap">
              <button
                class="bg-green-haze bg-opacity-5 px-4 py-2 rounded-full flex gap-1 items-center text-green-haze font-semibold"
                @click="handleAppointmentAccept(appointment.id)"
              >
                Accept <IconsAccept />
              </button>
              <button
                class="bg-torch-red bg-opacity-5 px-4 py-2 rounded-full flex gap-1 items-center text-torch-red font-semibold"
                @click="handleAppointmentReject(appointment.id)"
              >
                Reject <IconsReject />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped></style>
