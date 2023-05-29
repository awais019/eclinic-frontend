<script lang="ts" setup></script>

<template>
  <div class="hidden tablet:block">
    <img src="~/assets/images/options.svg" alt="Decorative image" />
  </div>
  <div class="signup-options">
    <h2 class="text-h2-sb">Create Free Account</h2>
    <p class="text-h5-reg">Choose an option below to continue</p>
    <div class="options">
      <p class="text-sm">
        I am registering as<span class="text-torch-red">*</span>
      </p>
      <div class="options-list">
        <nuxt-link to="/signup/patient">
          <button class="option">
            <icons-patient />
            <span>Patient</span>
          </button>
        </nuxt-link>
        <nuxt-link to="/signup/doctor">
          <button class="option">
            <icons-doctor />
            <span>Doctor</span>
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  img {
    @apply mx-auto;
  }
  .signup-options {
    @apply mobile:mt-36 tablet:max-w-[40%] mx-auto;
  }
  .options {
    @apply mt-8;
  }
  .options-list {
    @apply flex flex-col gap-4 mt-4 tablet:flex-row;
  }
  .options-list a {
    @apply w-full;
  }
  .option {
    @apply border-[1px] border-neutral-gallery rounded-lg w-full py-3
          text-neutral-dusty-gray text-left pl-6;
  }
  a:hover {
    @apply border-primary-blue-ribbon;
  }
</style>
