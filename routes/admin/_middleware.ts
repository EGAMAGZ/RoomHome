import { MiddlewareHandlerContext } from "$fresh/server.ts";
import SessionState from "@/model/session.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<SessionState>,
) {
  const url = new URL(req.url);
  console.log(url);
  if (url.pathname === "/admin/login") {
    console.log("OMITIR");
    return await ctx.next();
  }
  console.log("PASAR");
  ctx.state.userSession = "sample";
  return  await ctx.next();
  // resp.headers.set("server", "fresh server");
  // return resp;
}
