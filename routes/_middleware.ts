import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "$cookies";
import {
  ADMIN_LOGIN_URL,
  ADMIN_ROOT_URL,
  LOGIN_URL,
  REGISTER_URL,
  ROOT_URL,
} from "@/utils/config.ts";
import { verifyJWT } from "@/utils/jwt.ts";
import SessionState from "@/schema/session-state.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<SessionState>,
) {
  const url = new URL(req.url);
  if (ctx.destination !== "route") return await ctx.next();

  console.log(`Main middleware - Pathname: ${url.pathname}`);

  if (ctx.destination !== "route") return await ctx.next();

  if (url.pathname.startsWith("/api")) {
    return await ctx.next();
  }

  const { userSession } = getCookies(req.headers);
  console.log(`Main middleware - User Session: ${userSession}`);

  // Cliente o empleado no ha iniciado sesion
  if (userSession === undefined) {
    // Rutas validas para el cliente o empleado que iniciaron sesion
    ctx.state.isLoggedIn = false;
    if (
      url.pathname === LOGIN_URL ||
      url.pathname === ROOT_URL ||
      url.pathname === ADMIN_LOGIN_URL ||
      url.pathname === REGISTER_URL
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
    ctx.state.name = payload.name as string;
    ctx.state._id = payload.id as number;
  } catch (_error) {
    return new Response(null, {
      status: 303,
      headers: {
        "Location": ROOT_URL,
      },
    });
  }

  // Redireccion a raiz de cliente en caso de haber inicado sesion
  if (url.pathname === LOGIN_URL || url.pathname === REGISTER_URL) {
    const headers = new Headers(req.headers);

    headers.append(
      "Location",
      ctx.state.isEmployee ? ADMIN_ROOT_URL : ROOT_URL,
    );

    return new Response(null, {
      status: 303,
      headers,
    });
  }

  return await ctx.next();
}
