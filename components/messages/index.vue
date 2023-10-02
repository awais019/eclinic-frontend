<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useMessagesStore from "~/stores/messages";
  import useUserStore from "~/stores/userStore";

  const { messages, currentConversation } = storeToRefs(useMessagesStore());
  const { image } = storeToRefs(useUserStore());

  const messagesRef = ref<HTMLElement | null>(null);

  const isRecieved = (sender: string) => {
    return sender == currentConversation.value?.Participant.id;
  };

  function scrollToBottom() {
    if (messagesRef.value) {
      messagesRef.value.scrollTop = messagesRef.value.scrollHeight;
    }
  }

  onMounted(() => {
    scrollToBottom();
  });

  onUpdated(() => {
    scrollToBottom();
  });
</script>

<template>
  <section
    class="p-8 flex flex-col gap-[72px] absolute inset-x-0 top-[120px] bottom-16 overflow-y-auto"
    ref="messagesRef"
  >
    <div v-for="message in messages" :key="message.id" class="flex">
      <div
        :class="{ 'ml-auto flex-row-reverse': !isRecieved(message.sender) }"
        class="flex gap-3"
      >
        <div class="max-w-[32px] max-h-[32px] aspect-1 rounded-md">
          <img
            :src="image"
            alt="Your image"
            class="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <p
            class="text-sm text-neutral-dusty-gray max-w-fit"
            :class="{ 'ml-auto': !isRecieved(message.sender) }"
          >
            {{ getTime(message.created_at) }}
          </p>
          <p
            class="p-4"
            :class="[
              isRecieved(message.sender)
                ? 'bg-white rounded-tr-2xl rounded-bl-2xl'
                : 'bg-primary-blue-ribbon rounded-tl-2xl rounded-br-2xl text-white shadow-variant16',
            ]"
          >
            {{ message.message }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
