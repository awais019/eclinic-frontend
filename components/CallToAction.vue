<script lang="ts" setup></script>

<template>
  <div
    class="app-container py-24 tablet:flex tablet:gap-24 tablet:items-center tablet:justify-center"
  >
    <div class="mb-8">
      <h3 class="text-h2-b">
        Get
        <span class="text-primary-blue-ribbon">E-Clinic</span> App and Book
        Appointments with Ease!
      </h3>
      <p class="my-6 text-neutral-dusty-gray">
        The e-clinic app for doctor appointments is a convenient and efficient
        way to schedule and manage your healthcare needs You can easily schedule
        appointments View your medical records and much more...... Download the
        E-Clinic app today and experience hassle-free healthcare management.
      </p>
      <div class="flex flex-col gap-6 tablet:flex-row">
        <button
          class="bg-neutral-mine-shaft px-4 py-2 text-white text-xs font-medium rounded-lg tablet:px-6 tablet:py-3"
        >
          <IconsApple />
          Get it on
          <span class="text-base-sb">AppStore</span>
        </button>
        <button
          class="px-4 py-2 text-xs font-medium rounded-lg shadow-variant2 tablet:px-6 tablet:py-3"
        >
          <IconsPlaystore />
          Get it on
          <span class="text-base-sb">Playstore</span>
        </button>
      </div>
    </div>
    <img src="~/assets/images/call_to_action.svg" alt="Feature image 1" />
  </div>
</template>

<style scoped></style>
