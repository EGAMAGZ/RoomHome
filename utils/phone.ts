export function formatPhoneNumber(value: string) {
  return `${value.substring(0, 2)}-${value.substring(3, 9)}`;
}
