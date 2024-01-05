import { RefinementCtx, z } from "zod";

export function formatDate(value: Date) {
  return new Intl.DateTimeFormat(navigator.language, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
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

export function isValidDate(dateString: string) {
  const dateObject = new Date(dateString);

  return !isNaN(dateObject.getTime()) &&
    dateObject.toString() !== "Invalid Date";
}

export function isDateAfterMin(dateString: string, minDate = new Date()) {
  const dateObject = new Date(dateString);
  const minDateObject = minDate;

  return dateObject >= minDateObject;
}

export function isDateBeforeMax(
  dateString: string,
  maxDate = addYears(new Date(), 2),
) {
  const dateObject = new Date(dateString);
  const maxDateObject = maxDate;

  return dateObject <= maxDateObject;
}

export const dateTransform = (value: string, ctx: RefinementCtx) => {
  const parsed = new Date(value);

  if (!isValidDate(value)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Fecha inválida",
    });

    return z.NEVER;
  }
  if (!isDateAfterMin(value)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "La fecha debe ser posterior a la fecha actual",
    });

    return z.NEVER;
  }

  if (!isDateBeforeMax(value)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "La fecha debe ser menor a 2 años",
    });

    return z.NEVER;
  }
  return parsed;
};
