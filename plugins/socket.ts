import io from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {
  const { socketBaseUrl } = useRuntimeConfig().public;
  const socket = io(socketBaseUrl);

  nuxtApp.provide("socket", socket);
});
