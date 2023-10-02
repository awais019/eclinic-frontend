<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useMessageStore from "~/stores/messages";
  definePageMeta({
    layout: false,
    middleware: ["message"],
  });

  const messageStore = useMessageStore();

  const { currentConversation } = storeToRefs(messageStore);
</script>

<template>
  <main class="h-screen basis-3/4" v-if="currentConversation">
    <div class="p-8 bg-white">
      <div class="flex gap-3 items-center">
        <div class="max-w-[56px] max-h-[56px] aspect-1">
          <img
            :src="currentConversation.Participant.image"
            alt="User image"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>

        <p class="text-h5-b">
          {{ currentConversation.Participant.first_name }}
          {{ currentConversation.Participant.last_name }}
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    background: linear-gradient(
        151deg,
        rgba(245, 245, 245, 0.35) -22.07%,
        rgba(255, 255, 255, 0.5) 81.96%
      ),
      #e7f0ff;
  }
</style>
