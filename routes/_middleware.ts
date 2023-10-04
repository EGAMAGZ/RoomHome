import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "$cookies";
import { LOGIN_URL, ROOT_URL } from "@/utils/config.ts";
import { verifyJWT } from "@/utils/jwt.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext,
) {
  console.log("Cliente");
  return await ctx.next();
}
