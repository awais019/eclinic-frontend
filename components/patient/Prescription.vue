<script setup lang="ts">
  import type { Prescription } from "~/types/APIResponse";
  defineProps<{
    prescription: Prescription;
  }>();
</script>

<template>
  <section class="py-12 flex flex-col gap-8">
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-6 tablet:flex-row">
        <p class="flex flex-col gap-6">
          <span class="text-h4-sb">Appointment Type</span>
          <span class="text-neutral-dusty-gray">{{
            prescription.appointment.type
          }}</span>
        </p>
        <p class="flex flex-col gap-6 tablet:mx-auto">
          <span class="text-h4-sb">Date</span>
          <span class="text-neutral-dusty-gray">{{
            formatDate(prescription.appointment.date)
          }}</span>
        </p>
      </div>
      <div class="max-w-[146px] max-h-[146px] aspect-1 bg-gradient rounded-2xl">
        <img
          :src="prescription.doctor.image"
          alt="Doctor Image"
          class="w-full h-full object-cover relative top-3 right-3 rounded-2xl"
        />
      </div>
      <h3 class="font-semibold">
        Dr. {{ prescription.doctor.first_name }}
        {{ prescription.doctor.last_name }}
      </h3>
    </div>
    <div class="flex flex-col gap-6">
      <h2 class="text-h4-sb">Medications</h2>
      <div class="flex flex-wrap gap-6 print:flex-col" id="print-area">
        <div class="hidden print:block">
          <img src="~/assets/images/logo.svg" alt="logo" />
          <h1 class="text-h3-b">
            Dr. {{ prescription.doctor.first_name }}
            {{ prescription.doctor.last_name }}
          </h1>
        </div>
        <div
          v-for="medication in prescription.medication"
          class="flex flex-col gap-3 tablet:mr-auto"
        >
          <p class="flex justify-between print:justify-normal print:gap-12">
            <span class="font-semibold text-primary-blue-ribbon">{{
              medication.medication
            }}</span>
            <span class="text-neutral-dusty-gray">{{ medication.dosage }}</span>
          </p>
          <p class="text-neutral-dusty-gray">
            {{ medication.instructions }}
          </p>
        </div>
      </div>
    </div>
    <button
      v-print="'#print-area'"
      class="bg-primary-blue-ribbon rounded-lg font-semibold px-6 py-3 text-white self-start"
    >
      Print
    </button>
  </section>
</template>

<style scoped></style>
