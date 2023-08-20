<script setup lang="ts">
  import { Doctor } from "~/types/APIResponse";

  const { id } = useRoute().params;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Find doctors", path: "/doctors" },
    { name: "Doctor Profile", path: `/doctors/${id}` },
  ];
  const doctor = ref<Doctor | null>(null);

  const { data, error } = await useDoctor().getDoctor(id as string);

  if (error.value?.statusCode === 404) {
    throw createError({ statusMessage: "Doctor not found", statusCode: 404 });
  } else if (data.value) {
    doctor.value = data.value.data;
  }
</script>

<template>
  <PageTitle title="Doctor Profile" :bread-crumbs="breadcrumbs" />
  <div class="app-container mb-12" v-if="doctor">
    <section
      class="flex flex-col gap-8 items-center sm:flex-row sm:gap-16 md:gap-24"
    >
      <div class="bg-gradient relative w-80 max-h-fit h-80 rounded-xl">
        <img
          class="rounded-xl absolute top-5 right-6"
          :src="doctor.image"
          :alt="doctor.first_name + ' ' + doctor.last_name"
        />
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-h3-b">
          Dr. {{ doctor.first_name }} {{ doctor.last_name }}
          <div class="bg-green-haze w-4 h-4 rounded-full inline-block"></div>
        </h3>
        <p class="text-base-md text-primary-blue-ribbon flex justify-between">
          {{ doctor.specialization }}
          <span class="flex gap-1 items-center">
            <IconsFillstar v-for="i in doctor.rating" />
            <IconsStar v-for="i in 5 - doctor.rating" />
            <span class="text-neutral-mine-shaft"
              >({{ doctor.reviewsCount }})</span
            >
          </span>
        </p>
        <p class="flex gap-3 flex-wrap text-neutral-mine-shaft text-base-md">
          <span class="text-neutral-dusty-gray">Availability:</span>
          <span>Monday-Friday:</span>
          <span
            >{{ doctor.workingHours.startTime }} -
            {{ doctor.workingHours.endTime }}
          </span>
        </p>
        <button
          class="bg-primary-blue-ribbon shadow-variant1 text-white text-base-sb py-3 rounded-lg"
        >
          Book Appointment
        </button>
      </div>
    </section>
    <section class="py-24">
      <h3 class="text-h3-b mb-12 max-w-fit">
        About Dr. {{ doctor.first_name }} {{ doctor.last_name }}
        <div class="bg-primary-blue-ribbon h-0.5 w-3/4"></div>
      </h3>
      <p class="text-neutral-dusty-gray">
        {{ doctor.about }}
      </p>
    </section>
  </div>
</template>

<style scoped></style>
