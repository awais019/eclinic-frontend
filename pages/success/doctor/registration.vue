<script lang="ts" setup>
  definePageMeta({
    layout: false,
  });
</script>

<template>
  <Success>
    <div class="text-center mobile:mt-[calc(100vw/2)]">
      <AnimationsCheck
        :height="96"
        :width="96"
        :loop="false"
        :auto-play="true"
      />
      <h4 class="text-h4-sb">Registration Successful</h4>
      <p class="max-w-[33.5rem]">
        Check your email for
        <span class="text-primary-blue-ribbon">verification.</span>
        After verification you'll have to wait until your account is approved by
        our team.
      </p>
      <div
        class="mt-6 bg-primary-blue-ribbon px-6 py-4 rounded-lg text-base-sb text-white"
      >
        <NuxtLink to="/"> Return to Home </NuxtLink>
      </div>
    </div>
  </Success>
</template>
