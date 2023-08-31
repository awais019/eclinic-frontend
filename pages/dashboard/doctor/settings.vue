<template>
  <div class="lg:basis-3/4 relative z-0 w-screen">
    <DoctorDashboardHeader
      title="Settings"
      subtitle="Personalize Your Account Settings"
    />
    <section
      class="py-6 px-4 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-24 lg:overflow-y-scroll md:px-8 xl:px-16"
    >
      <div class="py-4 sm:hidden lg:py-8">
        <h2 class="text-h3-b">Settings</h2>
        <p class="text-neutral-dusty-gray font-medium">
          Personalize Your Account Settings
        </p>
      </div>
      <section class="py-4 max-w-4xl mx-auto lg:py-8">
        <LazyNuxtPage />
      </section>
    </section>
  </div>
</template>
