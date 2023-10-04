import { HandlerContext, Handlers } from "$fresh/server.ts";
import { setCookie } from "$cookies";
import {
  ADMIN_ROOT_URL,
  COOKIE_MAX_AGE,
  USER_SESSION_COOKIE_NAME
} from "@/utils/config.ts";
import { JwtContent } from "@/model/jwt.ts";


export const handler: Handlers = {
  async POST(req: Request, ctx: HandlerContext) {
    const formData = await req.formData();
    const res = await fetch("/api/auth/empleado/login", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email")?.toString(),
        password: formData.get("password")?.toString(),
      }),
    });

    if(res.status !== 200) {
      return ctx.render({});
    }

    const { } = (await res.json()) as ApiResponse<JwtContent>;

    const headers = new Headers(req.headers);
    setCookie(headers, {
      name: USER_SESSION_COOKIE_NAME,
      value: jr,
      maxAge: COOKIE_MAX_AGE,
    });
    headers.append("Location", ADMIN_ROOT_URL);

    return new Response(null, {
      status: 303,
      headers,
    });
  },
};
