import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "$cookies";
import { LOGIN_URL, ROOT_URL } from "@/utils/config.ts";
import { verifyJWT } from "@/utils/jwt.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext,
) {
  if (ctx.destination !== "route") return await ctx.next();

  const url = new URL(req.url);
  const { userSession } = getCookies(req.headers);
  console.log("Cliente");
  console.log(userSession);

  return await ctx.next();
}
