<script setup lang="ts"></script>

<template>
  <DecorativeLogo align="right" />
  <div
    class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:h-screen desktop:gap-40 tablet:gap-20 mobile:app-container"
  >
    <div
      class="hidden bg-primary-blue-ribbon tablet:flex tablet:items-center tablet:justify-center"
    >
      <img src="~/assets/images/forgotpassword.svg" alt="Decorative image" />
    </div>
    <div
      class="flex flex-col justify-center mt-12 tablet:mt-0 tablet:max-w-[30.5rem]"
    >
      <h1 class="text-h2-sb">Forgot Password?</h1>
      <span
        >Enter the email you used to create your account so we can send you
        instructions on how to reset your password.</span
      >
      <FormKit type="form" :actions="false">
        <FormKit
          type="email"
          name="email"
          label="Email"
          placeholder="name@domain.com"
          validation="required|email"
        />
        <FormKit type="submit" label="Send Reset Mail" />
      </FormKit>
      <div class="mt-6 text-sm font-medium">
        Take me back to
        <nuxt-link to="signin" class="text-primary-blue-ribbon"
          >Signin</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
