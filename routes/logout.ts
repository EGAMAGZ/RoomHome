import { HandlerContext, Handlers } from "$fresh/server.ts";
import { deleteCookie } from "$cookies";
import {
  ADMIN_LOGIN_URL,
  LOGIN_URL,
  ROOT_URL,
  USER_SESSION_COOKIE_NAME,
} from "@/utils/config.ts";
import { Data } from "@/schema/data.ts";
import SessionState from "@/schema/session-state.ts";

export const handler: Handlers<Data, SessionState> = {
  GET(req: Request, ctx: HandlerContext<Data, SessionState>) {
    const headers = new Headers(req.headers);

    deleteCookie(headers, USER_SESSION_COOKIE_NAME, {
      path: ROOT_URL,
    });

    if (ctx.state.isEmployee) {
      headers.set("Location", ADMIN_LOGIN_URL);
    } else {
      headers.set("Location", LOGIN_URL);
    }

    return new Response(null, {
      status: 307,
      headers,
    });
  },
};
