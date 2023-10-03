<script setup lang="ts">
  import { Conversation } from "~/types/APIResponse";
  import useMessageStore from "~/stores/messages";
  import { storeToRefs } from "pinia";

  defineProps<{
    conversation: Conversation;
    isCurrentConversation: boolean;
  }>();

  const { messages } = storeToRefs(useMessageStore());

  const lastMessage = computed(() => messages.value[messages.value.length - 1]);
</script>

<template>
  <nuxt-link
    :to="`/messages/${conversation.Participant.id}`"
    class="px-8 py-6 flex gap-3 items-start"
    :class="{ 'bg-primary-zumthor rounded-lg': isCurrentConversation }"
  >
    <div class="max-w-[56px] max-h-[56px] aspect-1 rounded-lg grow-0">
      <img
        :src="conversation.Participant.image"
        alt="User image"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div class="flex justify-between grow-[2]">
      <div class="flex flex-col justify-center w-full">
        <p class="font-semibold">
          {{ conversation.Participant.first_name }}
          {{ conversation.Participant.last_name }}
        </p>
        <div
          class="text-sm text-neutral-dusty-gray flex justify-between w-full"
        >
          <span
            v-if="conversation.Message && !isCurrentConversation"
            :class="{
              'font-medium text-neutral-mine-shaft': conversation.unreadCount,
            }"
          >
            {{ shrinkText(conversation.Message.message, 10) }}
          </span>
          <span v-else-if="lastMessage && isCurrentConversation">
            {{ shrinkText(lastMessage.message, 10) }}
          </span>
        </div>
      </div>
      <div class="">
        <p class="text-neutral-dusty-gray text-xs whitespace-nowrap">
          <span
            v-if="conversation.Message && !isCurrentConversation"
            class="text-sm whitespace-nowrap"
          >
            {{ getTime(conversation.Message.created_at) }}
          </span>
          <span v-else-if="lastMessage && isCurrentConversation">
            {{ getTime(lastMessage.created_at) }}
          </span>
        </p>
        <span
          v-if="conversation.unreadCount && !isCurrentConversation"
          class="bg-green-haze rounded-[38px] h-6 w-6 flex items-center justify-center text-[12px] font-medium text-white"
          >{{ conversation.unreadCount }}</span
        >
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped></style>
