import { HandlerContext, Handlers } from "$fresh/server.ts";
import { deleteCookie } from "$cookies";
import { ADMIN_LOGIN_URL } from "@/utils/config.ts";

export const handler: Handlers = {
  GET(req: Request, _ctx: HandlerContext) {
    const headers = new Headers(req.headers);
    deleteCookie(headers, "userSession");

    headers.set("Location", ADMIN_LOGIN_URL);

    return new Response(null, { status: 307, headers });
  },
};
