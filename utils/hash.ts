import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { BCRYPT_SALT } from "@/utils/config.ts";

export async function generateHash(value: string): Promise<string> {
  const salt = await bcrypt.genSalt(BCRYPT_SALT);
  const hash = await bcrypt.hash(value, salt);
  return hash;
}

export function compareHash(
  value: string,
  hash: string,
) {
  return bcrypt.compareSync(value, hash);
}
