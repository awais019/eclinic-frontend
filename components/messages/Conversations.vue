<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import type { Conversation } from "~/types/APIResponse";
  import useMessagesStore from "~/stores/messages";

  const messageStore = useMessagesStore();

  const { conversations, currentConversation } = storeToRefs(messageStore);

  const isCurrentConversation = (conversation: Conversation) => {
    return (
      (currentConversation.value &&
        conversation.id === currentConversation.value.id) ||
      false
    );
  };
</script>

<template>
  <section>
    <p class="text-neutral-dusty-gray my-12" v-if="conversations.length == 0">
      No conversations start a new conversation
    </p>
    <div
      v-else
      class="py-8 flex flex-col gap-2 border-t-[0.5px] border-neutral-gallery"
    >
      <MessagesConversation
        v-for="conversation in conversations"
        :conversation="conversation"
        :isCurrentConversation="isCurrentConversation(conversation)"
        :key="conversation.id"
      />
    </div>
  </section>
</template>

<style scoped></style>
