import { MiddlewareHandlerContext } from "$fresh/server.ts";
import SessionState from "../../model/session-state.ts";
import { getCookies } from "$cookies";
import { ADMIN_LOGIN_URL, ADMIN_ROOT_URL, ROOT_URL } from "@/utils/config.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<SessionState>,
) {
  const url = new URL(req.url);
  console.log(`Admin middleware - Pathname: ${url.pathname}`);

  const { userSession } = getCookies(req.headers);
  console.log(`Admin middleware - User Session: ${userSession}`);

  // Acceso exclusivo admin login al no haber iniciado sesion
  if (userSession === undefined && url.pathname === ADMIN_LOGIN_URL) {
    return await ctx.next();
  }

  // Redireccion a raiz si no es admin
  if (!ctx.state.isEmployee) {
    return new Response(null, {
      status: 303,
      headers: {
        "Location": ROOT_URL,
      },
    });
  }

  // Redireccion a raiz de admin en caso de haber inicado sesion
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
