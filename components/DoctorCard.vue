<script lang="ts" setup>
  import { Doctor } from "~/types/APIResponse";

  defineProps<{
    doctor: Doctor;
  }>();
</script>

<template>
  <NuxtLink :to="`/doctors/${doctor.id}`" class="group">
    <div class="rounded-2xl shadow-variant9">
      <div class="w-[328px] h-[200px] aspect-w-8 aspect-h-5 tablet:w-[352px]">
        <img
          class="rounded-t-2xl object-cover w-full h-full"
          :src="doctor.image"
          :alt="doctor.first_name + ' ' + doctor.last_name"
        />
      </div>
      <div class="p-6 flex flex-col gap-[6px]">
        <div class="flex items-center gap-1">
          <h3 class="text-h5-b">
            Dr. {{ doctor.first_name }} {{ doctor.last_name }}
          </h3>
          <span class="rounded-full w-4 h-4 bg-green-haze"> </span>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-primary-blue-ribbon">
            {{ doctor.specialization }}
          </p>
          <div class="flex gap-[2px] items-center text-sm font-medium">
            <IconsFillstar v-for="rating in Math.round(doctor.rating)" />
            <IconsStar v-for="rating in 5 - Math.round(doctor.rating)" />
            <span>( {{ doctor.reviewsCount }} )</span>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium">Working Hours</p>
          <div class="text-sm font-medium text-neutral-dusty-gray">
            <span>{{ doctor.workingHours.startTime }}</span>
            <span>-</span>
            <span>{{ doctor.workingHours.endTime }}</span>
          </div>
        </div>
        <div class="text-neutral-dusty-gray">
          <p>{{ doctor.hospital_clinic_name }}, {{ doctor.address }}</p>
          <p>{{ doctor.city }} {{ doctor.state }}</p>
        </div>
        <nuxt-link
          :to="`/doctors/${doctor.id}`"
          class="px-6 py-3 text-primary-blue-ribbon font-medium border-primary-blue-ribbon border rounded-md max-w-fit group-hover:text-white group-hover:bg-primary-blue-ribbon"
        >
          View Profile
        </nuxt-link>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
