<script setup lang="ts">
  const breadCrumbs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About us",
      path: "/about",
    },
  ];
</script>

<template>
  <PageTitle title="About us" :bread-crumbs="breadCrumbs" />
  <section class="app-container text-center bg-primary-zircon-light mb-24">
    <h1
      class="text-sm font-medium text-primary-blue-ribbon max-w-fit bg-primary-zumthor rounded-2xl px-2 py-1 mx-auto mb-4"
    >
      Our mission
    </h1>
    <div class="flex flex-col gap-6 mb-12">
      <p class="text-h2-b">
        We Are Always Ensure Best
        <span class="text-primary-blue-ribbon">Medical Treatment</span> For Your
        Health
      </p>
      <p class="text-neutral-dusty-gray">
        Trust our user-friendly platform to connect you with the right
        healthcare professionals, putting you back in control.
      </p>
    </div>
    <div class="flex flex-col gap-8 mb-24 tablet:flex-row items-start">
      <img src="~/assets/images/about1.png" alt="about1" />
      <img src="~/assets/images/about2.png" alt="about2" />
      <img src="~/assets/images/about3.png" alt="about3" />
    </div>
    <div class="text-left flex flex-col gap-8 tablet:flex-row">
      <div
        class="px-6 py-12 shadow-17 rounded-2xl bg-white flex flex-col gap-6"
      >
        <IconsAmbulance />
        <p class="flex flex-col gap-2">
          <span class="text-h4-b">Emergency Help</span>
          <span class="text-neutral-dusty-gray"
            >Trust eClinic to prioritize your well-being during
            emergencies.</span
          >
        </p>
      </div>
      <div
        class="px-6 py-12 shadow-17 rounded-2xl bg-white flex flex-col gap-6"
      >
        <IconsMedicine />
        <p class="flex flex-col gap-2">
          <span class="text-h4-b">Fast Medication</span>
          <span class="text-neutral-dusty-gray">
            We prioritize your comfort and provide online health services.</span
          >
        </p>
      </div>
      <div
        class="px-6 py-12 shadow-17 rounded-2xl bg-white flex flex-col gap-6"
      >
        <IconsBed />
        <p class="flex flex-col gap-2">
          <span class="text-h4-b">Critical Care</span>
          <span class="text-neutral-dusty-gray">
            Get expert answers to your health queries at E-Clinic.</span
          >
        </p>
      </div>
    </div>
  </section>
  <BottomBanner />
</template>

<style scoped>
  .shadow-17 {
    box-shadow: 0px 13px 19px 0px rgba(22, 111, 255, 0.07);
  }
</style>
