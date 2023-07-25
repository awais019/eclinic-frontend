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
      <p>
        Check your email for
        <span class="text-primary-blue-ribbon">verification.</span>
      </p>
      <div class="mt-6 text-primary-blue-ribbon underline">
        <NuxtLink to="/"> Back to Home </NuxtLink>
      </div>
    </div>
  </Success>
</template>
