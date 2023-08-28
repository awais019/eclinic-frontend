<script setup lang="ts">
  const { upcomingAppointments } = useAppointment();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const { data } = await upcomingAppointments(tomorrow);
</script>

<template>
  <div class="px-6 py-4 bg-white rounded-2xl">
    <h2 class="font-semibold">Today's Appointments</h2>
    <div v-if="data && data.data.length" class="py-6">
      <div
        v-for="(appointment, index) in data.data"
        class="border-l border-neutral-gallery relative before:absolute before:-left-2 before:-top-1.5 before:w-4 before-h-4"
        :class="[
          index == 0
            ? 'before:content-[url(~/assets/images/ellipse-blue.svg)]'
            : 'before:content-[url(~/assets/images/ellipse-gray.svg)]',
        ]"
      >
        <span class="text-sm text-neutral-dusty-gray ml-2 absolute">{{
          appointment.time
        }}</span>
        <div
          class="flex flex-col gap-4 ml-24 pt-4 pl-4 pb-4 pr-12 rounded-2xl shadow-variant11"
          :class="{
            'bg-primary-zumthor': index == 0,
            'mb-8': index != data.data.length - 1,
          }"
        >
          <span class="font-medium self-end"
            >Fee Paid: {{ appointment.charges }}</span
          >
          <div class="flex items-center gap-3">
            <img
              :src="appointment.image"
              :alt="appointment.patient_name"
              class="max-w-10 max-h-10 rounded-lg"
            />
            <div class="flex flex-col gap-3">
              <span class="font-semibold">{{ appointment.patient_name }}</span>
              <span class="text-neutral-dusty-gray text-sm">{{
                formatDate(appointment.date)
              }}</span>
              <span class="text-sm text-neutral-dusty-gray">{{
                appointment.time
              }}</span>
            </div>
            <IconsPeople
              class="text-primary-blue-ribbon"
              v-if="appointment.type == 'PHYSICAL'"
            />
            <IconsCall v-else />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-neutral-dusty-gray py-6">
      No Appointments Today.
    </div>
  </div>
</template>

<style scoped></style>
