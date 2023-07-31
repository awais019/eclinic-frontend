<script lang="ts" setup></script>

<template>
  <div class="app-container mt-24 mb-24">
    <div
      class="tablet:flex tablet:gap-24 tablet:items-center tablet:justify-center"
    >
      <div>
        <h3 class="text-h2-b">
          Instantly Check
          <span class="text-primary-blue-ribbon">Doctor Availability</span> &
          Get 24/7 Support
        </h3>
        <p class="my-6 text-neutral-dusty-gray">
          By checking a doctor's availability online before booking an
          appointment, you can save valuable time and effort.
        </p>
        <ul class="text-sm font-semibold flex flex-col gap-7">
          <li class="flex items-center gap-3">
            <IconsCheckmark /> <span>24 hours medical service</span>
          </li>
          <li class="flex items-center gap-3">
            <IconsCheckmark /> <span>Best quality appointment services</span>
          </li>
          <li class="flex items-center gap-3">
            <IconsCheckmark /> <span>Reception at convenient time</span>
          </li>
          <li class="flex items-center gap-3">
            <IconsCheckmark /> <span>Online booking made easy</span>
          </li>
        </ul>
        <button
          class="mt-12 mb-7 bg-primary-blue-ribbon px-6 py-3 text-white text-base-sb rounded-lg"
        >
          Explore more <IconsArrow />
        </button>
      </div>
      <img src="~/assets/images/feature_image_1.svg" alt="Feature image 1" />
    </div>
    <div
      class="mt-24 tablet:flex tablet:flex-row-reverse tablet:gap-24 tablet:items-center tablet:justify-center"
    >
      <div>
        <h3 class="text-h2-b">
          Virtual
          <span class="text-primary-blue-ribbon">Consultations</span> & Get 24/7
          with your doctor
        </h3>
        <p class="my-6 text-neutral-dusty-gray">
          Schedule your virtual consultation today and experience the
          convenience of receiving medical care from the comfort of your own
          home.
        </p>
        <ul class="text-sm font-semibold flex flex-col gap-7">
          <li class="flex items-center gap-3">
            <IconsCheckmark /> <span>Reduced exposure to illness</span>
          </li>
          <li class="flex items-center gap-3">
            <IconsCheckmark /> <span>Improved continuity of care</span>
          </li>
        </ul>
        <button
          class="mt-12 mb-7 bg-primary-blue-ribbon px-6 py-3 text-white text-base-sb rounded-lg"
        >
          Book Consultation
        </button>
      </div>
      <img src="~/assets/images/feature_image_2.svg" alt="Feature image 2" />
    </div>
  </div>
</template>

<style scoped></style>
