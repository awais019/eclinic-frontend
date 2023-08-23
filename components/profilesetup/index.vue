<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useUserStore from "~/stores/userStore";

  defineEmits<{
    (e: "continue"): void;
  }>();

  const userStore = useUserStore();

  const { first_name, last_name } = storeToRefs(userStore);
</script>

<template>
  <div>
    <p class="text-h5">
      Hi, {{ first_name }} {{ last_name }}! you are required to setup some extra
      information in your profile to use our app. Thank you for your
      cooperation!
    </p>
    <button
      class="float-right bg-primary-blue-ribbon text-white font-semibold py-3 px-4 rounded-lg"
      @click="$emit('continue')"
    >
      Continue
    </button>
  </div>
</template>

<style scoped></style>
