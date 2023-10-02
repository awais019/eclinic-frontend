import { Socket } from "socket.io-client";

declare module "#app" {
  interface NuxtApp {
    $socket: Socket;
  }
}
