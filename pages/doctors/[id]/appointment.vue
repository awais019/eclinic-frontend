<script setup lang="ts">
  import { Doctor } from "~/types/APIResponse";

  const { id } = useRoute().params;

  const breadCrumbs = ref([
    { name: "Home", path: "/" },
    { name: "Find doctors", path: "/doctors" },
    { name: "Doctor Profile", path: `/doctors/${id}` },
    { name: "Book Appointment", path: `/doctors/${id}/appointment` },
  ]);

  const { getDoctor } = useDoctor();
  const doctor = ref<Doctor | null>(null);
  const options = ref<
    {
      label: string;
      value: string;
      attrs?: { [key: string]: string | boolean };
    }[]
  >([]);

  const { data, error } = await getDoctor(id as string);

  if (error.value?.statusCode === 404) {
    throw createError({
      statusMessage: "Doctor not found",
      statusCode: 404,
    });
  } else if (data.value) {
    doctor.value = data.value.data;
    doctor.value.appointment_types_allowed.forEach((type, index) => {
      options.value.push({
        label: type,
        value: type,
        attrs: { checked: index == 0 ? true : false },
      });
    });
  }

  const currentDate = ref(new Date());
  currentDate.value.setDate(currentDate.value.getDate() + 1);
  const tomorrowDay = computed(() => {
    return currentDate.value.toLocaleString("en-us", { weekday: "long" });
  });
</script>

<template>
  <PageTitle :bread-crumbs="breadCrumbs" title="Book Appointment" />
  <div class="app-container" v-if="doctor">
    <section
      class="flex flex-col pt-12 pb-24 gap-8 items-center sm:flex-row sm:gap-16 md:gap-24 border-b border-neutral-gallery"
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
        <p class="text-base-md text-primary-blue-ribbon flex gap-8">
          {{ doctor.specialization }}
          <span class="flex gap-1 items-center">
            <IconsFillstar v-for="i in doctor.rating" />
            <IconsStar v-for="i in 5 - doctor.rating" />
            <span class="text-neutral-mine-shaft"
              >({{ doctor.reviewsCount }})</span
            >
          </span>
        </p>
        <p class="flex gap-3 flex-wrap text-base-md">
          <span class="text-neutral-dusty-gray">Appointment Types: </span>
          <span v-for="atype in doctor.appointment_types_allowed">
            {{ atype }}
          </span>
        </p>
      </div>
    </section>
    <section class="py-24">
      <h3
        class="text-h3-b max-w-fit mb-6 mx-auto relative after:absolute after:bg-primary-blue-ribbon after:h-0.5 after:content-[''] after:bottom-0 after:left-0 after:right-1/4"
      >
        Book an Appointment
      </h3>
      <p class="text-neutral-dusty-gray text-center mb-12">
        To book an appointment with Dr , please fill out the following fields
        below. The information you provide will help us to schedule your
        appointment and ensure that you receive the appropriate care.
      </p>
      <FormKit type="form" :actions="false">
        <div class="sm:flex sm:items-center sm:gap-24">
          <FormKit
            type="text"
            name="full_name"
            label="Patient Name"
            placeholder="Patient Full Name"
            validation="required"
            class="input"
          />
          <FormKit type="radio" label="Appointment Type" :options="options" />
        </div>
      </FormKit>
      <div class="flex flex-col gap-8 mt-6 md:flex-row">
        <div class="flex flex-col gap-3 basis-1/2">
          <span>Choose Date<span class="text-torch-red">*</span> </span>
          <DatePicker :doctor-id="(id as string)" />
        </div>
        <div class="flex flex-col gap-3 sm:basis-1/3">
          <span>Choose Time Slot<span class="text-torch-red">*</span> </span>
          <TimeSlots
            :doctor-id="(id as string)"
            :date="currentDate"
            :day="tomorrowDay"
          />
        </div>
      </div>
      <div class="mt-6 2xl:w-3/4">
        <FormKit
          type="textarea"
          name="message"
          label="Message"
          placeholder="Write details about symptoms patient is experiencing"
          validation="required"
          rows="10"
        />
      </div>
      <div class="md:max-w-fit">
        <FormKit
          type="submit"
          name="confirm appointment"
          label="Confirm Appointment"
        />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
