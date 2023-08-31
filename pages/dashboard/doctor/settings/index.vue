<script lang="ts" setup>
  const settingLinks = ref([
    { name: "Personal Info", path: "/dashboard/doctor/settings/personalinfo" },
    { name: "Email", path: "/dashboard/doctor/settings/email" },
    { name: "Phone Number", path: "/dashboard/doctor/settings/phone" },
    { name: "Password", path: "/dashboard/doctor/settings/password" },
    { name: "Hospital Info", path: "/dashboard/doctor/settings/hospitalinfo" },
  ]);
</script>

<template>
  <div class="my-2 border border-neutral-gallery rounded-lg lg:my-4">
    <ul class="flex flex-col text-neutral-dusty-gray font-medium">
      <li
        v-for="(link, index) in settingLinks"
        :key="link.name"
        class="flex items-center justify-between p-4"
        :class="{
          'border-b border-neutral-gallery': index != settingLinks.length - 1,
        }"
      >
        <nuxt-link :to="link.path">
          {{ link.name }}
        </nuxt-link>
        <IconsArrowright />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
