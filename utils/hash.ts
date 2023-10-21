import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { BCRYPT_SALT } from "@/utils/config.ts";

export function generateHash(value: string): string {
  const salt = bcrypt.genSaltSync(BCRYPT_SALT);
  const hash = bcrypt.hashSync(value, salt);
  return hash;
}

export function compareHash(
  value: string,
  hash: string,
) {
  return bcrypt.compareSync(value, hash);
}
