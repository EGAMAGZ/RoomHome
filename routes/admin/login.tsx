import { Handlers } from "$fresh/server.ts";
import SessionState from "@/model/session.ts";
import { setCookie } from "https://deno.land/std@0.203.0/http/cookie.ts";

export const handler: Handlers<any, SessionState> = {
  GET(_req, ctx) {
    const headers = new Headers();
    setCookie(headers, {
      name: "userSession",
      value: "sample",
      maxAge: 60 * 60 * 24 * 7,
    });
    return new Response(`middleware data is ${ctx.state.userSession}`, {
      headers,
    });
  },
};
