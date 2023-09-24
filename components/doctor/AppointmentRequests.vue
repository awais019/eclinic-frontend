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
  <div class="bg-white rounded-2xl">
    <h2 class="px-6 py-4 font-semibold border-b border-neutral-gallery">
      Appoitment Requests
    </h2>
    <ul v-if="appointments && appointments.length">
      <li
        v-for="(appointment, index) in appointments"
        class="px-6 py-3 flex gap-4 items-start flex-col md:flex-row md:items-center"
        :class="{
          'border-b border-neutral-gallery': index != appointments.length - 1,
        }"
      >
        <div class="max-w-[48px] max-h-[48px] aspect-1 mb-2">
          <img
            :src="appointment.image"
            :alt="appointment.patient_name"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        <p class="flex flex-col gap-2 text-sm">
          <span class="font-semibold">{{ appointment.patient_name }}</span>
          <span class="text-primary-blue-ribbon font-medium">{{
            shrinkText(appointment.message as string, 20)
          }}</span>
          <span class="text-neutral-dusty-gray">{{
            formatDate(appointment.date)
          }}</span>
        </p>
        <div class="flex gap-4 ml-auto z-20">
          <button @click="handleAppointmentAccept(appointment.id)">
            <IconsAccept />
          </button>
          <button @click="handleAppointmentReject(appointment.id)">
            <IconsReject />
          </button>
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
