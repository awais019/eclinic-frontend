<script setup lang="ts">
  defineProps<{
    title: string;
    subtitle: string;
  }>();
</script>

<template>
  <div
    class="bg-white px-4 py-3 justify-between items-center md:px-8 xl:px-16 2xl:px-36 hidden md:flex"
  >
    <div>
      <h2 class="text-h3-b">{{ title }}</h2>
      <span class="text-neutral-dusty-gray font-medium"> {{ subtitle }} </span>
    </div>
    <div class="flex gap-6 items-center">
      <Notifications />
      <ProfileDropDown />
    </div>
  </div>
</template>

<style scoped></style>
