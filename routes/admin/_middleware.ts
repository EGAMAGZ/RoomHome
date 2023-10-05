import { MiddlewareHandlerContext } from "$fresh/server.ts";
import SessionState from "@/model/session.ts";
import { getCookies } from "$cookies";
import {
  ADMIN_LOGIN_URL,
  ADMIN_LOGOUT_URL,
  ADMIN_ROOT_URL,
  ROOT_URL,
} from "@/utils/config.ts";
import { verifyJWT } from "@/utils/jwt.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<SessionState>,
) {
  const url = new URL(req.url);
  console.log(`Admin middleware - Pathname: ${url.pathname}`);

  const { userSession } = getCookies(req.headers);
  console.log(`Admin middleware - User Session: ${userSession}`);

  // Usuario no ha iniciado sesion
  // if (userSession === undefined) {
  //   if (url.pathname === ADMIN_LOGIN_URL) {
  //     return await ctx.next();
  //   }
  //   const headers = new Headers(req.headers);
  //   headers.append("Location", ADMIN_LOGIN_URL);

  //   return new Response(null, {
  //     status: 307,
  //     headers,
  //   });
  // }
  if (userSession === undefined) {
    
    return await ctx.next();
  }
  try {
    console.log("PAYLOAD");
    const { payload, protectedHeader } = await verifyJWT(userSession);
    if (!payload.empleado) {
      console.log("NO EMPLEADO");

      return new Response(null, {
        status: 303,
        headers: {
          "Location": ROOT_URL,
        },
      });
    }
  } catch (_error) {
    return new Response(null, {
      status: 303,
      headers: {
        "Location": ROOT_URL,
      },
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
