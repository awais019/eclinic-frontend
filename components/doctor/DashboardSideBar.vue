<script lang="ts" setup>
  import useUserStore from "~/stores/userStore";
  import { useToast } from "vue-toastification";

  const userStore = useUserStore();
  const toast = useToast();

  function handleSignout() {
    userStore.signout();
    toast.success("Signed out");
    navigateTo("/");
  }
</script>

<template>
  <div class="basis-1/4 bg-primary-blue-ribbon py-9 hidden lg:block">
    <nuxt-link to="/" class="px-16 block">
      <img src="~/assets/images/logo-white.svg" alt="Eclinic" />
    </nuxt-link>
    <aside class="py-16 ml-1 font-medium text-white">
      <nuxt-link
        to="/dashboard/doctor"
        class="py-6 px-16 flex items-center gap-4"
      >
        <IconsBoxes />
        <span>Dashboard</span>
      </nuxt-link>
      <nuxt-link
        to="/dashboard/doctor/appointments"
        class="py-6 px-16 flex items-center gap-4"
      >
        <IconsSmallcalendar />
        <span>Appointment</span>
      </nuxt-link>
      <nuxt-link
        to="/dashboard/doctor/availability"
        class="py-6 px-16 flex items-center gap-4"
      >
        <IconsClock />
        <span>Availability</span>
      </nuxt-link>
      <nuxt-link
        to="/dashboard/doctor/charges"
        class="py-6 px-16 flex items-center gap-4"
      >
        <IconsDollar2 class="text-white w-8 h-8" />
        <span>Charges</span>
      </nuxt-link>
      <nuxt-link
        to="/dashboard/doctor/payments"
        class="py-6 px-16 flex items-center gap-4"
      >
        <IconsSmallcard />
        <span>Payments</span>
      </nuxt-link>
      <nuxt-link
        to="/dashboard/doctor/ratings"
        class="py-6 px-16 flex items-center gap-4"
      >
        <IconsWhitestar />
        <span>My Ratings</span>
      </nuxt-link>
      <nuxt-link
        to="/dashboard/doctor/settings"
        class="py-6 px-16 flex items-center gap-4"
      >
        <IconsSettingswhite />
        <span>Settings</span>
      </nuxt-link>
      <button class="py-6 px-16 flex items-center gap-4" @click="handleSignout">
        <IconsSignout />
        <span>Signout</span>
      </button>
    </aside>
  </div>
</template>

<style lang="postcss" scoped>
  img {
    @apply mx-0;
  }

  .router-link-exact-active {
    @apply border-l-2 border-white bg-[#1061E5];
  }
</style>
