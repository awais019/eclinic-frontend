<script lang="ts" setup>
  import useUserStore from "~/stores/userStore";

  const userStore = useUserStore();
</script>

<template>
  <div class="py-24 flex gap-12">
    <div>
      <span class="text-base-md text-primary-blue-ribbon"
        >Hi,
        <span class="underline"
          >{{ userStore.first_name }} {{ userStore.last_name }}</span
        ></span
      >
      <h2 class="text-h3-b">Welcome Back</h2>
      <nuxt-link to="/settings">Account Settings <IconsSettings /></nuxt-link>
    </div>
    <ProfileImage />
  </div>
</template>

<style scoped></style>
