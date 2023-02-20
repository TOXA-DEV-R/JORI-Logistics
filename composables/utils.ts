export function formatPhoneNumberUz(value: string) {
  if (!value) return value;
  const v = value.replace(/[^\d]/g, "");
  const lgth = v.length;

  if (lgth < 3) return `+998 ${v}`;
  if (lgth < 6) return `+998 ${v.slice(3, 5)}`;
  if (lgth < 9) return `+998 (${v.slice(3, 5)}) ${v.slice(5, 8)}`;
  if (lgth < 11)
    return `+998 (${v.slice(3, 5)}) ${v.slice(5, 8)}-${v.slice(8, 10)}`;
  return `+998 (${v.slice(3, 5)}) ${v.slice(5, 8)}-${v.slice(8, 10)}${v.slice(
    10,
    12
  )}`;
}
