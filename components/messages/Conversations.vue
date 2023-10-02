<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useMessagesStore from "~/stores/messages";

  const messageStore = useMessagesStore();

  const { conversations } = storeToRefs(messageStore);
</script>

<template>
  <section>
    <p class="text-neutral-dusty-gray my-12" v-if="conversations.length == 0">
      No conversations start a new conversation
    </p>
    <p v-else>
      {{ conversations }}
    </p>
  </section>
</template>

<style scoped></style>
