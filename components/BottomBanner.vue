<script lang="ts" setup></script>

<template>
  <div
    class="app-container py-24 px-4 tablet:px-12 bg-gradient_2 text-center text-white rounded-2xl relative tablet:grid tablet:grid-cols-2 tablet:gap-12 tablet:items-center tablet:text-left"
  >
    <div
      class="w-[112px] h-[112px] rounded-full bg-white mix-blend-color-dodge opacity-25 absolute -top-8 -left-5"
    ></div>
    <div>
      <h3 class="text-h2-b">Take Control Of Your Health!</h3>
      <p class="mt-6 mb-12">
        With our state-of-the-art facilities and compassionate staff, you can
        trust that you'll receive the highest level of care.
      </p>
    </div>
    <div class="flex flex-col gap-6 tablet:justify-self-end tablet:flex-row">
      <button
        class="bg-white text-primary-blue-ribbon px-6 py-3 rounded-lg max-h-fit"
      >
        Book Schedule <IconsArrow />
      </button>
      <button class="border-[1px] border-white rounded-lg px-6 py-3">
        Create an Account
      </button>
    </div>
    <div
      class="w-[112px] h-[112px] rounded-full bg-white mix-blend-color-dodge opacity-25 absolute -bottom-8 -right-5"
    ></div>
  </div>
</template>

<style scoped></style>
