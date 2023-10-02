<script setup lang="ts">
  import { Conversation } from "~/types/APIResponse";

  defineProps<{
    conversation: Conversation;
    isCurrentConversation: boolean;
  }>();
</script>

<template>
  <div
    class="px-8 py-6 flex gap-3"
    :class="{ 'bg-primary-zumthor rounded-lg': isCurrentConversation }"
  >
    <div class="max-w-[56px] max-h-[56px] aspect-1 rounded-lg">
      <img
        :src="conversation.Participant.image"
        alt="User image"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div class="flex flex-col items-center justify-center">
      <p class="whitespace-nowrap font-semibold">
        {{ conversation.Participant.first_name }}
        {{ conversation.Participant.last_name }}
      </p>
      <p v-if="conversation.message" class="text-sm text-neutral-dusty-gray">
        <span>
          {{ shrinkText(conversation.message.message, 10) }}
        </span>
        <span>{{}}</span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
