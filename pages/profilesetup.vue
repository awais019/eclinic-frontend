<script setup lang="ts">
  import useUserStore from "~/stores/userStore";

  definePageMeta({
    layout: false,
  });

  const userStore = useUserStore();

  const index = ref(true);
  const phone = ref(false);
  const schedule = ref(false);
  const charges = ref(false);

  function goToPhone() {
    index.value = false;
    phone.value = true;
  }

  function goToSchedule() {
    phone.value = false;
    schedule.value = true;
  }

  function goToCharges() {
    schedule.value = false;
    charges.value = true;
  }

  async function goToDashboard() {
    console.log("goToDashboard");

    await userStore.userMe();
    navigateTo("/dashboard/doctor");
  }
</script>

<template>
  <DecorativeLogo align="right" />
  <div
    class="tablet:grid tablet:grid-flow-col tablet:grid-cols-2 tablet:h-screen desktop:gap-40 tablet:gap-20 mobile:app-container"
  >
    <div
      class="hidden bg-primary-blue-ribbon tablet:flex tablet:items-center tablet:justify-center"
    >
      <img src="~/assets/images/signin.svg" alt="Decorative image" />
    </div>
    <div
      class="flex flex-col gap-4 justify-center mt-12 tablet:mt-0 tablet:max-w-[44rem]"
    >
      <h1 class="text-h2-sb text-center text-primary-blue-ribbon">
        Profile Setup
      </h1>
      <Profilesetup @continue="goToPhone" v-if="index" />
      <Phone v-if="phone && !userStore.phone" @continue="goToSchedule" />
      <Schedule
        v-if="schedule || (userStore.phone && !index && !userStore.hasSchedule)"
        @continue="goToCharges"
      />
      <Charges
        v-if="charges || (userStore.hasSchedule && userStore.phone && !index)"
        @continue="goToDashboard"
      />
    </div>
  </div>
</template>

<style scoped></style>
