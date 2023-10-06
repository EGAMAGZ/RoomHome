import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "$cookies";
import { ADMIN_LOGIN_URL, LOGIN_URL, ROOT_URL } from "@/utils/config.ts";
import { verifyJWT } from "@/utils/jwt.ts";
import SessionState from "../model/session-state.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<SessionState>,
) {
  const url = new URL(req.url);
  if (ctx.destination !== "route") return await ctx.next();

  console.log(`Main middleware - Pathname: ${url.pathname}`);

  if (ctx.destination !== "route") return await ctx.next();

  if (url.pathname.startsWith("/api")) return await ctx.next();

  const { userSession } = getCookies(req.headers);
  console.log(`Main middleware - User Session: ${userSession}`);

  // Cliente o empleado no ha iniciado sesion
  if (userSession === undefined) {
    // Rutas validas para el cliente o empleado que iniciaron sesion
    ctx.state.isLoggedIn = false;
    if (
      url.pathname === LOGIN_URL ||
      url.pathname === ROOT_URL ||
      url.pathname === ADMIN_LOGIN_URL
    ) {
      return await ctx.next();
    }

    const headers = new Headers(req.headers);
    headers.append("Location", ROOT_URL);

    return new Response(null, {
      status: 303,
      headers,
    });
  }
  try {
    const { payload, protectedHeader } = await verifyJWT(userSession);
    
    ctx.state.isLoggedIn = true;
    ctx.state.isEmployee = payload.empleado as boolean;

    return await ctx.next();
  } catch (_error) {
    return new Response(null, {
      status: 303,
      headers: {
        "Location": ROOT_URL,
      },
    });
  }
}