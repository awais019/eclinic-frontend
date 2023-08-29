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
    <div class="bg-white p-6 rounded-2xl border border-neutral-gallery">
      <div
        class="grid grid-cols-5 border-b border-neutral-gallery font-bold pb-6"
      >
        <h4>Name</h4>
        <h4>Date & Time</h4>
        <h4>Type</h4>
        <h4>Message</h4>
        <h4>Action</h4>
      </div>
      <div class="grid grid-cols-5 items-center">
        <div>
          <div
            v-for="appointment in appointments"
            :key="appointment.id"
            class="py-6 flex gap-4 items-center"
          >
            <div class="h-11 w-11 bg-gradient rounded-[4px] relative">
              <img
                :src="appointment.image"
                :alt="appointment.patient_name"
                class="w-11 h-11 rounded-[4px] absolute right-1 top-0.5"
              />
            </div>
            <span class="font-semibold">{{ appointment.patient_name }}</span>
          </div>
        </div>
        <div>
          <div
            v-for="appointment in appointments"
            :key="appointment.id"
            class="py-6"
          >
            <p class="text-neutral-dusty-gray">
              {{ formatDate(appointment.date) }} {{ appointment.time }}
            </p>
          </div>
        </div>
        <div>
          <div
            v-for="appointment in appointments"
            :key="appointment.id"
            class="py-6"
          >
            <p class="text-primary-blue-ribbon font-medium">
              {{ appointment.type }}
            </p>
          </div>
        </div>
        <div>
          <div
            v-for="appointment in appointments"
            :key="appointment.id"
            class="py-6"
          >
            <p class="text-neutral-dusty-gray h-full">
              {{ shrinkText(appointment.message as string, 10) }}
            </p>
          </div>
        </div>
        <div class="text-sm flex flex-wrap gap-2">
          <button
            class="bg-green-haze bg-opacity-5 px-4 py-2 rounded-full flex gap-2 items-center text-green-haze font-semibold"
          >
            Accept <IconsAccept />
          </button>
          <button
            class="bg-torch-red bg-opacity-5 px-4 py-2 rounded-full flex gap-2 items-center text-torch-red font-semibold"
          >
            Reject <IconsReject />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
