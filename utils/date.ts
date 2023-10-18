export function formatDate(value: Date) {
  return new Intl.DateTimeFormat(navigator.language, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(value);
}

export function addYears(date: Date, years: number) {
  date.setFullYear(date.getFullYear() + years);
  return date;
}

export function totalMonths(start: Date, end: Date) {
  return (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
}

export function sameDate(start: Date, end: Date) {
  return start.getDate() === end.setDate(end.getDate() + 1);
}
