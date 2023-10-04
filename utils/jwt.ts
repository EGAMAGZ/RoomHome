import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { JWT_ALG, JWT_SECRET } from "@/utils/config.ts";

export async function signJWT(jwtPayload: JWTPayload) {
  return await new SignJWT(jwtPayload)
    .setProtectedHeader({ alg: JWT_ALG })
    .sign(JWT_SECRET);
}

export async function verifyJWT(jwt: string) {
  return await jwtVerify(jwt, JWT_SECRET, { algorithms: [JWT_ALG] });
}
