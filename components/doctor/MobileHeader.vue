<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useUserStore from "~/stores/userStore";
  import { useToast } from "vue-toastification";

  const userStore = useUserStore();
  const { image } = storeToRefs(userStore);
  const toast = useToast();

  const showNav = ref(false);

  function handleNavToggle() {
    showNav.value = !showNav.value;
  }

  function handleSignout() {
    userStore.signout();
    toast.success("Signed out");
    navigateTo("/");
  }
</script>

<template>
  <div class="md:hidden">
    <div class="bg-white px-4 py-6 flex justify-between items-center">
      <img src="~/assets/images/logo.svg" alt="Eclinic" />
      <div class="flex items-center gap-4">
        <Notifications />
        <div
          class="w-10 h-10 p-1 shadow-variant12 rounded-lg flex items-center"
        >
          <img :src="image" alt="user" />
        </div>
        <button @click="handleNavToggle" v-if="!showNav">
          <IconsHamburger />
        </button>
        <button v-else @click="handleNavToggle">
          <IconsClose />
        </button>
      </div>
    </div>
    <div v-if="showNav" class="absolute inset-0 top-20 z-10">
      <nav class="py-16 font-medium text-white bg-primary-blue-ribbon h-screen">
        <nuxt-link
          to="/dashboard/doctor"
          class="py-6 px-16 flex items-center gap-4"
        >
          <IconsBoxes />
          <span>Dashboard</span> </nuxt-link
        ><nuxt-link to="/messages" class="py-6 px-16 flex items-center gap-4">
          <IconsMessage />
          <span>Messages</span>
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
          to="/dashboard/doctor/payments"
          class="py-6 px-16 flex items-center gap-4"
        >
          <IconsSmallcard />
          <span>Payments</span>
        </nuxt-link>
        <nuxt-link
          to="/dashboard/doctor/settings"
          class="py-6 px-16 flex items-center gap-4"
        >
          <IconsSettingswhite />
          <span>Settings</span>
        </nuxt-link>
        <button
          class="py-6 px-16 flex items-center gap-4"
          @click="handleSignout"
        >
          <IconsSignout />
          <span>Signout</span>
        </button>
      </nav>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  img {
    @apply m-0;
  }
</style>
