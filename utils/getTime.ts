export function getTime(date: string) {
  return new Date(date).toLocaleTimeString("default", {
    hour: "numeric",
    minute: "numeric",
  });
}
