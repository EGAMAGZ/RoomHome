export function formatDate(value: Date) {
  return new Intl.DateTimeFormat(navigator.language, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(value);
}
