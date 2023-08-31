export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
