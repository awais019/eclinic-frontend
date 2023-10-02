<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useMessagesStore from "~/stores/messages";

  const { messages } = storeToRefs(useMessagesStore());
</script>

<template>
  <section>
    {{ messages }}
  </section>
</template>

<style scoped></style>
