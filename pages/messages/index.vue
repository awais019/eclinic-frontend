<script setup lang="ts">
  import { Conversation } from "types/APIResponse";
  import useUserStore from "~/stores/userStore";
  import useMessagesStore from "~/stores/messages";

  definePageMeta({
    layout: false,
    middleware: ["message"],
  });

  const { $socket } = useNuxtApp();
  const userStore = useUserStore();
  const messagesStore = useMessagesStore();

  onMounted(() => {
    $socket.connect();
    $socket.emit("set-user", userStore.user?.id);
    $socket.on("new-message", (conversations: Conversation[]) => {
      messagesStore.updateConversationsList(conversations);
    });
  });

  onBeforeRouteLeave(() => {
    if ($socket.connected) {
      $socket.disconnect();
    }
  });
</script>

<template>
  <main
    class="h-screen basis-3/4 border-l-[0.5px] border-neutral-gallery flex items-center justify-center"
  >
    <p class="text-neutral-dusty-gray">
      Start a new conversation or select an existing one to continue
    </p>
  </main>
</template>

<style scoped></style>
