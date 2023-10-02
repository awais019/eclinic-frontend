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
      <p class="text-sm text-neutral-dusty-gray flex justify-between w-full">
        <span v-if="conversation.Message">
          {{ shrinkText(conversation.Message.message, 10) }}
        </span>
        <span v-else-if="lastMessage">
          {{ shrinkText(lastMessage.message, 10) }}
        </span>
        <span v-if="conversation.Message"
          >{{ getTime(conversation.Message.created_at) }}
        </span>
        <span v-else-if="lastMessage">
          {{ getTime(lastMessage.created_at) }}
        </span>
      </p>
    </div>
  </nuxt-link>
</template>

<style scoped></style>
