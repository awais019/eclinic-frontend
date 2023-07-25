<script lang="ts" setup></script>

<template>
  <div class="logo">
    <nuxt-link to="/">
      <img
        src="~/assets/images/logo-white.svg"
        alt="Logo"
        class="mobile:hidden"
      />
      <img src="~/assets/images/logo.svg" alt="Logo" class="tablet:hidden" />
    </nuxt-link>
  </div>
  <div
    class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:gap-40 tablet:h-screen mobile:app-container"
  >
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
    <div class="hidden bg-primary-blue-ribbon tablet:flex tablet:items-center">
      <img src="~/assets/images/options.svg" alt="Decorative image" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .signup-options {
    @apply mobile:mt-36 mobile:mx-auto tablet:self-center tablet:justify-self-end;
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
          text-neutral-dusty-gray text-left pl-6 desktop:w-60;
  }
  a:hover {
    @apply border-primary-blue-ribbon;
  }
</style>
