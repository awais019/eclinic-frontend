<script setup lang="ts"></script>

<template>
  <DecorativeLogo align="right" />
  <div
    class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:h-screen desktop:gap-40 tablet:gap-20 mobile:app-container"
  >
    <div
      class="hidden bg-primary-blue-ribbon tablet:flex tablet:items-center tablet:justify-center"
    >
      <img src="~/assets/images/resetpassword.svg" alt="Decorative image" />
    </div>
    <div
      class="flex flex-col justify-center mt-12 tablet:mt-0 tablet:max-w-[30.5rem]"
    >
      <h1 class="text-h2-sb">Reset Password!</h1>
      <span>Enter a strong new and matching confirm password to continue</span>
      <FormKit type="form" :actions="false" class="mt-12">
        <FormKit
          type="password"
          name="password"
          label="New Password"
          placeholder="Enter new password"
          rules="required"
        />
        <FormKit
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Enter confirm password"
          rules="required"
        />
        <FormKit type="submit" label="Reset Password" />
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
