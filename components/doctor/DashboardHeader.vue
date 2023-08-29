<script setup lang="ts">
  import { useToast } from "vue-toastification";
  import useUserStore from "~/stores/userStore";

  defineProps<{
    title: string;
    subtitle: string;
  }>();

  const userStore = useUserStore();
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
  <div>
    <div
      class="bg-white px-4 py-3 justify-between items-center md:px-8 xl:px-16 2xl:px-36 hidden md:flex"
    >
      <div>
        <h2 class="text-h3-b">{{ title }}</h2>
        <span class="text-neutral-dusty-gray font-medium">
          {{ subtitle }}
        </span>
      </div>
      <div class="flex gap-6 items-center">
        <Notifications />
        <ProfileDropDown />
        <button @click="handleNavToggle" v-if="!showNav" class="lg:hidden">
          <IconsHamburger />
        </button>
        <button v-else class="lg:hidden" @click="handleNavToggle">
          <IconsClose />
        </button>
      </div>
    </div>
    <div v-if="showNav" class="lg:hidden absolute inset-0 top-20">
      <nav class="py-8 font-medium text-white bg-primary-blue-ribbon">
        <nuxt-link
          to="/dashboard/doctor"
          class="py-6 px-16 flex items-center gap-4"
        >
          <IconsBoxes />
          <span>Dashboard</span>
        </nuxt-link>
        <nuxt-link to="/messages" class="py-6 px-16 flex items-center gap-4">
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
  <DoctorMobileHeader />
</template>

<style scoped></style>
