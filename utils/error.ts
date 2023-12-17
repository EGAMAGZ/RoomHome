export function generateError(
  meta: Record<string, unknown> | undefined,
): string {
  if (meta === undefined) {
    return "";
  }
  const targets = meta["target"] as string[];
  const errors = targets.map((target: string) => {
    if (target === "email_cliente") {
      return "El correo electronico ya ha sido registrado";
    }
    return target;
  });
  return errors.join(", ");
}
