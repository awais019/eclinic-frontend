<script setup lang="ts">
  defineProps<{
    userType: string;
  }>();
</script>

<template>
  <div
    class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:h-screen desktop:gap-40 tablet:gap-20 mobile:app-container"
  >
    <div class="registeration">
      <h2 class="text-h2-sb">
        Join as a <span class="capitalize">{{ userType }}</span>
      </h2>
      <p class="text-sm font-medium">
        Already a member?
        <nuxt-link to="/signin" class="text-primary-blue-ribbon"
          >Sign in</nuxt-link
        >
      </p>
      <slot />
    </div>
    <div class="decorative">
      <img
        src="~/assets/images/doctor.svg"
        alt="Decorative image"
        v-if="userType == 'doctor'"
      />
      <img
        src="~/assets/images/patient.svg"
        alt="Decorative image"
        v-else-if="userType == 'patient'"
      />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .decorative {
    @apply hidden bg-primary-blue-ribbon tablet:flex tablet:items-center tablet:justify-center;
  }
  .registeration {
    @apply tablet:mt-24 mobile:mt-12 mb-20 mx-auto desktop:max-w-[60%] tablet:max-w-[80%];
  }
</style>
