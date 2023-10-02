import io from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {
  const { socketBaseUrl } = useRuntimeConfig().public;
  const socket = io(socketBaseUrl, {
    autoConnect: false,
  });

  nuxtApp.provide("socket", socket);
});
