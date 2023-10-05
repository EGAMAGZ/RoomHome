import { HandlerContext, Handlers } from "$fresh/server.ts";
import { deleteCookie } from "$cookies";
import { LOGOUT_URL, USER_SESSION_COOKIE_NAME } from "@/utils/config.ts";

export const handler: Handlers = {
  GET(req: Request, _ctx: HandlerContext) {
    const headers = new Headers(req.headers);

    deleteCookie(headers, USER_SESSION_COOKIE_NAME);

    headers.set("Location", LOGOUT_URL);

    return new Response(null, {
      status: 307,
      headers,
    });
  },
};
