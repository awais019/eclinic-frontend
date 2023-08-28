<script setup lang="ts">
  defineProps<{
    title: string;
    subtitle: string;
  }>();
</script>

<template>
  <div class="bg-white px-16 py-3 flex justify-between items-center">
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
