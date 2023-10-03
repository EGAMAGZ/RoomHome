import { HandlerContext, Handlers } from "$fresh/server.ts";
import {
  deleteCookie,
  getCookies,
} from "https://deno.land/std@0.203.0/http/cookie.ts";

export const handler: Handlers = {
  GET(req: Request, _ctx: HandlerContext) {
    const url = new URL(req.url);
    const headers = new Headers(req.headers);
    console.log(`Logout cookies`);
    
    console.log(getCookies(req.headers));
    deleteCookie(headers, "userSession");

    headers.set("Location", "/");
    console.log(getCookies(req.headers));

    return new Response(null, { status: 307, headers });
  },
};
