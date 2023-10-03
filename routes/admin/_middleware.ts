import { MiddlewareHandlerContext } from "$fresh/server.ts";
import SessionState from "@/model/session.ts";
import { getCookies } from "https://deno.land/std@0.203.0/http/cookie.ts";
import { ADMIN_LOGIN_URL, ADMIN_LOGOUT_URL } from "@/utils/config.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<SessionState>,
) {
  const url = new URL(req.url);
  console.log(req.headers);
  console.log(getCookies(req.headers));
  if (url.pathname === ADMIN_LOGIN_URL || url.pathname === ADMIN_LOGOUT_URL) {
    console.log("OMITIR");
    return await ctx.next();
  }
  console.log("PASAR");
  const headers = new Headers(req.headers);
  headers.append("Location", ADMIN_LOGIN_URL);

  return new Response(null, {
    status: 307,
    headers,
  });
}
