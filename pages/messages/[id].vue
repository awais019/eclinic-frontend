<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useMessageStore from "~/stores/messages";
  import useUserStore from "~/stores/userStore";
  import type { Message, Conversation } from "~/types/APIResponse";

  definePageMeta({
    layout: false,
    middleware: ["message"],
  });

  const messageStore = useMessageStore();
  const userStore = useUserStore();

  const { $socket } = useNuxtApp();

  const { currentConversation } = storeToRefs(messageStore);
  const { user } = storeToRefs(useUserStore());

  const messageInput = ref<HTMLTextAreaElement | null>(null);

  function adjustTextareaHeight() {
    if (messageInput.value) {
      messageInput.value.style.height = "auto";
      messageInput.value.style.height = messageInput.value.scrollHeight + "px";
    }
  }

  function sendMessage() {
    if (
      messageInput.value &&
      messageInput.value.value &&
      currentConversation.value
    ) {
      $socket.emit("message", {
        conversationId: currentConversation.value.id,
        message: messageInput.value.value,
        sender: user.value?.id,
        receiver: currentConversation.value.Participant.id,
      });
      messageInput.value.value = "";
      messageInput.value.style.height = "auto";
      messageInput.value.style.height = messageInput.value.scrollHeight + "px";
    }
  }

  onBeforeMount(() => {
    if (currentConversation.value) {
      if (!$socket.connected) {
        $socket.connect();
      }
      $socket.emit("join", currentConversation.value.id, userStore.user?.id);

      $socket.emit("set-user", userStore.user?.id);
      $socket.on("new-message", (conversations: Conversation[]) => {
        messageStore.updateConversationsList(conversations);
      });

      $socket.on("message", (message: Message) => {
        messageStore.pushMessage(message);
      });
    }
  });

  onBeforeRouteLeave(() => {
    if (currentConversation.value) {
      $socket.emit("leave", currentConversation.value.id);
      if ($socket.connected) {
        $socket.disconnect();
      }
    }
  });
</script>

<template>
  <main
    class="h-screen basis-3/4 relative border-l-[0.5px] border-neutral-gallery"
    v-if="currentConversation"
  >
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
    <Messages />
    <form
      class="bg-white border-x-[0.5px] border-neutral-gallery px-6 py-3 fixed bottom-0 right-0 left-1/4 flex gap-6"
      @submit.prevent="sendMessage"
    >
      <label for="message" class="sr-only">Write message</label>
      <textarea
        name="message"
        id="message"
        placeholder="Write a message"
        class="px-6 resize-none h-10 overflow-y-auto"
        ref="messageInput"
        @input="adjustTextareaHeight"
      />
      <button type="submit" class="!w-6 h-6 !m-0 !bg-white">
        <IconsSend />
      </button>
    </form>
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
  textarea {
    border-top: 0;
    border-bottom: 0;
    border-radius: 0;
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
    resize: none;
  }
</style>
