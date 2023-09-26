<script setup lang="ts">
  const { appointmentId } = useRoute().query;
  const { updatePayment } = useAppointment();

  const appointment = ref<{
    doctor: string;
    date: string;
    time: string;
    type: string;
  } | null>(null);

  const { data, error } = await updatePayment(appointmentId as string);
  if (data.value) {
    appointment.value = data.value.data;
  }
</script>

<template>
  <PageTitle title="Appointment Booked" />
  <section class="app-container text-center max-w-[80ch]">
    <div v-if="appointment">
      <AnimationsCheck
        :height="96"
        :width="96"
        :loop="false"
        :auto-play="true"
      />
      <h3
        class="text-h3-b max-w-fit mb-6 mx-auto relative after:absolute after:bg-primary-blue-ribbon after:h-0.5 after:content-[''] after:bottom-0 after:left-0 after:right-1/4"
      >
        Appointment Booked Successfully!
      </h3>
      <p
        v-if="appointment.type.toLowerCase() === 'physical'"
        class="text-neutral-dusty-gray"
      >
        Your appointment with
        <span class="text-primary-blue-ribbon"
          >Dr .{{ appointment.doctor }}</span
        >
        on
        <span class="text-primary-blue-ribbon">{{
          formatDate(appointment.date)
        }}</span>
        at
        <span class="text-primary-blue-ribbon">{{ appointment.time }}</span>
        has been confirmed. Doctor will review and accept your request shorly.
        Please reach the clinic/hospital at the given time. You might have to
        wait for 10 minutes after the appointment time starts.
      </p>
      <p
        v-else-if="appointment.type.toLowerCase() === 'virtual'"
        class="text-neutral-dusty-gray"
      >
        Your online appointment with
        <span class="text-primary-blue-ribbon"
          >Dr .{{ appointment.doctor }}</span
        >
        on
        <span class="text-primary-blue-ribbon">{{
          formatDate(appointment.date)
        }}</span>
        at
        <span class="text-primary-blue-ribbon">{{ appointment.time }}</span>
        has been confirmed. Doctor will review and accept your request shorly.
        You will receive a link to join the video call 10 minutes before or
        after the appointment time starts.
      </p>
    </div>
    <p v-if="error" class="text-error app-container text-center">
      Appointment is already booked! or Something went wrong!
    </p>
    <div
      class="mt-6 bg-primary-blue-ribbon px-6 py-4 rounded-lg text-base-sb text-white inline-block"
    >
      <NuxtLink to="/"> Return to Home </NuxtLink>
    </div>
  </section>
</template>

<style scoped></style>
