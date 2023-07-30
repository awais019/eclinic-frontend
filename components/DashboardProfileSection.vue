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
    <div>
      <div
        class="w-[72px] h-[72px] bg-gradient_2 rounded-2xl tablet:w-36 tablet:h-36"
      >
        <div class="relative top-3 right-3">
          <img
            class="rounded-2xl"
            :src="`images${userStore.image}`"
            alt="Profile Image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
