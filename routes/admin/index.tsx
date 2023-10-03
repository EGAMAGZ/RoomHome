import { Handlers } from "$fresh/server.ts";
import SessionState from "@/model/session.ts";

export const handler: Handlers<any, SessionState> = {
  GET(_req, ctx) {
    return new Response(`middleware data is ${ctx.state.userSession}`);
  },
};