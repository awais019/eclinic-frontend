<script setup lang="ts">
  import { formatTimeAgo } from "@vueuse/core";
  import { Conversation } from "~/types/APIResponse";

  defineProps<{
    conversation: Conversation;
    isCurrentConversation: boolean;
  }>();
</script>

<template>
  <nuxt-link
    :to="`/messages/${conversation.Participant.id}`"
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
    <div class="flex flex-col justify-center w-full">
      <p class="whitespace-nowrap font-semibold">
        {{ conversation.Participant.first_name }}
        {{ conversation.Participant.last_name }}
      </p>
      <p
        v-if="conversation.message"
        class="text-sm text-neutral-dusty-gray flex justify-between w-full"
      >
        <span>
          {{ shrinkText(conversation.message.message, 10) }}
        </span>
        <span>{{ getTime(conversation.message.created_at) }}</span>
      </p>
    </div>
  </nuxt-link>
</template>

<style scoped></style>
