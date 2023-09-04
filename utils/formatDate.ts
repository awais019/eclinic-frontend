export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateWithTime(date: string) {
  return new Date(date).toLocaleDateString("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}
