import { MiddlewareHandlerContext } from "$fresh/server.ts";
import SessionState from "@/model/session.ts";
import { getCookies } from "$cookies";
import { ADMIN_LOGIN_URL, ADMIN_ROOT_URL } from "@/utils/config.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<SessionState>,
) {
  const url = new URL(req.url);
  // console.log(req.headers);
  // console.log(getCookies(req.headers));
  const { userSession } = getCookies(req.headers);
  console.log(userSession);

  // Usuario no ha iniciado sesion
  if (userSession === undefined) {
    if (url.pathname === ADMIN_LOGIN_URL) {
      return await ctx.next();
    }
    const headers = new Headers(req.headers);
    headers.append("Location", ADMIN_LOGIN_URL);

    return new Response(null, {
      status: 307,
      headers,
    });
  }
  // Usuario ha iniciado sesion
  if (url.pathname === ADMIN_LOGIN_URL) {
    const headers = new Headers(req.headers);
    headers.append("Location", ADMIN_ROOT_URL);

    return new Response(null, {
      status: 307,
      headers,
    });
  }
  return await ctx.next();
}
