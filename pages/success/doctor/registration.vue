<script lang="ts" setup>
  definePageMeta({
    layout: false,
    middleware: ["success"],
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
      <NuxtLink to="/"> Back to Home </NuxtLink>
    </div>
  </Success>
</template>
